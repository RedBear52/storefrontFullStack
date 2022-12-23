"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_spec_1 = require("../../models/tests/user_spec");
const supertest_1 = __importDefault(require("supertest"));
const server_1 = __importDefault(require("../../models/../server"));
const request = (0, supertest_1.default)(server_1.default);
// ------------------ ENDPOINT TESTING ---------------- //
describe('User Endpoint Tests', () => {
    let authToken;
    it('confirm specific user request route returns 401 to UNAUTHORIZED user', async () => {
        const response = await request.get('/api/users');
        expect(response.status).toBe(401);
    });
    it('confirm user create route returns 200 to AUTHORIZED user', async () => {
        const response = await request.post('/api/users')
            .send(user_spec_1.testUser);
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
