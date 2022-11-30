"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const orders_1 = require("../../handlers/orders");
const orders_2 = require("../../handlers/orders");
const orders_3 = require("../../handlers/orders");
const orders_4 = require("../../handlers/orders");
const orderRoute = express_1.default.Router();
orderRoute.get('/', orders_1.index);
orderRoute.post('/', orders_2.create);
orderRoute.get('/open/:user_id', orders_3.openOrders);
orderRoute.get('/closed/:user_id', orders_4.closedOrders);
exports.default = orderRoute;
