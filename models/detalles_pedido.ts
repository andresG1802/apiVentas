import { DataTypes } from "sequelize";
import db from '../db/connection';
import Pedido from "./pedidos";
import Producto from "./productos";

const Detalles_pedido = db.define('detalles_pedido',{
    detalle_id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    pedido_id:{
        type: DataTypes.INTEGER,
        references:{
            model:Pedido,
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
    precio_unitario:{
        type:DataTypes.DECIMAL(10,2)
    },
    estado:{
        type:DataTypes.BOOLEAN,
        defaultValue:true
    }
},{
     tableName: 'detalles_pedido', // Nombre de la tabla en la base de datos
    timestamps: false
});

export default Detalles_pedido;