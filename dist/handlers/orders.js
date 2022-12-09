"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.closedOrders = exports.openOrders = exports.update = exports.addProduct = exports.create = exports.show = exports.index = void 0;
const order_1 = require("../models/order");
const store = new order_1.OrderStore();
const index = async (_req, res) => {
    const ordersIndex = await store.index();
    res.json(ordersIndex);
};
exports.index = index;
const show = async (req, res) => {
    const orderShow = await store.show(parseInt(req.params.id));
    res.json(orderShow);
};
exports.show = show;
const create = async (req, res) => {
    const newOrderInfo = await store.create(req.body.userId, req.body.orderStatus);
    res.json(newOrderInfo);
};
exports.create = create;
const addProduct = async (req, res) => {
    try {
        const orderId = req.params.id;
        const orderProd = req.body;
        const newOrderProd = await store.addProduct(orderProd, parseInt(orderId));
        res.json(newOrderProd);
    }
    catch (error) {
        throw new Error(`Could not add order/product: ${error}`);
    }
};
exports.addProduct = addProduct;
const update = async (req, res) => {
    const updatedOrder = await store.update(req.body.orderStatus, req.body.id);
    res.json(updatedOrder);
};
exports.update = update;
const openOrders = async (req, res) => {
    const openOrdersIndex = await store.showOpenOrders(parseInt(req.params.user_id));
    res.json(openOrdersIndex);
};
exports.openOrders = openOrders;
const closedOrders = async (req, res) => {
    const closedOrdersIndex = await store.showClosedOrders(parseInt(req.params.user_id));
    console.log(closedOrdersIndex);
    res.json(closedOrdersIndex);
};
exports.closedOrders = closedOrders;
