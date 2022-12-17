"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const order_1 = require("../order");
const product_1 = __importDefault(require("../product"));
const user_1 = require("../user");
const order_store = new order_1.OrderStore();
const order = {
    userId: 1,
    orderStatus: 'open'
};
describe('Order Table Model - Extant Method Checks', () => {
    it('should have an index method', () => {
        expect(order_store.index).toBeDefined();
    });
    it('should have a show method', () => {
        expect(order_store.show).toBeDefined();
    });
    it('should have a create method', () => {
        expect(order_store.create).toBeDefined();
    });
    it('should have an update method', () => {
        expect(order_store.update).toBeDefined();
    });
    it('should have a delete method', () => {
        expect(order_store.delete).toBeDefined();
    });
});
describe('Order Table Model - Method Implementation Checks', () => {
    const test_user = {
        last_name: 'Mocco',
        first_name: 'Peyton',
        password: 'password'
    };
    const test_product = {
        name: 'boot straps',
        price: 52,
        category: 'cure alls'
    };
    const test_userStore = new user_1.UserStore();
    const test_productStore = new product_1.default();
    // beforeAll(async () => {
    //     await test_userStore.create(test_user)
    //     await test_productStore.create(test_product)
    //     })
    it('index method should return array of orders', async () => {
        const result = await order_store.index();
        expect(result).toEqual([]);
    });
    // it('1st show method test should return an UNDEFINED ERROR for expected order object', async () => {
    //     const result = await store.show(1)
    //     expect(result).toBeUndefined()
    // })
    // it('should create new order', async () => {
    //     const result = await order_store.create(order.userId, order.orderStatus)
    //     expect(result).toEqual({
    //         id: 1,
    //         userId: 1,
    //         orderStatus: 'Open'
    //     })
    //     })
    // })
    //   it('create method should add a book', async () => {
    //     const result = await store.create({
    //       title: 'Bridge to Terabithia',
    //       totalPages: 250,
    //       author: 'Katherine Paterson',
    //       summary: 'Childrens'
    //     });
    //     expect(result).toEqual({
    //       id: "1",
    //       title: 'Bridge to Terabithia',
    //       totalPages: 250,
    //       author: 'Katherine Paterson',
    //       summary: 'Childrens'
    //     });
    //   });
    //   it('index method should return a list of books', async () => {
    //     const result = await store.index();
    //     expect(result).toEqual([{
    //       id: "1",
    //       title: 'Bridge to Terabithia',
    //       totalPages: 250,
    //       author: 'Katherine Paterson',
    //       summary: 'Childrens'
    //     }]);
    //   });
    //   it('show method should return the correct book', async () => {
    //     const result = await store.show("1");
    //     expect(result).toEqual({
    //       id: "1",
    //       title: 'Bridge to Terabithia',
    //       totalPages: 250,
    //       author: 'Katherine Paterson',
    //       summary: 'Childrens'
    //     });
    //   });
    //   it('delete method should remove the book', async () => {
    //     store.delete("1");
    //     const result = await store.index()
    //     expect(result).toEqual([]);
    //   });
});
