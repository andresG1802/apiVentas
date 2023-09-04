import { Router } from "express";
import { deletePedido, getPedido, getPedidos, postPedido, putPedido } from "../controllers/pedidos";
import { check } from "express-validator";
import { existePedidoPorId } from "../helpers/db-validator";
import { validarCampos } from "../middlewares/validar-campos";

const router = Router();

router.get('/',getPedidos);
router.get('/:id',[
    check('id').custom(existePedidoPorId)
],getPedido);
router.post('/',validarCampos,postPedido);
router.put('/:id',[
    check('id').custom(existePedidoPorId),
    validarCampos
],putPedido);
router.delete('/:id',[
    check('id').custom(existePedidoPorId),
    validarCampos
],deletePedido);

export default router;