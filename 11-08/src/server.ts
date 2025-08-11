
import express, { Application } from "express";
import router from "./routes/ProdutoRoutes";


const app: Application = express();
const PORT: number  = 3000;

app.use(express.json());
app.use(router);

app.listen (PORT, ():void => {
    console.log(`🚀 Servidor rodando em http://localhost:${PORT}`);
})






