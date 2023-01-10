"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const supertest_1 = __importDefault(require("supertest"));
const server_1 = __importDefault(require("../../models/../server"));
const dotenv_1 = __importDefault(require("dotenv"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
dotenv_1.default.config();
const tokenSecret = process.env.TOKEN_SECRET;
console.log(`tokenSecret looks like this globally: ${tokenSecret}`);
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
        console.log(`authToken BEFORE tests have run: ${authToken}`);
    });
    afterAll(async () => {
        console.log(`authToken after tests have run: ${authToken}`);
    });
    // it(`should return 200 status for create user route AND
    //     should return 200 status for authenticate route`, async () => {
    //   const newTestUser = await request.post('/api/users')
    //   .send(testUser)
    //   expect(newTestUser.status).toEqual(200)
    //   authToken = newTestUser.body
    //   console.log(`authToken INSIDE CREATE tests have run: ${authToken}`)
    // const authResponse = await request.post('/api/users/authenticate')
    // .send(testUser)
    // }) 
    it('should log current authToken value to console', async () => {
        console.log(`current authToken value:  ${authToken}`);
        const decoded = jsonwebtoken_1.default.decode(authToken);
        console.log(`here's decoded: ${decoded}`);
        // const response = await request.post('/api/users/authenticate')
        // .send(testUser)
        // authToken = response.body
        // console.log(`authToken right after CREATED INSIDE AUTHENTICATE: ${authToken}`)
        // --- DECODE LOCALLY SCOPED AUTHTOKEN AND THEN PASS THAT DATA TO SEND METHOD ON AUTHENTICATE ENDPOINT
        // --- PLUS SET MEHTOD TO AUTHORIZE NEW TEST USER DATA IN CONJUNCTION W RECENTLY GENERATED TOKEN ---//
        // const decoded = jwt.verify(authToken, tokenSecret)
        // console.log(`decoded is this: ${decoded}`)
        // const response = await request.post('/api/users/authenticate')
        // .send(testUser)
        // console.log(`authToken INSIDE AUTHENTICATE tests have run: ${authToken}`)
        // expect(response.status).toBe(200)
    });
});
