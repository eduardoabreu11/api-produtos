import jwt from "jsonwebtoken";

//process.env.SECRET_TOKEN;

function CreateJwt(payload){
    const token = jwt.sign(payload, process.env.SECRET_TOKEN, {
        expiresIn: "7d"
    });

    return token;
}


function validateJWT(req, res, next){
    
    const autoken = req.headers.authorization;

    if(!autoken){
        return res.status(401).json({error:"token invalido"})
    }

    const [, token] = autoken .split(" ");

    jwt.verify(token, process.env.SECRET_TOKEN, function(err, token_decoded){
        if(err){
            return res.status(401).json({error:"token invalido"})
        }else{

            //salvar o id do usuario que enviou a req
            req.id = token_decoded.id
            console.log(req.id)
            next();
        }
    })
}



export {CreateJwt, validateJWT}