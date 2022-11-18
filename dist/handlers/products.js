"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.category = exports.topFive = exports.create = exports.show = exports.index = void 0;
const product_1 = __importDefault(require("../models/product"));
const store = new product_1.default();
const index = async (_req, res) => {
    const productIndex = await store.index();
    res.json(productIndex);
};
exports.index = index;
const show = async (req, res) => {
    const requestedProduct = await store.show(parseInt(req.params.id));
    res.json(requestedProduct);
};
exports.show = show;
const create = async (req, res) => {
    const newProduct = await store.create({
        id: req.body.id,
        name: req.body.name,
        price: req.body.price,
        category: req.body.category
    });
    res.json(newProduct);
};
exports.create = create;
//  NEEDS BUILDING OUT ///
const topFive = async (req, res) => {
    const topFiveProducts = await store.index();
    res.json(topFiveProducts);
};
exports.topFive = topFive;
const category = async (req, res) => {
    const closedOrdersIndex = await store.show(parseInt(req.params.user_id));
    res.json(closedOrdersIndex);
};
exports.category = category;
//  NEEDS BUILDING OUT ///
