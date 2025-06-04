import knex from "../database/database.js";



async function inserirUsuario(nome, email, senha_hash){


    const usuario = await knex.insert({
        nome,
        email,
        senha: senha_hash
    }, ["id", "nome", "email"]).into("usuarios")

   return usuario
}




async function listarByEmail(email){

    


    const usuario = await knex("usuarios").where({
        email,
        
    }).select(["id", "nome", "email", "senha"])

    

             return usuario

       
        

        
    }

    






export default {inserirUsuario, listarByEmail}