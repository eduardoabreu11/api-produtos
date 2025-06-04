import {z} from "zod";



const EditSchema = z.object({
    descricao: z.string({required_error:"descricao nao informada"}).min(3, "descricao nao informada"),
    status: z.enum(["A", "I"], {message: "STATUS INVALIDO DEVE SER A OU I"}),
    categoria: z.string({required_error:"categoria nao informada"}).min(1,"categoria nao informada"),
});

const InserirSchema = z.object({
    descricao: z.string({required_error:"descricao nao informada"}).min(3, "descricao nao informada"),
    status: z.enum(["A", "I"], {message: "STATUS INVALIDO DEVE SER A OU I"}),
    categoria: z.string({required_error:"categoria nao informada"}).min(1,"categoria nao informada"),
});



export default {EditSchema, InserirSchema}