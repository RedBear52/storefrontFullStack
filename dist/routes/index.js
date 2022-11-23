"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var express_1 = __importDefault(require("express"));
var user_1 = __importDefault(require("./api/user"));
var product_1 = __importDefault(require("./api/product"));
var order_1 = __importDefault(require("./api/order"));
var routes = express_1["default"].Router();
routes.use('/users', user_1["default"]);
routes.use('/products', product_1["default"]);
routes.use('/orders', order_1["default"]);
routes.get('/', function (_req, res) {
    res.send('api route !');
});
exports["default"] = routes;
