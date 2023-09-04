import { Router } from "express";
import { deleteCarritoCompras, getCarritoCompras, getCarritosCompras, postCarritoCompras, putCarritoCompras } from "../controllers/carrito_compras";
import { check } from "express-validator";
import { existeCarritoComprasPorId } from "../helpers/db-validator";
import { validarCampos } from "../middlewares/validar-campos";


export const router = Router();


router.get('/',getCarritosCompras);

router.get('/:id',[
    check('id').custom(existeCarritoComprasPorId)
],getCarritoCompras);

router.post('/',validarCampos,postCarritoCompras);

router.put('/:id',[
    check('id').custom(existeCarritoComprasPorId),
    validarCampos
],putCarritoCompras);

router.delete('/:id',[
    check('id').custom(existeCarritoComprasPorId),
    validarCampos
],deleteCarritoCompras);

export default router;

