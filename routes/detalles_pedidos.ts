import { Router } from "express";
import { deleteDetallesPedido, getDetallesPedido, getDetallesPedidos, postDetallesPedido, putDetallesPedido } from "../controllers/detalles_pedidos";
import { check } from "express-validator";
import { existeDetallesPedidoPorId } from "../helpers/db-validator";
import { validarCampos } from "../middlewares/validar-campos";

const router = Router();


router.get('/',getDetallesPedidos);
router.get('/:id',[
    check('id').custom(existeDetallesPedidoPorId)
],getDetallesPedido);
router.post('/',validarCampos,postDetallesPedido);
router.put('/:id',[
    check('id').custom(existeDetallesPedidoPorId)
,validarCampos
],putDetallesPedido);
router.delete('/:id',[
    check('id').custom(existeDetallesPedidoPorId)
,validarCampos
],deleteDetallesPedido);

export default router;
