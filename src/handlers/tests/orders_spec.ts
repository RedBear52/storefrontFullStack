
import supertest from 'supertest'
import app from '../../models/../server'
import dotenv from 'dotenv'
import jwt from 'jsonwebtoken'
import { OrderStore, OrderProduct} from '../../models/order'
import { User, UserStore } from '../../models/user'

dotenv.config()
// const TokenSecret = process.env.authToken_SECRET as string
// const testOrderStore = new OrderStore()
// const testUserStore = new UserStore()
const request = supertest(app)

// ------ TESTING CODE IDEAS FOR AUTHENTICATION TEST SOLUTIONS --------//
describe('Order Enpoint Tests', () => {
  let authToken: string
  let testUser: User

  beforeAll(async () => {
    testUser = {
      last_name: 'Hart', 
      first_name: 'Alan', 
      password: process.env.POSTGRES_TEST_PASSWORD as string
    }

    const response = await request.post('/api/users')
    .send(testUser)

    authToken = response.body
  })

  it('should return 200 status for create user route', async () => {
    const response = await request.post('/api/users')
    .send(testUser)
    expect(response.status).toEqual(200)
    authToken = response.body
  }) 

  it('should return 200 status for authenticate user route', async () => {
    const response = await request.post('/api/users/authenticate')
    .send(testUser)
    .set('Authorization', authToken)
        authToken = 'Bearer' + response.body
    expect(response.status).toBe(200)
  })
})