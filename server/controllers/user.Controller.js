const User = require('../models/user.js');
const bcrypt = require('bcrypt');

const create = async (req, res) =>{
    try {
        const {name, lastName, identificationType, identification, role, phone,
        email, password, birthDate} = req.body;
        const hashedPassword = await bcrypt.hash(password, 10)
        let user = new User({
            name,
            lastName,
            identificationType,
            identification,
            role,
            phone,
            email,
            password: hashedPassword,
            birthDate,
        })
        await user.save();
        res.status(201);
        return res.json(user);
    } catch (error) {
        res.status(500).json({
            message: error.message || 'Something was wrong creating the user'
        })
    }
}

const getAllByUserId = async(req, res) =>{
    try{
        const {idUser} = req.params
        const {offset, limit} = req.query
        const total = await User.find({idUser}).count()
        const users = await User.find({idUser}).skip(parseInt(offset*limit)).limit(parseInt(limit));
        return res.json({users, total});
    }catch (error) {
        res.status(500).json({
            message: error.message || 'Something was wrong finding the user'
        })
    }
}

const getMyUserData = async(req, res) =>{
    try{
        return res.json(await User.findById(req.user.sub));
    }catch (error) {
        res.status(500).json({
            message: error.message || 'Something was wrong finding the user'
        })
    }
}

const getById = async(req, res) =>{
    try{
        return res.json(await User.findById(req.params.id));
    }catch (error) {
        res.status(500).json({
            message: error.message || 'Something was wrong finding the user'
        })
    }
}

const getByEmail = async(email) =>{
    try{
        return await User.findOne({email:email});
    }catch (error) {
        console.log(error)
    }
}

const update = async(req, res) =>{
    try{
        await User.findByIdAndUpdate(req.params.id, req.body, {
            useFindAndModify: false,
        }) 
        return res.json({message: 'User measurement was updated sucessfully'})
    }catch (error) {
        res.status(500).json({
            message: error.message || 'Something was wrong updating user'
        })
    }
}

const erase = async(req, res) =>{
    try{
        await User.findByIdAndDelete(req.params.id)
        return res.json({message: 'User was deleted sucessfully'})
    }catch (error) {
        res.status(500).json({
            message: error.message || 'Something was wrong deleting user'
        })
    }
}

const addTask = async(req, res) =>{
    try{
        const user = await User.findById(req.params.id);
        const { title, description, importance, frequency } = req.body;
        const newTask ={
            title,
            description,
            importance,
            frequency,
        }
        user.tasks.push(newTask);
        await user.save();
        return res.json({message: 'Task added sucessfully'})
    }catch (error) {
        res.status(500).json({
            message: error.message || 'Something was wrong deleting user'
        })
    }
}

const editTask = async(req, res) =>{
    try{
        const { newTask, idUser } = req.body;
        const user = await User.findById(idUser);
        user.tasks = user.tasks.filter(task=> task.id!==newTask.id);
        user.tasks.push(newTask);
        return res.json({message: 'User measurement was deleted sucessfully'})
    }catch (error) {
        res.status(500).json({
            message: error.message || 'Something was wrong deleting user'
        })
    }
}

const deleteTask = async(req, res) =>{
    try{
        const { idTask, idUser } = req.body;
        const user = await User.findById(idUser);
        user.tasks = user.tasks.filter(task=> task.id!==idTask)
        return res.json({message: 'User measurement was deleted sucessfully'})
    }catch (error) {
        res.status(500).json({
            message: error.message || 'Something was wrong deleting user'
        })
    }
}

module.exports = { create, getAllByUserId, getMyUserData, getById, getByEmail, update, erase, addTask, editTask, deleteTask }