"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserStore = void 0;
const database_1 = __importDefault(require("../database"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const saltRounds = process.env.SALT_ROUNDS;
const pepper = process.env.BCRYPT_PASSWORD;
// export type userProduct = {
//     id: Number
//     userId: Number
//     productId: Number
//     quantity: Number
// }
class UserStore {
    async create(newUser) {
        try {
            const connection = await database_1.default.connect();
            const sql = 'INSERT INTO users (first_name, last_name, password) VALUES ($1, $2, $3) RETURNING * ';
            const hashedPassword = bcrypt_1.default.hashSync(newUser.password + pepper, parseInt(saltRounds));
            const result = await connection.query(sql, [
                newUser.first_name,
                newUser.last_name,
                hashedPassword
            ]);
            const user = result.rows[0];
            connection.release();
            return user;
        }
        catch (err) {
            throw new Error(`Unable to create newUser [${newUser.first_name} ${newUser.last_name}]:  ${err}`);
        }
    }
    async authenticateUser(user) {
        const connection = await database_1.default.connect();
        const sql = 'SELECT password FROM users WHERE id=$1';
        const result = await connection.query(sql, [user.id]);
        connection.release();
        if (result.rows.length === 0) {
            throw new Error('Could not find requested user');
        }
        const userQuery = result.rows[0];
        if (await bcrypt_1.default.compare(user.password + pepper, userQuery.hashedPassword)) {
            return user;
        }
        return null;
    }
    async index() {
        try {
            const connection = await database_1.default.connect();
            const sql = 'SELECT * FROM users';
            const result = await connection.query(sql);
            connection.release();
            return result.rows;
        }
        catch (err) {
            throw new Error(`Cannot find requested user index: ${err}`);
        }
    }
    async show(id) {
        try {
            const connection = await database_1.default.connect();
            const sql = 'SELECT * FROM users WHERE id=$1';
            const result = await connection.query(sql, [id]);
            connection.release();
            return result.rows[0];
        }
        catch (err) {
            throw new Error(`Cannot find user ${id}: ${err}`);
        }
    }
    async delete(id) {
        try {
            const connection = await database_1.default.connect();
            const sql = 'DELETE FROM users WHERE id=$1';
            const result = await connection.query(sql, [id]);
            connection.release();
            return result.rows[0];
        }
        catch (err) {
            throw new Error(`Unable to delete user ${id}: ${err}`);
        }
    }
}
exports.UserStore = UserStore;
