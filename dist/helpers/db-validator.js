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
exports.existeCarritoComprasPorId = exports.existeDetallesPedidoPorId = exports.existePedidoPorId = exports.existeProductoPorId = exports.existeUsuarioPorId = void 0;
const carrito_compras_1 = __importDefault(require("../models/carrito_compras"));
const detalles_pedido_1 = __importDefault(require("../models/detalles_pedido"));
const pedidos_1 = __importDefault(require("../models/pedidos"));
const productos_1 = __importDefault(require("../models/productos"));
const usuario_1 = __importDefault(require("../models/usuario"));
const existeUsuarioPorId = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const existeUsuario = yield usuario_1.default.findByPk(id);
    if (!existeUsuario) {
        throw new Error(`El id no existe ${id}`);
    }
});
exports.existeUsuarioPorId = existeUsuarioPorId;
const existeProductoPorId = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const existeProducto = yield productos_1.default.findByPk(id);
    if (!existeProducto) {
        throw new Error(`El id no existe ${id}`);
    }
});
exports.existeProductoPorId = existeProductoPorId;
const existePedidoPorId = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const existePedido = yield pedidos_1.default.findByPk(id);
    if (!existePedido) {
        throw new Error(`El id no existe ${id}`);
    }
});
exports.existePedidoPorId = existePedidoPorId;
const existeDetallesPedidoPorId = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const detalles_pedido = yield detalles_pedido_1.default.findByPk(id);
    if (!detalles_pedido) {
        throw new Error(`El id no existe ${id}`);
    }
});
exports.existeDetallesPedidoPorId = existeDetallesPedidoPorId;
const existeCarritoComprasPorId = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const existeCarritoComprasPorId = yield carrito_compras_1.default.findByPk(id);
    if (!existeCarritoComprasPorId) {
        throw new Error(`El id no existe ${id}`);
    }
});
exports.existeCarritoComprasPorId = existeCarritoComprasPorId;
//# sourceMappingURL=db-validator.js.map