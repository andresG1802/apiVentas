import { DataTypes } from "sequelize";
import db from "../db/connection";

const Producto = db.define('Productos',{
    producto_id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    nombre:{
        type:DataTypes.STRING,
        allowNull:false,
        unique:true
    },
    descripcion:{
        type:DataTypes.TEXT,
        allowNull:false,
    },
    precio:{
        type:DataTypes.DECIMAL(10,2)
    },
    stock:{
        type:DataTypes.INTEGER
    },
    imagen:{
        type:DataTypes.STRING
    },
    categoria:{
        type:DataTypes.STRING
    },
    estado:{
        type:DataTypes.BOOLEAN,
        defaultValue:true
    }
},{
    tableName: 'productos', // Nombre de la tabla en la base de datos
    timestamps: false

});

export default Producto;