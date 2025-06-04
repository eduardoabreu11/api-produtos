import {z} from "zod";


function validadeSchema(schemaObj){

    return function (req, res, next){

        const resposta = schemaObj.safeParse(req.body);
        if(resposta.success){
            return next()
        }else{
            res.status(400).json({erro:resposta.error.issues[0].message})
    }
    }

}

export {validadeSchema}



