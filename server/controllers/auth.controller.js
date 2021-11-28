const config = require('../config.js');
const User = require('../models/user.js');
const boom = require('@hapi/boom');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const nodemailer = require('nodemailer');

const auth = async (req, res, next) => {
  try {
      const user = req.user;
      const payload={
          sub:user.id,
          role: user.role
      }
      const token = jwt.sign(payload, config.jwtSecret);
      res.json({
          user, token});
  } catch (error) {
    next(error);
  }
};

const changePassword = async (req, res, next) => {
  try {
    const {token, newPassword} = req.body;
    const payload = jwt.verify(token, config.jwtSecretVerify);
    const user = await User.findById(payload.sub);
    //console.log(user.recoveryToken)
    //console.log(token)
    if (user.recoveryToken !== token) {
      throw boom.unauthorized();
    }
    const hash = await bcrypt.hash(newPassword, 10);
    await User.findByIdAndUpdate(payload.sub, {password:hash, recoveryToken:null}, {
      useFindAndModify: false,
  }) 
    res.status(200).json({
      message: 'Password changed'
    })
  } catch (error) {
      throw boom.unauthorized();
  }
};

const recovery =  async (req, res, next)=>{

  try{
      const {email} = req.body;
      const user = await User.findOne({email:email});
      if (!user) {
        throw boom.unauthorized();
      }

      const payload = { sub: user.id };
      const token = jwt.sign(payload, config.jwtSecretVerify, {expiresIn: '15min'});
      const link = `http://webhealth.com/recovery?token=${token}`;
      
      let transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true, // true for 465, false for other ports
        auth: {
            user: config.nodeMail,
            pass: config.nodeMailPassword
        },
      });

      await transporter.sendMail({
        from: config.nodeMail, // sender address
        to: email, // list of receivers
        subject: "Cambio de contraseña", // Subject line
        html: `<b>Ingresa a este link => ${link}</b>`, // html body
      });

      user.recoveryToken = token;
      await user.save();

      res.status(200).json({
        message: 'Message sent'
      })

  } catch (error){
      next(error);
  }
};

module.exports = { auth, changePassword, recovery }