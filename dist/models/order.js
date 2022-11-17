"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderStore = void 0;
const database_1 = __importDefault(require("../database"));
class OrderStore {
    async index() {
        try {
            const connection = await database_1.default.connect();
            const sql = 'SELECT * FROM orders';
            const result = await connection.query(sql);
            connection.release();
            return result.rows;
        }
        catch (err) {
            throw new Error(`Cannot find requested order index: ${err}`);
        }
    }
    async show(id) {
        try {
            const connection = await database_1.default.connect();
            const sql = 'SELECT * FROM orders WHERE id=($1)';
            const result = await connection.query(sql, [id]);
            connection.release();
            return result.rows[0];
        }
        catch (err) {
            throw new Error(`Cannot find order ${id}: ${err}`);
        }
    }
    async create(order) {
        try {
            const connection = await database_1.default.connect();
            const sql = 'INSERT INTO orders (id, userId, orderStatus) VALUES ($1, $2, $3) RETURNING * ';
            const result = await connection.query(sql, [order.id, order.userId, order.orderStatus]);
            connection.release();
            return result.rows[0];
        }
        catch (err) {
            throw new Error(`Unable to create order: ${err}`);
        }
    }
    async delete(id) {
        try {
            const connection = await database_1.default.connect();
            const sql = 'DELETE FROM orders WHERE id=($1)';
            const result = await connection.query(sql, [id]);
            connection.release();
            return result.rows[0];
        }
        catch (err) {
            throw new Error(`Unable to delete order ${id}: ${err}`);
        }
    }
    async update(id, orderStatus) {
        try {
            const connection = await database_1.default.connect();
            const sql = 'UPDATE orders SET orderStatus=$2 WHERE id=$1 RETURNING *';
            const result = await connection.query(sql, [id, orderStatus]);
            connection.release();
            return result.rows[0];
        }
        catch (err) {
            throw new Error(`Unable to update status of order ${id} to ${orderStatus}: ${err}`);
        }
    }
}
exports.OrderStore = OrderStore;
