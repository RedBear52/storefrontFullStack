"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.order = void 0;
const order_1 = require("../order");
const user_1 = require("../user");
const user_spec_1 = require("./user_spec");
const product_spec_1 = require("./product_spec");
const product_1 = __importDefault(require("../product"));
exports.order = {
    userid: 2,
    orderstatus: 'open'
};
const testOrderStore = new order_1.OrderStore();
const testUserStore = new user_1.UserStore();
const testOrderProduct = new product_1.default();
describe('Order Table Model - Extant Method Checks', () => {
    it('should have an index method', () => {
        expect(testOrderStore.index).toBeDefined();
    });
    it('should have a show method', () => {
        expect(testOrderStore.show).toBeDefined();
    });
    it('should have a create method', () => {
        expect(testOrderStore.create).toBeDefined();
    });
    it('should have an update method', () => {
        expect(testOrderStore.update).toBeDefined();
    });
    it('should have a delete method', () => {
        expect(testOrderStore.delete).toBeDefined();
    });
});
describe('Order Table Model - Method Implementation Checks', () => {
    beforeAll(async () => {
        await testUserStore.create(user_spec_1.testUser);
        await testOrderProduct.create(product_spec_1.testProduct);
        await testOrderStore.create(exports.order.userid, exports.order.orderstatus);
    });
    it('index method should return array of orders', async () => {
        const result = await testOrderStore.index();
        expect(result).toEqual(jasmine.objectContaining(testOrderStore));
    });
    it('testShow method should return specifically requested order', async () => {
        const result = await testOrderStore.testShow(9);
        expect(result).toEqual({ id: 9, userid: 5, orderstatus: 'open' });
    });
    it('should confirm create order method in beforeAll statement is working', async () => {
        const result = await testOrderStore.create(exports.order.userid, exports.order.orderstatus);
        expect(result).toEqual(jasmine.objectContaining({ userid: 2, orderstatus: 'open' }));
    });
});
