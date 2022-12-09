"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const authenticateToken_1 = require("../../handlers/middleware/authenticateToken");
const products_1 = require("../../handlers/products");
const products_2 = require("../../handlers/products");
const products_3 = require("../../handlers/products");
const products_4 = require("../../handlers/products");
const productRoute = express_1.default.Router();
productRoute.get('/', products_1.index);
productRoute.get('/:id', products_2.show);
productRoute.post('/', authenticateToken_1.authenticateToken, products_3.create);
productRoute.get('/category/:category', products_4.category);
exports.default = productRoute;
