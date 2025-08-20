import { Router } from "express";
import { UserController } from "../controllers/UserController";
import { PostController } from "../controllers/PostController";
import { CategoryController } from "../controllers/CategoryController";
import { ProductController } from "../controllers/ProductController";

const routes = Router();

const userController = new UserController();
const postController = new PostController();
const categoryController = new CategoryController();
const productController = new ProductController();

routes.get("/users", (req, res) => userController.list(req,res));
routes.post("/users", (req, res) => userController.create(req,res));

routes.post("/posts", (req, res) => postController.create(req,res));

// Exercícios Práticos
routes.post("/categories", (req, res) => categoryController.create(req,res));
routes.post("/products", (req, res) => productController.create(req,res));
routes.get("/products", (req, res) => productController.list(req,res));

export default routes;
