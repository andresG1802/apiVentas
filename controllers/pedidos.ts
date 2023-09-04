import {Request, Response } from 'express';
import { json } from 'sequelize/types';
import Pedido from '../models/pedidos';

export const getPedidos = async( req: Request , res: Response ) => {

    const pedidos = await Pedido.findAll();

    res.json({ pedidos });
}

export const getPedido = async( req: Request , res: Response ) => {

    const { id } = req.params;

    const pedido = await Pedido.findByPk( id );

    if( pedido ) 
    {
        res.json(pedido);
    } 
    else 
    {
        res.status(404).json({
            msg: `No existe un usuario con el id ${ id }`
        });
    }
}

export const postPedido = async( req: Request , res: Response ) => {
    
    const { body } = req;

    try {
        const pedido = Pedido.build(body);
        await pedido.save();

        res.json( pedido );


    } catch (error) {

        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        })    
    }

}

export const putPedido = async( req: Request , res: Response ) => {

    const { id }   = req.params;
    const { body } = req;

    try {
        
        const pedido = await Pedido.findByPk( id );
        if ( !pedido ) {
            return res.status(404).json({
                msg: 'No existe un usuario con el id ' + id
            });
        }

        await pedido.update( body );

        res.json( pedido );

    } catch (error) {

        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        })    
    }   
}


export const deletePedido = async( req: Request , res: Response ) => {

    const { id } = req.params;

    const pedido = await Pedido.findByPk( id );
    
    if ( !pedido ) {
        return res.status(404).json({
            msg: 'No existe un usuario con el id ' + id
        });
    }

    await pedido.update({ estado: false });

    // await usuario.destroy();
    res.json(pedido);
}
