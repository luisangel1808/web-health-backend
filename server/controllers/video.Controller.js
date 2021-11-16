import Video from '../models/video';

export const create = async (req, res) =>{
    try {
        const video = new Video({
            idUser: req.body.idUser,
            url: req.body.url,
            description: req.body.description,
            title: req.body.title,
        })
        await video.save();
        return res.json(video);
    } catch (error) {
        res.status(500).json({
            message: error.message || 'Something was wrong creating the Video measurement'
        })
    }
}

export const getAllByUserId = async(req, res) =>{
    try{
        const {idUser} = req.params
        const {offset, limit} = req.query
        const total = await Video.find({idUser}).count()
        const videos = await Video.find({idUser}).skip(parseInt(offset*limit)).limit(parseInt(limit));
        return res.json({videos, total});
    }catch (error) {
        res.status(500).json({
            message: error.message || 'Something was wrong finding the Video measurements'
        })
    }
}

export const getById = async(req, res) =>{
    try{
        return res.json(await Video.findById(req.params.id));
    }catch (error) {
        res.status(500).json({
            message: error.message || 'Something was wrong finding the Video measurement'
        })
    }
}

export const update = async(req, res) =>{
    try{
        await Video.findByIdAndUpdate(req.params.id, req.body, {
            useFindAndModify: false,
        }) 
        return res.json({message: 'Video measurement was updated sucessfully'})
    }catch (error) {
        res.status(500).json({
            message: error.message || 'Something was wrong updating Video measurement'
        })
    }
}

export const erase = async(req, res) =>{
    try{
        await Video.findByIdAndDelete(req.params.id)
        return res.json({message: 'Video measurement was deleted sucessfully'})
    }catch (error) {
        res.status(500).json({
            message: error.message || 'Something was wrong deleting Video'
        })
    }
}