const {Schema, model} = require('mongoose');

const VideoSchema = new Schema({
    idUser:{
        type:String,
        required:true
    },
    url:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    title:{
        type:String,
        required:true
    },
    url:{
        type:String,
        required:true
    },
    miniature:{
        type:String,
        required:true
    },
}, {
    timestamps:true,
    versionKey:false
})

module.exports = model('Video', VideoSchema)