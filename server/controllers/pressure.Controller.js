import Pressure from '../models/pressure';

export const create = async (req, res) =>{
    try {
        const pressure = new Pressure({
            idUser: req.body.idUser,
            systolic: req.body.systolic,
            diastolic: req.body.diastolic,
            pulse: req.body.pulse,
            observations: req.body.observations,
            valoration: req.body.valoration,
            date:req.body.date
        })
        await pressure.save();
        return res.json(pressure);
    } catch (error) {
        res.status(500).json({
            message: error.message || 'Something was wrong creating the Pressure measurement'
        })
    }
}

export const getAllByUserId = async(req, res) =>{
    try{
        const {idUser} = req.params
        const {offset, limit} = req.query
        const total = await Pressure.find({idUser}).count()
        const pressures = await Pressure.find({idUser}).skip(parseInt(offset*limit)).limit(parseInt(limit));
        return res.json({pressures, total});
    }catch (error) {
        res.status(500).json({
            message: error.message || 'Something was wrong finding the Pressure measurements'
        })
    }
}

export const getById = async(req, res) =>{
    try{
        return res.json(await Pressure.findById(req.params.id));
    }catch (error) {
        res.status(500).json({
            message: error.message || 'Something was wrong finding the Pressure measurement'
        })
    }
}

export const update = async(req, res) =>{
    try{
        await Pressure.findByIdAndUpdate(req.params.id, req.body, {
            useFindAndModify: false,
        }) 
        return res.json({message: 'Pressure measurement was updated sucessfully'})
    }catch (error) {
        res.status(500).json({
            message: error.message || 'Something was wrong updating Pressure measurement'
        })
    }
}

export const erase = async(req, res) =>{
    try{
        await Pressure.findByIdAndDelete(req.params.id)
        return res.json({message: 'Pressure measurement was deleted sucessfully'})
    }catch (error) {
        res.status(500).json({
            message: error.message || 'Something was wrong deleting Pressure'
        })
    }
}