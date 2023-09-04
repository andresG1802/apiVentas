import {Request, Response } from 'express';
import { json } from 'sequelize/types';
import Carrito_compras from '../models/carrito_compras';

export const getCarritosCompras = async( req: Request , res: Response ) => {

    const carritos_compras = await Carrito_compras.findAll();

    res.json({ carritos_compras });
}

export const getCarritoCompras = async( req: Request , res: Response ) => {

    const { id } = req.params;

    const carrito_compras = await Carrito_compras.findByPk( id );

    if(carrito_compras ) 
    {
        res.json(carrito_compras);
    } 
    else 
    {
        res.status(404).json({
            msg: `No existe un usuario con el id ${ id }`
        });
    }
}

export const postCarritoCompras = async( req: Request , res: Response ) => {
    
    const { body } = req;

    try {
        const carrito_compras = Carrito_compras.build(body);
        await carrito_compras.save();

        res.json( carrito_compras );


    } catch (error) {

        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        })    
    }

}

export const putCarritoCompras = async( req: Request , res: Response ) => {

    const { id }   = req.params;
    const { body } = req;

    try {
        
        const carrito_compras = await Carrito_compras.findByPk( id );
        if ( !carrito_compras ) {
            return res.status(404).json({
                msg: 'No existe un usuario con el id ' + id
            });
        }

        await carrito_compras.update( body );

        res.json( carrito_compras );

    } catch (error) {

        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        })    
    }   
}


export const deleteCarritoCompras = async( req: Request , res: Response ) => {

    const { id } = req.params;

    const carrito_compras = await Carrito_compras.findByPk( id );
    if ( !carrito_compras ) {
        return res.status(404).json({
            msg: 'No existe un usuario con el id ' + id
        });
    }

    await carrito_compras.update({ estado: false });

    // await usuario.destroy();
    res.json(carrito_compras);
}