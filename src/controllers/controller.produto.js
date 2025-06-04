
import serviceProduto from "../services/service.produto.knex.js";


async function listar(req, res){

    const status = req.query.status;
    const categoria = req.query.categoria;

    const produtos = await serviceProduto.listar(status,categoria)

    res.status(200).json(produtos)
}





async function listarId(req, res){

    const id_produto = req.params.id_produto;

    const produto = await serviceProduto.listarId(id_produto)

    res.status(200).json(produto)
}

async function editar(req, res){

    
    
    const id = req.params.id_produto
    const {descricao, status, categoria} = req.body

    const produto = await serviceProduto.editar(id, descricao, status, categoria)

    res.status(200).json(produto)
}



async function inserir(req, res){


    

    const {descricao, status, categoria} = req.body
    


    const produto = await serviceProduto.inserir(descricao, status, categoria)

    res.status(201).json(produto)
}


async function excluir(req, res){


    const id = req.params.id_produto

    const produto = await serviceProduto.excluir(id)

    res.status(201).json(produto)
}


export default {listar, listarId, inserir,editar, excluir }