import { Request, Response } from "express";
import { AppDataSource } from "../config/data-source";
import { Product } from "../models/Product";
import { Category } from "../models/Category";

export class ProductController {
    private productRepository = AppDataSource.getRepository(Product);
    private categoryRepository = AppDataSource.getRepository(Category);

    async create(req: Request, res: Response) {
        const { name, price,category } = req.body;

        const categorys = await this.categoryRepository.findOneBy({ id: category});
        if (!categorys) return res.status(404).json({ message: 'User not found' });

        const product = this.productRepository.create({ name, price, category});
        await this.productRepository.save(product);
        return res.status(201).json(product);
    }

    async list(req: Request, res: Response) {
        const products = await this.productRepository.find({ relations: ["category"] });
        return res.json(products);
    }
}