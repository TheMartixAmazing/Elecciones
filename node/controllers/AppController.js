import { Sequelize } from "sequelize";
import AppModel from "../models/AppModel.js";

const getAllUsers = async (req, res) => {
    try {
        const users = await AppModel.findAll()
        res.json(users)
    } catch (error) {
        res.json({ message: error.message })
    }
}

const createUser = async (req, res) => {
    try {
        await AppModel.create(req.body)
        res.json({ message: 'Usuario creado' })
    } catch (error) {
        res.json({ message: "Error: " + error.message })
    }
}

const getUserById = async (req, res) => {
    try {
        const user = await AppModel.findByPk(req.params.id)
        res.json(user)
    } catch (error) {
        res.json({ message: "Error: " + error.message })
    }
}

const getUserByEmailAndPassword = async (req, res) => {
    try {
        const { userName, email, password } = req.body

        const whereClause = {};
        whereClause.pas_use = password;

        if (email) whereClause.cor_use = email;
        if (userName) whereClause.nom_use = userName;
        
        const user = await AppModel.findOne({
            where: whereClause,
        });

        if (!user) {
            res.json({ error: "No se encontró el usuario", success: false });
            return;
        }

        res.json({ success: true, user });
    } catch (error) {
        res.json({ message: "Error: " + error.message })
    }
}

export { getAllUsers, createUser, getUserById, getUserByEmailAndPassword }