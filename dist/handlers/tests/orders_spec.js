"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const supertest_1 = __importDefault(require("supertest"));
const server_1 = __importDefault(require("../../models/../server"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
// const TokenSecret = process.env.authToken_SECRET as string
// const testOrderStore = new OrderStore()
// const testUserStore = new UserStore()
const request = (0, supertest_1.default)(server_1.default);
// ------ TESTING CODE IDEAS FOR AUTHENTICATION TEST SOLUTIONS --------//
describe('Order Enpoint Tests', () => {
    let authToken;
    let testUser;
    beforeAll(async () => {
        testUser = {
            last_name: 'Hart',
            first_name: 'Alan',
            password: process.env.POSTGRES_TEST_PASSWORD
        };
        const response = await request.post('/api/users')
            .send(testUser);
        authToken = response.body;
    });
    it('should return 200 status for create user route', async () => {
        const response = await request.post('/api/users')
            .send(testUser);
        expect(response.status).toEqual(200);
        authToken = response.body;
    });
    it('should return 200 status for authenticate user route', async () => {
        const response = await request.post('/api/users/authenticate')
            .send(testUser)
            .set('Authorization', authToken);
        authToken = 'Bearer' + response.body;
        expect(response.status).toBe(200);
    });
});
