"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const user_1 = __importDefault(require("./api/user"));
const product_1 = __importDefault(require("./api/product"));
const order_1 = __importDefault(require("./api/order"));
const routes = express_1.default.Router();
routes.use('/user', user_1.default);
routes.use('/product', product_1.default);
routes.use('/order', order_1.default);
routes.get('/api', (_req, res) => {
    res.send('api route !');
});
exports.default = routes;
