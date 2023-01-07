"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const supertest_1 = __importDefault(require("supertest"));
const server_1 = __importDefault(require("../../models/../server"));
const dotenv_1 = __importDefault(require("dotenv"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const order_1 = require("../../models/order");
dotenv_1.default.config();
const tokenSecret = process.env.TOKEN_SECRET;
const testOrderStore = new order_1.OrderStore();
const request = (0, supertest_1.default)(server_1.default);
// ------ TESTING CODE IDEAS FOR AUTHENTICATION TEST SOLUTIONS --------//
describe('Order Enpoint Tests', () => {
    let token;
    console.log(`testing tokenSecret scope: ${tokenSecret}`);
    it('should return 200 status for create user route', async () => {
        const response = await request.post('/api/users')
            .send({ last_name: 'Mocco', first_name: 'Peyton', password: 'password123' })
            .set('Accept', 'application/json');
        token = response.body;
        expect(token).toBeTruthy();
        expect(response.status).toEqual(200);
    });
    it('should return 200 status for authenticate user route', async () => {
        // ----- Only using 'any' type to make test pass | NOT using 'any' type in production code ---//
        const decoded = jsonwebtoken_1.default.verify(token, tokenSecret);
        const testUserId = decoded.user.id;
        console.log(testUserId);
        const testUser = { id: 1671, last_name: 'Mocco', first_name: 'Peyton', password: 'password123' };
        const response = await request.post('/api/users/authenticate');
        // .send({id: 1556, last_name: 'Mocco', first_name: 'Peyton', password: 'password123'})
        console.log(response.body);
        // .set('Authorization', `Basic${testUserId}`)
        // expect(testUserId).toBeTruthy
        expect(response.status).toEqual(200);
    });
    //   beforeAll(async () => {
    //     const new_user = await request.post('/api/users').send(testUser)
    //     .set('Authorization', 'Bearer' + token)
    //     token = new_user.body
    //     // console.log(`authorization: ${token}`)
    //     console.log(`here's testUser info: ${testUser.last_name}, ${testUser.first_name}, ${testUser.password}`)
    //     console.log(`here's what new_user.body returns (token): ${new_user.body}`)
    //     // console.log(token)
    //     const decoded = jwt_decode(token)
    //     console.log(`here's jwt_decode as User id: ${decoded}`)
    //     // userid = jwt_decode.id as number
    //     console.log(`here is the userid: ${testUser.id}`)
    //     order.userid = userid
    //     const product: Product = {
    //       name: 'Jump Starter Hoop',
    //       price: 52,
    //       category: 'cure alls',
    //     }
    //     const new_product = await request
    //       .post('/api/products')
    //       // .set('Authorization', 'Bearer ' + token)
    //       .send(product)
    //     productId = new_product.body.id as number
    //     orderProduct.productId = productId
    //   })
    //   it('should create an order', async () => {
    //       const response = await request.post('/api/orders').send(order)
    //       console.log(`Here's the response: ${response.body}`)
    // })
});
