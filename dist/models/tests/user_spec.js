"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.testUser = void 0;
// import dotenv from 'dotenv'
const user_1 = require("../user");
const supertest_1 = __importDefault(require("supertest"));
const server_1 = __importDefault(require("../../server"));
const request = (0, supertest_1.default)(server_1.default);
const testUserStore = new user_1.UserStore();
exports.testUser = {
    last_name: 'Mocco',
    first_name: 'Peyton',
    password: process.env.POSTGRES_TEST_PASSWORD
};
describe('User Table Model - Extant Method Checks', () => {
    it('should have an index method', () => {
        expect(testUserStore.index).toBeDefined();
    });
    it('should have a show method', () => {
        expect(testUserStore.show).toBeDefined();
    });
    it('should have a create method', () => {
        expect(testUserStore.create).toBeDefined();
    });
    it('should have an update method', () => {
        expect(testUserStore.authenticateUser).toBeDefined();
    });
    it('should have a delete method', () => {
        expect(testUserStore.delete).toBeDefined();
    });
});
describe('user Table Model - Method Implementation Checks', () => {
    beforeAll(async () => {
        const newUser = await testUserStore.create(exports.testUser);
    });
    it('should return an index containing newly created user', async () => {
        const newUserIndex = await testUserStore.index();
        expect(newUserIndex).toContain(jasmine.objectContaining({
            last_name: 'Mocco',
            first_name: 'Peyton',
        }));
    });
    it('should return a specifically requested user', async () => {
        const requestdUser = await testUserStore.show(5);
        expect(requestdUser).toEqual(jasmine.objectContaining({
            last_name: 'Mocco',
            first_name: 'Peyton',
        }));
    });
    it('should confirm create user method in beforeAll statement is working', async () => {
        const result = await testUserStore.create(exports.testUser);
        expect(result).toEqual(jasmine.objectContaining({
            last_name: 'Mocco',
            first_name: 'Peyton'
        }));
    });
});
