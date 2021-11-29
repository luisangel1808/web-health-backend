const {Schema, model} = require('mongoose');

const UserSchema = new Schema({
    name:{
        type:String,
        required:true
    },
    lastName:{
        type:String,
        required:true
    },
    identification:{
        type:String,
        required:true
    },
    identificationType:{
        type:String,
        required:true
    },
    role:{
        type:String,
        required:true
    },
    phone:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    recoveryToken:{
        type:String,
        required:false
    },
    birthDate:{
        type:Date,
        required:true
    },
    tasks: Array,
}, {
    timestamps:true,
    versionKey:false
})

module.exports = model('User', UserSchema)