import "dotenv/config"
import {randomUUID} from "node:crypto";
import servicePro from "../services/service.produto.knex.js";
import repositoryProdutos from "../repositories/repository.produtos.js";



describe("testando rotinas de produtos", ()=>{
        it("deve listar produto por id", async ()=>{
            const id = 1;

            const prod = await servicePro.listarId(id)


             expect(prod).toHaveProperty("id");
        });

      
        it("deve conseguir cadastrar novo usuario", async ()=>{
            const status = "A";
            const categoria = undefined;


             const prod = await servicePro.listar(status, categoria);
             expect(prod[0]).toHaveProperty("id");
        });

       it("deve conseguir cadastrar novo produto", async ()=>{
            const descricao = "produto teste";
            const status = "A"
            const categoria = "informatica";


             const prod = await servicePro.inserir(descricao, status, categoria);
             expect(prod).toHaveProperty("id");
        });

         it("deve conseguir editar um produto", async ()=>{
            const id = 2;
            const descricao = "produto teste"
            const status = "A"
            const categoria = "informatica";


             const prod = await servicePro.editar(id, descricao, status, categoria);
             expect(prod).toHaveProperty("id");
        });


         it("deve conseguir excluir um produto", async ()=>{
          
            const descricao = "produto teste"
            const status = "A"
            const categoria = "informatica";


             const prod = await servicePro.inserir(descricao, status, categoria);
             let msg = "OK"
             try {
                const exclusao = await servicePro.excluir(prod.id)
             }catch(error){
                msg = error;
             }
             
             expect(msg).toEqual("OK");
        });



})