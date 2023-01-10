
import supertest from 'supertest'
import app from '../../models/../server'
import dotenv from 'dotenv'
import jwt from 'jsonwebtoken'
import { OrderStore, OrderProduct} from '../../models/order'
import { User, UserStore } from '../../models/user'

dotenv.config()
const tokenSecret = process.env.TOKEN_SECRET as string
console.log(`tokenSecret looks like this globally: ${tokenSecret}`)
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
    } as User

    const response = await request.post('/api/users')
    .send(testUser)

    authToken = response.body
    console.log(`authToken BEFORE tests have run: ${authToken}`)
  })

  afterAll(async () => {
    console.log(`authToken after tests have run: ${authToken}`)
  })

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
    console.log(`current authToken value:  ${authToken}`)

    const decoded = jwt.decode(authToken)
    console.log(`here's decoded: ${decoded}`)
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
  })
})

