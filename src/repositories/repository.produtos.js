import knex from "../database/database.js";



async function listar(filtro){

   
    const lista = await knex("produtos").where(filtro).select('*')

    return lista
}


async function listarId(id_produto){

   

    const produto = await knex("produtos").where({
        id: id_produto
    }).select('*')


    return produto;
}

async function editar(id, descricao, status, categoria){

    

    const produto = await knex( "produtos").where({
        id: id
    }).update({
        descricao:descricao,
        status:status,
        categoria:categoria
    }, ["id", "descricao", "status","categoria"])

    return produto;
}



async function inserir(descricao, status, categoria){




    const produto = await knex.insert({
        descricao:descricao,
        status:status,
        categoria:categoria
    }, ["id", "descricao", "status"]).into("produtos")

    return produto;
}


async function excluir(id){


    await knex("produtos").where({
        id: id
    }).del()

    return {id: id}
}


export default {listar, listarId, inserir,editar, excluir }






