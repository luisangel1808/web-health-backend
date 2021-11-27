const {Schema, model} = require('mongoose')

const ImageSchema = new Schema({
    title: String,
    key:String,
    url:{
        type:String,
        required:true
    }
}, {
    timestamps:true,
    versionKey:false
})

module.exports = model('Image', ImageSchema);