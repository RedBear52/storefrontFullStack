"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.testProduct = void 0;
const product_1 = __importDefault(require("../product"));
const server_1 = __importDefault(require("../../server"));
const supertest_1 = __importDefault(require("supertest"));
const request = (0, supertest_1.default)(server_1.default);
const testProductStore = new product_1.default();
exports.testProduct = {
    name: 'boot straps',
    price: 52,
    category: 'cure alls'
};
describe('Product Table Model - Extant Method Checks', () => {
    it('should have an index method', () => {
        expect(testProductStore.index).toBeDefined();
    });
    it('should have a show method', () => {
        expect(testProductStore.show).toBeDefined();
    });
    it('should have a create method', () => {
        expect(testProductStore.create).toBeDefined();
    });
    it('should have a search by category method', () => {
        expect(testProductStore.searchByCategory).toBeDefined();
    });
});
describe('Product Table Model - Method Implementation Checks', () => {
    beforeAll(async () => {
        const newProduct = await testProductStore.create(exports.testProduct);
    });
    it('should return an index that includes newly created product', async () => {
        const newProductIndex = await testProductStore.index();
        expect(newProductIndex).toContain(jasmine.objectContaining({
            name: 'boot straps',
            price: 52,
            category: 'cure alls'
        }));
    });
    it('should return a specifically requested product', async () => {
        const requestdUser = await testProductStore.show(1);
        expect(requestdUser).toEqual(jasmine.objectContaining({
            name: 'boot straps',
            price: 52,
            category: 'cure alls'
        }));
    });
    it('should return array of products by category', async () => {
        const requestdUser = await testProductStore.searchByCategory('cure alls');
        expect(requestdUser).toBeInstanceOf(Array);
        expect(requestdUser).toContain(jasmine.objectContaining({
            category: 'cure alls'
        }));
        expect(requestdUser).toContain(jasmine.objectContaining({
            name: 'boot straps'
        }));
    });
});
