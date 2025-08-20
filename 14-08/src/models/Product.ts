import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { Category } from "./Category";

@Entity("products")
export class Product {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 100, nullable: false })
    name: string;

    @Column()
    price: number;

    @ManyToOne(() => Category, category => category.products)
    category: Category;
}
