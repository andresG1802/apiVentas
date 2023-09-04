import { DataTypes } from "sequelize";
import db from '../db/connection';
import Usuario from './usuario'; // Importa el modelo de Usuarios para la relación

const Pedido = db.define('Pedido', {
    pedidos_id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    usuario_id:{
        type: DataTypes.INTEGER,
        references:{
            model:Usuario,
            key:'id',
        },
    },
    fecha_pedido:{
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    },
    estado: {
        type: DataTypes.BOOLEAN
    }
}, {
    timestamps: false
});


export default Pedido;
