"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../database"));
class ProductStore {
    async index() {
        try {
            const connection = await database_1.default.connect();
            const sql = 'SELECT * FROM products';
            const result = await connection.query(sql);
            connection.release();
            return result.rows;
        }
        catch (err) {
            throw new Error(`Cannot find requested product index: ${err}`);
        }
    }
    async show(id) {
        try {
            const connection = await database_1.default.connect();
            const sql = 'SELECT * FROM products WHERE id=$1';
            const result = await connection.query(sql, [id]);
            connection.release();
            return result.rows[0];
        }
        catch (err) {
            throw new Error(`Cannot find product ${id}: ${err}`);
        }
    }
    async create(product) {
        try {
            const connection = await database_1.default.connect();
            const sql = 'INSERT INTO products (name, price, category) VALUES ($1, $2, $3) RETURNING * ';
            const result = await connection.query(sql, [
                product.name, product.price, product.category
            ]);
            connection.release();
            return result.rows[0];
        }
        catch (err) {
            throw new Error(`Unable to create product: ${err}`);
        }
    }
    // async topFiveProducts(): Promise<Product[]> {
    //     try {
    //         const connection = await database.connect()
    //         const sql = 'SELECT * FROM products'
    //         const result = await connection.query(sql)
    //         connection.release()
    //         return result.rows
    //     } catch (err) {
    //       throw new Error(`Cannot find top 5 product index: ${err}`)
    //     }
    // }
    // async update(product: Product): Promise<Product> {
    //     try {
    //         const connection = await database.connect()
    //         const sql = 'UPDATE products SET name=$2, price=$3, category=$4 WHERE id=$1 RETURNING *'
    //         const result = await connection.query(sql, [product.id, product.name, product.price, product.category])
    //         connection.release()
    //         return result.rows[0]
    //     } catch (err) {
    //       throw new Error(`Unable to update product ${product.id}: ${err}`)
    //     }
    // }
    async searchByCategory(category) {
        try {
            const connection = await database_1.default.connect();
            const sql = 'SELECT * FROM products WHERE category=$1';
            const result = await connection.query(sql, [category]);
            connection.release();
            return result.rows;
        }
        catch (err) {
            throw new Error(`Unable to find products by category: ${category}: ${err}`);
        }
    }
}
exports.default = ProductStore;
