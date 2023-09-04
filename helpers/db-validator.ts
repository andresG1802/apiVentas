import Carrito_compras from "../models/carrito_compras";
import Detalles_pedido from "../models/detalles_pedido";
import Pedido from "../models/pedidos";
import Producto from "../models/productos";
import Usuario from "../models/usuario";

export const existeUsuarioPorId= async(id: number)=>{

    const existeUsuario = await Usuario.findByPk(id);

    if(!existeUsuario)
    {
        throw new Error(`El id no existe ${ id }`);
    }
}
export const existeProductoPorId= async(id: number)=>{
    const existeProducto = await Producto.findByPk(id);

    if(!existeProducto)
    {
        throw new Error(`El id no existe ${ id }`);
    }
}
export const existePedidoPorId= async(id: number)=>{

    const existePedido = await Pedido.findByPk(id);

    if(!existePedido)
    {
        throw new Error(`El id no existe ${ id }`);
    }
}
export const existeDetallesPedidoPorId= async(id: number)=>{

    const  detalles_pedido = await Detalles_pedido.findByPk(id);

    if(!detalles_pedido)
    {
        throw new Error(`El id no existe ${ id }`);
    }
}
export const existeCarritoComprasPorId= async(id: number)=>{

    const existeCarritoComprasPorId = await Carrito_compras.findByPk(id);

    if(!existeCarritoComprasPorId)
    {
        throw new Error(`El id no existe ${ id }`);
    }
}
