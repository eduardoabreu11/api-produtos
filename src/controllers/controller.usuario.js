
import serviceUsuario from "../services/service.usuario.js";
import {CreateJwt} from "../utils/jwt.js"



async function inserirUsuario(req, res){

    try{
        
        
            const {nome, email, senha} = req.body;
          
            
        
            const usuario = await serviceUsuario.inserirUsuario(nome,email, senha);
            
            usuario.token = CreateJwt({
                id: usuario.id
            });
        
            res.status(201).json(usuario)
    }catch(err){
        res.status(400).json({error: err.message || err });
    }
}


async function login(req, res){



    const {email, senha} = req.body
    

        

        try{
            const usuario = await serviceUsuario.login(email,senha);

               usuario.token = CreateJwt({
                                 id: usuario.id
                                            }) 
              res.status(200).json(usuario);
        } catch(error){
            res.status(401).json({error: error.message})
        }

           
       
}

export default {inserirUsuario, login}




