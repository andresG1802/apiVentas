import { DataTypes } from "sequelize";
import db from '../db/connection';

const Usuario = db.define('Usuario', {
    usuario_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre_usuario: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    correo_electronico: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    contraseña: {
        type: DataTypes.STRING,
        allowNull: false
    },
    nombre: {
        type: DataTypes.STRING
    },
    apellido: {
        type: DataTypes.STRING
    },
    direccion: {
        type: DataTypes.TEXT
    },
    telefono: {
        type: DataTypes.STRING
    },
    estado: {
        type: DataTypes.BOOLEAN,
        defaultValue: true
    },
    fecha_registro: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    }
}, {
    tableName: 'usuarios', // Nombre de la tabla en la base de datos
    timestamps: false
});

export default Usuario;
