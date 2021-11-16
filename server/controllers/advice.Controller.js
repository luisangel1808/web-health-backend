import Advice from '../models/advice';

export const create = async (req, res) =>{
    try {
        const advice = new Advice({
            idUser: req.body.idUser,
            url: req.body.url,
            description: req.body.description,
            title: req.body.title,
        })
        await advice.save();
        return res.json(video);
    } catch (error) {
        res.status(500).json({
            message: error.message || 'Something was wrong creating the advice measurement'
        })
    }
}

export const getAllByUserId = async(req, res) =>{
    try{
        const {idUser} = req.params
        const {offset, limit} = req.query
        const total = await Advice.find({idUser}).count()
        const advices = await Advice.find({idUser}).skip(parseInt(offset*limit)).limit(parseInt(limit));
        return res.json({advices, total});
    }catch (error) {
        res.status(500).json({
            message: error.message || 'Something was wrong finding the advice measurements'
        })
    }
}

export const getById = async(req, res) =>{
    try{
        return res.json(await Advice.findById(req.params.id));
    }catch (error) {
        res.status(500).json({
            message: error.message || 'Something was wrong finding the Advice measurement'
        })
    }
}

export const update = async(req, res) =>{
    try{
        await Advice.findByIdAndUpdate(req.params.id, req.body, {
            useFindAndModify: false,
        }) 
        return res.json({message: 'Advice measurement was updated sucessfully'})
    }catch (error) {
        res.status(500).json({
            message: error.message || 'Something was wrong updating Video measurement'
        })
    }
}

export const erase = async(req, res) =>{
    try{
        await Advice.findByIdAndDelete(req.params.id)
        return res.json({message: 'Advice measurement was deleted sucessfully'})
    }catch (error) {
        res.status(500).json({
            message: error.message || 'Something was wrong deleting Advice'
        })
    }
}