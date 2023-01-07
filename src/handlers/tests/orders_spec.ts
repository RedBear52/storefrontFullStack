
import supertest from 'supertest'
import app from '../../models/../server'
import dotenv from 'dotenv'
import jwt from 'jsonwebtoken'
import { OrderStore, OrderProduct} from '../../models/order'
import { User } from '../../models/user'

dotenv.config()
const tokenSecret = process.env.TOKEN_SECRET as string
const testOrderStore = new OrderStore()
const request = supertest(app)

// ------ TESTING CODE IDEAS FOR AUTHENTICATION TEST SOLUTIONS --------//
describe('Order Enpoint Tests', () => {
  let token: string

  console.log(`testing tokenSecret scope: ${tokenSecret}`)
  it('should return 200 status for create user route', async () => {
    const response = await request.post('/api/users')
    .send({last_name: 'Mocco', first_name: 'Peyton', password: 'password123'})
    .set('Accept', 'application/json')
    token = response.body
    expect(token).toBeTruthy()
    expect(response.status).toEqual(200)
  }) 

  it('should return 200 status for authenticate user route', async () => {
    // ----- Only using 'any' type to make test pass | NOT using 'any' type in production code ---//
    const decoded:any = jwt.verify(token, tokenSecret)
    const testUserId = decoded.user.id
    console.log(testUserId)
    const testUser: User = {id: 1671, last_name: 'Mocco', first_name: 'Peyton', password: 'password123'}
    const response = await request.post('/api/users/authenticate')
    // .send({id: 1556, last_name: 'Mocco', first_name: 'Peyton', password: 'password123'})
console.log(response.body)
    // .set('Authorization', `Basic${testUserId}`)
    // expect(testUserId).toBeTruthy
    expect(response.status).toEqual(200)
  })
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
})