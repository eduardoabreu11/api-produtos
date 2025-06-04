import "dotenv/config";
import knex from "../database.js";

function DropTableUsuario() {
    return knex.schema.dropTable("usuarios")
        .then(() => {
            console.log("Tabela usuarios excluida");
        });
}

function DropTableProduto() {
    return knex.schema.dropTable("produtos")
        .then(() => {
            console.log("Tabela produtos excluida");
        });
}

DropTableUsuario();
DropTableProduto();