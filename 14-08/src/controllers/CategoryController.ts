import { Request, Response } from 'express';
import { AppDataSource } from '../config/data-source';
import { Category } from '../models/Category'

export class CategoryController {
    private CategoryRepository = AppDataSource.getRepository(Category);

    async create(req: Request, res: Response) {
        const { name } = req.body;

        const category = this.CategoryRepository.create({ name });
        await this.CategoryRepository.save(category);
        return res.status(201).json(category);
    }
}