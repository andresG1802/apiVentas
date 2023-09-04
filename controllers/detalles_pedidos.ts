import {Request, Response } from 'express';
import { json } from 'sequelize/types';
import Detalles_pedido from '../models/detalles_pedido';
export const getDetallesPedidos = async( req: Request , res: Response ) => {

    const detalles_pedidos = await Detalles_pedido.findAll();

    res.json({ detalles_pedidos });
}

export const getDetallesPedido = async( req: Request , res: Response ) => {

    const { id } = req.params;

    const detalles_pedido = await Detalles_pedido.findByPk( id );

    if( detalles_pedido) 
    {
        res.json(detalles_pedido);
    } 
    else 
    {
        res.status(404).json({
            msg: `No existe un usuario con el id ${ id }`
        });
    }
}

export const postDetallesPedido = async( req: Request , res: Response ) => {
    
    const { body } = req;

    try {
        const detalles_pedido = Detalles_pedido.build(body);
        await detalles_pedido.save();

        res.json(detalles_pedido);


    } catch (error) {

        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        })    
    }

}

export const putDetallesPedido = async( req: Request , res: Response ) => {

    const { id }   = req.params;
    const { body } = req;

    try {
        
        const detalles_pedido = await Detalles_pedido.findByPk( id );
        if ( !detalles_pedido ) {
            return res.status(404).json({
                msg: 'No existe un usuario con el id ' + id
            });
        }

        await detalles_pedido.update( body );

        res.json( detalles_pedido );

    } catch (error) {

        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        })    
    }   
}


export const deleteDetallesPedido = async( req: Request , res: Response ) => {

    const { id } = req.params;

    const detalles_pedido = await Detalles_pedido.findByPk( id );
    if ( !detalles_pedido ) {
        return res.status(404).json({
            msg: 'No existe un usuario con el id ' + id
        });
    }

    await detalles_pedido.update({ estado: false });

    // await usuario.destroy();
    res.json(detalles_pedido);
}
