import repoProduto from "../repositories/repository.produtos.js"



async function listar(status,categoria){

   

    let filtro = {};

    if (status){
        filtro.status = status
    }
    if (categoria){
        filtro.categoria = categoria
    }

    const lista = await repoProduto.listar(filtro);

    return lista
}


async function listarId(id_produto){

   

    const produto = await repoProduto.listarId(id_produto)


    return produto[0];
}

async function editar(id, descricao, status, categoria){

    

    const produto = await repoProduto.editar(id, descricao,status,categoria)

    return produto[0];
}



async function inserir(descricao, status, categoria){




    const produto = await repoProduto.inserir(descricao, status, categoria)

    return produto[0];
}


async function excluir(id){


    await repoProduto.excluir(id)

    return {id: id}
}


export default {listar, listarId, inserir,editar, excluir }






