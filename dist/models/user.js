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
            const sql = 'INSERT INTO users (id, first_name, last_name, password) VALUES ($1, $2, $3, $4) RETURNING * ';
            const hashedPassword = bcrypt_1.default.hashSync(newUser.password + pepper, parseInt(saltRounds));
            const result = await connection.query(sql, [
                newUser.id,
                newUser.first_name,
                newUser.last_name,
                hashedPassword
            ]);
            connection.release();
            return result.rows[0];
        }
        catch (err) {
            throw new Error(`Unable to create newUser: ${err}`);
        }
    }
    async authenticateUser(id, password) {
        const connection = await database_1.default.connect();
        const sql = 'SELECT password FROM users WHERE id=$1';
        const result = await connection.query(sql, [id, password]);
        if (result.rows.length) {
            const user = result.rows[0];
            console.log(user);
            if (bcrypt_1.default.compareSync(password + pepper, user.password)) {
                return user;
            }
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
            const sql = 'SELECT * FROM users WHERE id=($1)';
            const result = await connection.query(sql, [id]);
            connection.release();
            return result.rows[0];
        }
        catch (err) {
            throw new Error(`Cannot find user ${id}: ${err}`);
        }
    }
}
exports.UserStore = UserStore;
