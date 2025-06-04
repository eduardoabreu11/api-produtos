import "dotenv/config"
import router from "../src/routes.js"
import express from "express";


const app = express();



app.use(express.json())
app.use(router);





app.listen(process.env.PORT, function(){
    console.log("servidor executando nda porta 3000")
})