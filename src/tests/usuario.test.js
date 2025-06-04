import "dotenv/config"
import serviceUsuario from "../services/service.usuario";
import {randomUUID} from "node:crypto";
import repositoryUsuario from "../repositories/repository.usuario";



describe("testando rotinas de usuarios", ()=>{
        it("deve validar o login", async ()=>{
            const email = "rato@gmail.com";
            const senha = "12345"


             const usuario = await serviceUsuario.login(email,senha);
             expect(usuario).toHaveProperty("id");
        });

       
        it("deve conseguir cadastrar novo usuario", async ()=>{
            const email = randomUUID() +"marcos@gmail.com";
            const senha = "12345";
            const nome = "marcos"


             const usuario = await serviceUsuario.inserirUsuario(nome,email,senha)
             expect(usuario).toHaveProperty("id");
        });

       
        it("nao deve permitir email duplicados", async ()=>{
            const nome = "joao"
            const email = "joao@gmail.com";
            const senha = "12345";
            let msg = "";
           try{
                const usuario = await serviceUsuario.inserirUsuario(nome,email,senha)
           }catch(error){
                msg = error
           }


             
             expect(msg).toEqual("Email ja esta em uso por outra conta");
        });


        it("deve conseguir consultar usuario por email", async ()=>{
            const email = "marcos@gmail.com";
           


             const usuario = await repositoryUsuario.listarByEmail(email)
             expect(usuario[0]).toHaveProperty("id");
        });

       

})