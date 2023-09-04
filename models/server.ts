import express, { Application } from 'express';
import cors from 'cors';
import db from '../db/connection';

import userRoutes from '../routes/usuarios';
import productoRoutes from '../routes/productos';
import pedidosRoutes from '../routes/pedidos';
import detallesPedidoRoutes from '../routes/detalles_pedidos';
import carritoComprasRoutes from '../routes/carrito_compras';

class Server {

    private app: Application;
    private port: string;
    private apiPaths = {
        usuarios: '/api/usuarios',
        productos:'/api/productos',
        pedidos:'/api/pedidos',
        detalles_pedidos:'/api/detalles_pedidos',
        carrito_compras:'/api/carrito_compras'
    }

    constructor() {
        this.app  = express();
        this.port = process.env.PORT || '8080';

        // Métodos iniciales
        this.dbConnection();
        this.middlewares();
        this.routes();
    }

    async dbConnection() {

        try {
            
            await db.authenticate();
            console.log('Database online');

        } catch (error) {
            console.log('Error al conectar la base de datos');
        }
    }

    middlewares() 
    {

        // CORS
        this.app.use( cors() );

        // Lectura del body
        this.app.use( express.json() );

        // Carpeta pública
        this.app.use( express.static('public') );
    }

    routes()
    {
        this.app.use(this.apiPaths.usuarios,userRoutes);
        this.app.use(this.apiPaths.productos,productoRoutes);
        this.app.use(this.apiPaths.pedidos,pedidosRoutes);
        this.app.use(this.apiPaths.detalles_pedidos,detallesPedidoRoutes);
        this.app.use(this.apiPaths.carrito_compras,carritoComprasRoutes);
    }
    listen() {
        this.app.listen( this.port, () => {
            console.log('Servidor corriendo en puerto ' + this.port );
        })
    }
}

export default Server;