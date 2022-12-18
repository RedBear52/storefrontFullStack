"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.order = void 0;
const order_1 = require("../order");
const product_1 = __importDefault(require("../product"));
const user_1 = require("../user");
const testOrderStore = new order_1.OrderStore();
exports.order = {
    userId: 1,
    orderStatus: 'open'
};
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
    const testUserStore = new user_1.UserStore();
    const testProductStore = new product_1.default();
    // beforeAll(async () => {
    //     await test_userStore.create(test_user)
    //     await testProductStore.create(testProduct)
    //     })
    // it('index method should return array of orders', async () => {
    //     const result = await testOrderStore.index()
    //     expect(result).toEqual([])
    // })
    // it('1st show method test should return an UNDEFINED ERROR for expected order object', async () => {
    //     const result = await store.show(1)
    //     expect(result).toBeUndefined()
    // })
    // it('should create new order', async () => {
    //     const result = await testOrderStore.create(order.userId, order.orderStatus)
    //     expect(result).toEqual({
    //         id: 1,
    //         userId: 1,
    //         orderStatus: 'Open'
    //     })
    // })
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
