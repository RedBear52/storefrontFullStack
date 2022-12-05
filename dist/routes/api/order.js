"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var express_1 = __importDefault(require("express"));
var orders_1 = require("../../handlers/orders");
var orders_2 = require("../../handlers/orders");
var orders_3 = require("../../handlers/orders");
var orders_4 = require("../../handlers/orders");
var orderRoute = express_1["default"].Router();
orderRoute.get('/', orders_1.index);
orderRoute.post('/', orders_2.create);
orderRoute.get('/open/:user_id', orders_3.openOrders);
orderRoute.get('/closed/:user_id', orders_4.closedOrders);
exports["default"] = orderRoute;
