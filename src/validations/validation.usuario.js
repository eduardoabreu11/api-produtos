import {z} from "zod";


const LoginSchema = z.object({
    email: z.string({required_error:"email nao irformado"}).email("email formato invalido"),
    senha: z.string({required_error:"senha nao informada"}).min(1,"senha nao informada"),
});

const UsuarioSchema = z.object({
    nome: z.string({required_error:"nome nao informado"}).min(3, "nome tem q ter pelo menos 3 letras"),
    email: z.string({required_error:"email nao irformado"}).email("email formato invalido"),
    senha: z.string({required_error:"senha nao informada"}).min(5,"senha tem q ter 5 caracteres"),
});



export default {LoginSchema, UsuarioSchema}