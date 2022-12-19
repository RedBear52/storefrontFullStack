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
// const authToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjozNjcsImxhc3RfbmFtZSI6Ik1vY2NvIiwiZmlyc3RfbmFtZSI6IlBleXRvbiIsInBhc3N3b3JkIjoiJDJiJDEwJEkvdnAzUC5qZXludmQ1WndsMnE2ZXV0MFZ3S2JRQU9QZ3hvbjBaWVBJQnBvRDRlV1UycnFLIn0sImlhdCI6MTY3MTQ3NjE5MX0.BJ0c7HhqEHDK_parnke1y-elRIuqZEYPitZ1UQGqKXM'
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
// ------------------ ENDPOINT TESTING ---------------- //
describe('User Endpoint Tests', () => {
    let authToken;
    it('confirm specific user request route returns 401 to UNAUTHORIZED user', async () => {
        const response = await request.get('/api/users');
        expect(response.status).toBe(401);
    });
    it('confirm user create route returns 200 to AUTHORIZED user', async () => {
        const response = await request.post('/api/users')
            .send(exports.testUser);
        authToken = "Bearer " + response.body;
        expect(response.status).toEqual(200);
    });
    it('confirm specific user request route returns 200 + valid user info to AUTHORIZED request', async () => {
        const response = await request.get('/api/users/5')
            .set('Authorization', authToken);
        authToken = 'Bearer' + response.body;
        expect(response.status).toBe(200);
        expect(response.body).toEqual(jasmine.objectContaining({
            id: 5,
            firstname: 'Peyton',
            lastname: 'Mocco'
        }));
    });
});
