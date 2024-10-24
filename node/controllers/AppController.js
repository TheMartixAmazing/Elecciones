import AppModel from "../models/AppModel.js";

export const getAllUsers = async (req, res) => {
    try {
        const users = await AppModel.findAll()
        res.json(users)
    } catch (error) {
        res.json({ message: error.message})
    }
}

export const createUser = async (req, res) => {
    try {
        await AppModel.create(req)
        res.json({message: 'Usuario creado' + req})
    } catch (error) {
        res.json({ message: error.message})        
    }
}