import { DataTypes } from "sequelize";
import db from "../db/connection";
import Usuario from "./usuario";
import Producto from "./productos";

const Carrito_compras = db.define('carrito_compras',{
    carrito_id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },usuario_id:{
        type: DataTypes.INTEGER,
        references:{
            model:Usuario,
            key:'id',
        },
    },
    producto_id:{
        type: DataTypes.INTEGER,
        references:{
            model:Producto,
            key:'id',
        },
    },
    cantidad:{
        type:DataTypes.INTEGER
    },
    estado:{
        type:DataTypes.BOOLEAN,
        defaultValue:true
    }
},{
    tableName: 'detalles_pedido', // Nombre de la tabla en la base de datos
   timestamps: false
})

export default Carrito_compras;