"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.closedOrders = exports.openOrders = exports.create = exports.index = void 0;
const order_1 = require("../models/order");
const store = new order_1.OrderStore();
const index = async (_req, res) => {
    const ordersIndex = await store.index();
    res.json(ordersIndex);
};
exports.index = index;
const create = async (req, res) => {
    const newOrderInfo = await store.create(req.body.userId, req.body.orderStatus);
    res.json(newOrderInfo);
};
exports.create = create;
const openOrders = async (req, res) => {
    const openOrdersIndex = await store.show(parseInt(req.params.user_id));
    res.json(openOrdersIndex);
};
exports.openOrders = openOrders;
const closedOrders = async (req, res) => {
    const closedOrdersIndex = await store.show(parseInt(req.params.user_id));
    res.json(closedOrdersIndex);
};
exports.closedOrders = closedOrders;
