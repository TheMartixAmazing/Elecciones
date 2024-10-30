import { DataTypes } from "sequelize";
import sequelize from "../database/db.js";

const PropuestaModel = sequelize.define('propuestas', {
    nom_cand: {
        type: DataTypes.STRING,
        allowNull: false,
        // Si no tienes un id, usa nom_cand como clave primaria
    },
    inf_pro: {
        type: DataTypes.STRING,
        allowNull: false
    },
    pub_pro: {
        type: DataTypes.STRING,
        allowNull: false
    },
    nom_pro: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    timestamps: false,
    tableName: 'propuestas',
    freezeTableName: true
});

export default PropuestaModel;