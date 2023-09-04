"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const connection_1 = __importDefault(require("../db/connection"));
const usuarios_1 = __importDefault(require("../routes/usuarios"));
const productos_1 = __importDefault(require("../routes/productos"));
const pedidos_1 = __importDefault(require("../routes/pedidos"));
const detalles_pedidos_1 = __importDefault(require("../routes/detalles_pedidos"));
const carrito_compras_1 = __importDefault(require("../routes/carrito_compras"));
class Server {
    constructor() {
        this.apiPaths = {
            usuarios: '/api/usuarios',
            productos: '/api/productos',
            pedidos: '/api/pedidos',
            detalles_pedidos: '/api/detalles_pedidos',
            carrito_compras: '/api/carrito_compras'
        };
        this.app = (0, express_1.default)();
        this.port = process.env.PORT || '8080';
        // Métodos iniciales
        this.dbConnection();
        this.middlewares();
        this.routes();
    }
    dbConnection() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield connection_1.default.authenticate();
                console.log('Database online');
            }
            catch (error) {
                console.log('Error al conectar la base de datos');
            }
        });
    }
    middlewares() {
        // CORS
        this.app.use((0, cors_1.default)());
        // Lectura del body
        this.app.use(express_1.default.json());
        // Carpeta pública
        this.app.use(express_1.default.static('public'));
    }
    routes() {
        this.app.use(this.apiPaths.usuarios, usuarios_1.default);
        this.app.use(this.apiPaths.productos, productos_1.default);
        this.app.use(this.apiPaths.pedidos, pedidos_1.default);
        this.app.use(this.apiPaths.detalles_pedidos, detalles_pedidos_1.default);
        this.app.use(this.apiPaths.carrito_compras, carrito_compras_1.default);
    }
    listen() {
        this.app.listen(this.port, () => {
            console.log('Servidor corriendo en puerto ' + this.port);
        });
    }
}
exports.default = Server;
//# sourceMappingURL=server.js.map