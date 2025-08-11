import { Request, Response } from "express"
import { Produtos, produtos } from "../models/Produto"

export class ProdutoController {

    createProduto(req: Request, res: Response): Response {
        const { id, nome, quantidade } = req.body;
    
        if (!id || !nome || quantidade === undefined) {
          return res.status(400).json({ mensagem: "Id, nome e quantidade são obrigatórios!" });
        }
    
        const produtoExistente = produtos.find(prod => prod.id === id);
        if (produtoExistente) {
          return res.status(409).json({ mensagem: "Produto com esse ID já existe!" });
        }
    
        const novoProduto = new Produtos(id, nome, quantidade);
        produtos.push(novoProduto);
    
        return res.status(201).json({ mensagem: "Produto criado com sucesso!", produto: novoProduto });
      }
    
      listAllProdutos(req: Request, res: Response): Response {
        return res.status(200).json({ produtos });
      }
    
      updateProduto(req: Request, res: Response): Response {
        const id: number = Number(req.params.id);
        const { nome, quantidade } = req.body;
    
        if (!nome || quantidade === undefined) {
          return res.status(400).json({ mensagem: "Nome e quantidade são obrigatórios!" });
        }
    
        const produto = produtos.find(p => p.id === id);
    
        if (!produto) {
          return res.status(404).json({ mensagem: "Produto não encontrado!" });
        }
    
        produto.nome = nome;
        produto.quantidade = quantidade;
    
        return res.status(200).json({ mensagem: "Produto atualizado com sucesso!", produto });
      }
    
      deleteProduto(req: Request, res: Response): Response {
        const id: number = Number(req.params.id);
    
        const index = produtos.findIndex(p => p.id === id);
    
        if (index === -1) {
          return res.status(404).json({ mensagem: "Produto não encontrado!" });
        }
    
        produtos.splice(index, 1);
        return res.status(204).send();
      }
}