const { Strategy } = require('passport-local');
const bcrypt = require('bcrypt');

const boom = require('@hapi/boom');

import * as userCtrl from "../../../controllers/user.Controller";

const LocalStrategy = new Strategy({
        usernameField:'email',
        passwordField:'password'
    },
    
    async (email, password, done)=>{
    try{
        const user = await userCtrl.getByEmail(email);
        if(!user){
            done(boom.unauthorized(), false);
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if(!isMatch){
            done(boom.unauthorized(), false)
        }
        delete user.password;
        done(null, user);
    } catch(error){
        done(error, false);
    }
});

module.exports = LocalStrategy;