import { order, TestOrder } from '../../models/tests/order_spec'
import { User, UserStore } from '../../models/user'
import { testUser } from '../../models/tests/user_spec'
import { Product } from '../../models/product'
import { TestOrderProduct } from '../../models/tests/order_spec'
import supertest from 'supertest'
import app from '../../models/../server'
import dotenv from 'dotenv'
import jwt from 'jsonwebtoken'
import { OrderStore } from '../../models/order'

dotenv.config()
const tokenSecret = process.env.TOKEN_SECRET as string
console.log(`tokenSecret matches env file??!: ${tokenSecret}`)

const request = supertest(app)

const testUserStore = new UserStore()
const testOrderStore = new OrderStore()

// ---- ANOTHER APPROACH/SANDBOX ---- //
// describe('Order Endpoint Tests', () => {
//   const testUser = {
//     last_name: 'Otoole',
//     first_name: 'Keegan',
//     password: 'numberone'
//   } as User

//   let testUserId: number
//   beforeAll(async () => {
//     const newTestUser = await testUserStore.create(testUser)
//     testUser.id = newTestUser.id

//     console.log(newTestUser);

//     const testOrder = {
//       userid: newTestUser.id,
//       orderstatus: 'open'
//     } as TestOrder

//     const newTestOrder = await testOrderStore.create(testOrder.userid, testOrder.orderstatus)
//     testOrder.id = newTestOrder.id

//     it('should show index of orders', async () => {
//       const testOrderIndex = await testOrderStore.index()
//       expect(testOrderIndex).toContain(
//         jasmine.objectContaining({
//           userid: newTestUser.id,
//           orderstatus: 'open'
//         })
//       )
//     })
//   })

    // it('should show specifically requested order to authenticated user', async () => {
    //   const showTestOrder = await testOrderStore.show(12)
    //   expect(newTestOrder).toContain(
    //     jasmine.objectContaining({
    //       userid: testUser.id,
    //       orderstatus: 'open'
    //     })
    //   )
    // })
// })

// orderRoute.get('/api/', index)
// orderRoute.get('/api/:id', show)
// orderRoute.post('/api/', create)
// orderRoute.put('/api/:id', update)
// orderRoute.get('/api/open/:orderid', authenticateToken, openOrders)
// orderRoute.get('/api/closed/:orderid', authenticateToken, closedOrders)
// orderRoute.post('/api/:id/products', authenticateToken, addProduct)

// ------ TESTING CODE IDEAS FOR AUTHENTICATION TEST SOLUTIONS --------//
describe('Order Enpoint Tests', () => {
  let orderid: number
  let productId: number
  let userid: number
  let orderproductId: number
  let orderstatus: string
  let token: string

  const order: TestOrder = {
    userid: 0,
    orderstatus: 'open'
  }

  const orderProduct: TestOrderProduct = {
    orderId: 0,
    productId: 0,
    quantity: 5
  }

  // beforeAll(async () => {
  //   const user: User = {
  //     first_name: 'Otoole',
  //     last_name: 'Keegan',
  //     password: 'numberone'
  //   }

    beforeAll(async () => {
      const new_user = await request.post('/api/users').send(testUser)
      // .set('Authorization', 'Bearer' + token)
      console.log(`here's testUser info: ${testUser.last_name}, ${testUser.first_name}, ${testUser.password}`)

      console.log(`here's what new_user variable returns: ${new_user.body}`)
      token = new_user.body
      // console.log(token)
      const jwt_decode = jwt.verify(token, tokenSecret)
      console.log(`here's jwt_decode as User id: ${jwt_decode}`)
      
      // userid = jwt_decode.id as number
      console.log(`here is the userid: ${userid}`)
      order.userid = userid
  
      const product: Product = {
        name: 'Jump Starter Hoop',
        price: 52,
        category: 'cure alls',
      }
      const new_product = await request
        .post('/api/products')
        // .set('Authorization', 'Bearer ' + token)
        .send(product)
      productId = new_product.body.id as number
      orderProduct.productId = productId
    })
    it('Create an order', async () => {
        const response = await request.post('/api/orders').send(order)
        console.log(`Here's the response.body: ${response.body}`)
    })
  })

  // })
  // 
  //   expect(response.status).toBe(200)
  //   expect(response.body.orderid).toEqual(order.id)
  //   expect(response.body.orderstatus).toEqual(order.orderstatus)
  //   order.orderid = response.body.id as number
  //   orderProduct.orderId = orderid
  //   console.log(`these two should match: order.userid & userid: ${order.userid}  :  ${userid}`)
  //   console.log(`Here is response: ${response}`)
  //   console.log(`Here is response.body: ${response.body}`)
  //   console.log(`Here is response.body: ${response.body}`)
  // })
// })
// ------ END CODE TESTS FOR AUTHENTICATION TEST SOLUTIONS --------//


// ------------------ ENDPOINT TESTING ---------------- //
// describe('Order Endpoint Tests',  () => {
//     let productId: number
//     let quantity: number
//     let orderId: number

//     const order: Order = {
//         orderid: 0,
//         orderorderStatus: 'open'
//     }

//     const orderProduct: OrderProduct = {
//         productId: 0,
//         quantity: 3
//     }

//     beforeAll(async () => {
//        const newTestUser = await testUserStore.create(testUser)
//        const newTestOrderProduct = await testOrderProduct.create(testProduct)
//     })
//     let authToken: string

//     it('confirm order index route returns 200 + index of orders', async () => {
//         const response = await request.get('/api/api/orders')
//         expect(response.orderStatus).toEqual(200)
//     })

//     it('confirm order show route returns 200 + requested order', async () => {
//         const response = await request.get('/api/api/orders/9')
//         expect(response.orderStatus).toEqual(200)
//     })

    // it('should confirm create order method in beforeAll statement is working', async () => {
    //     const result = await request.post('/api/orders')
    //     .send(order)
    //     expect(result).toEqual(
    //         jasmine.objectContaining(
    //         { orderid: 2, orderorderStatus: 'open' }
    //      
    //    )
    //     )
    // })

//     it('confirm order show by id route returns 200 + specific order', async () => {
//         const response = await request.post(`/api/orders/${testUser.id}/products`)
//         .send(testUser)
//         // ---- NEEDS AUTHENTICATION ---- //
//         expect(response.orderStatus).toEqual(200)
//     })
// })