import { Router } from "express";
import { deleteProducto, getProducto, getProductos, postProducto, putProducto } from "../controllers/producto";
import { check } from "express-validator";
import { existeProductoPorId } from "../helpers/db-validator";
import { validarCampos } from "../middlewares/validar-campos";


export const router = Router();


router.get('/',getProductos);
router.get('/:id',[
    check('id').custom(existeProductoPorId)
],getProducto);
router.post('/',[
    check('nombre','El nombre es obligatorio').not().isEmpty(),
    validarCampos
],postProducto);
router.put('/:id',[
    check('id').custom(existeProductoPorId),
    validarCampos
],putProducto);
router.delete('/:id',[
    check('id').custom(existeProductoPorId),
    validarCampos
],deleteProducto);

export default router;