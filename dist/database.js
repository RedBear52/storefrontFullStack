"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const pg_1 = require("pg");
dotenv_1.default.config();
const { POSTGRES_HOST, POSTGRES_DB, POSTGRES_TEST_DB, POSTGRES_USER, POSTGRES_PASSWORD, ENV } = process.env;
let database = new pg_1.Pool;
if (ENV === 'dev') {
    database = new pg_1.Pool({
        port: 6543,
        host: POSTGRES_HOST,
        database: POSTGRES_DB,
        user: POSTGRES_USER,
        password: POSTGRES_PASSWORD
    });
}
else if (ENV === 'test') {
    database = new pg_1.Pool({
        port: 6543,
        host: POSTGRES_HOST,
        database: POSTGRES_TEST_DB,
        user: POSTGRES_USER,
        password: POSTGRES_PASSWORD
    });
}
else {
    console.log('man...something went way wrong when attempting to connect to the db...');
}
console.log(ENV);
exports.default = database;
