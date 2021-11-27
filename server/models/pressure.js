import {Schema, model} from 'mongoose'

const PressureSchema = new Schema({
    idUser:{
        type:String,
        required:true
    },
    systolic:{
        type:Number,
        required:true
    },
    diastolic:{
        type:Number,
        required:true
    },
    pulse:Number,
    observations:String,
    valoration:Number,
    date:{
        type:Date,
        required:true
    }
}, {
    timestamps:true,
    versionKey:false
})

module.exports = model('Pressure', PressureSchema)