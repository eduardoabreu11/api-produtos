import "dotenv/config";
import knex from "../database.js";

function CreateTableUsuario() {
    return knex.schema.createTable("usuarios", (table) => {
        table.bigIncrements("id").primary();
        table.string("nome", 100);
        table.string("email", 100);
        table.string("senha", 500);
    }).then(() => {
        console.log("Tabela usuarios criada");
    });
}

function CreateTableProduto() {
    return knex.schema.createTable("produtos", (table) => {
        table.bigIncrements("id").primary();
        table.string("descricao", 200);
        table.string("status", 20);
        table.string("categoria", 50);
    }).then(() => {
        console.log("Tabela produtos criada");
    });
}

CreateTableUsuario();
CreateTableProduto();