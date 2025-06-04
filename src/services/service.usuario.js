
import repositoryUsuario from "../repositories/repository.usuario.js";
import bcrypt from "bcryptjs";


async function inserirUsuario(nome, email, senha){

    const validarEmail = await repositoryUsuario.listarByEmail(email)
    if(validarEmail.length > 0){
        throw "Email ja esta em uso por outra conta"
    }

    const senha_hash = await bcrypt.hash(senha, 6);



    const usuario = await repositoryUsuario.inserirUsuario(nome, email, senha_hash)

   return usuario[0]
}




async function login(email, senha){



  
    


    const usuario = await repositoryUsuario.listarByEmail(email)

    if(usuario.length == 0){

        throw "email ou senha invalidos";}
       else {

            const senhaConfere = await bcrypt.compare(senha, usuario[0].senha)

            if(senhaConfere){
            delete usuario[0].senha;

             return usuario[0]

        }
        else{
            throw "email ou senha invalidos";
        }
        }

        
    }

    






export default {inserirUsuario, login}