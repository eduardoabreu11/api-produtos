import { Router } from "express";
import controllerUsuario from "./controllers/controller.usuario.js"
import controllerProduto from "./controllers/controller.produto.js";
import { validadeSchema } from "./middlewares/validation.js";
import schemaUsuario from "../src/validations/validation.usuario.js"
import schemaProd from "./validations/validation.produto.js"
import { validateJWT } from "../src/utils/jwt.js";



const router = Router();





router.get("/produtos",  validateJWT ,controllerProduto.listar );


router.get("/produtos/:id_produto",validateJWT, controllerProduto.listarId );


router.put("/produtos/:id_produto",validateJWT,validadeSchema(schemaProd.EditSchema) , controllerProduto.editar );

router.post("/produtos",[validateJWT, validadeSchema(schemaProd.InserirSchema)],controllerProduto.inserir);

router.delete("/produtos/:id_produto",validateJWT, controllerProduto.excluir);


router.post("/usuarios", validadeSchema(schemaUsuario.UsuarioSchema),controllerUsuario.inserirUsuario);

router.post("/usuarios/login",validadeSchema(schemaUsuario.LoginSchema), controllerUsuario.login);


export default router