"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const usuario_1 = require("../controllers/usuario");
exports.router = (0, express_1.Router)();
exports.router.get('/', usuario_1.getUsuarios);
exports.router.get('/:id', usuario_1.getUsuario);
exports.router.post('/', usuario_1.postUsuario);
exports.router.put('/:id', usuario_1.putUsuario);
exports.router.delete('/:id', usuario_1.deleteUsuario);
exports.default = exports.router;
//# sourceMappingURL=usuarios.js.map