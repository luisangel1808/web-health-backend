import {Schema, model} from 'mongoose'

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
        required:true
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

export default model('User', UserSchema)