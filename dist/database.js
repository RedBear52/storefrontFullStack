"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const pg_1 = require("pg");
dotenv_1.default.config();
const { POSTGRES_HOST, POSTGRES_DB, POSTGRES_TEST_DB, POSTGRES_USER, POSTGRES_PASSWORD, POSTGRES_TEST_PASSWORD, ENV } = process.env;
let database;
if (ENV === 'test') {
    database = new pg_1.Pool({
        host: POSTGRES_HOST,
        database: POSTGRES_TEST_DB,
        user: POSTGRES_USER,
        password: POSTGRES_TEST_PASSWORD
    });
}
else {
    database = new pg_1.Pool({
        host: POSTGRES_HOST,
        database: POSTGRES_DB,
        user: POSTGRES_USER,
        password: POSTGRES_PASSWORD
    });
}
exports.default = database;
