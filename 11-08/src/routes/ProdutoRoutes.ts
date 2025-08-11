import { Router } from "express";
import { ProdutoController } from "../controllers/ProdutoController";

const router = Router();

const controller = new ProdutoController();

router.get('/produtos', controller.listAllProdutos);
router.post('/produtos', controller.createProduto);
router.put('/produtos/:id', controller.updateProduto);
router.delete('/produtos/:id', controller.deleteProduto);

export default router;
