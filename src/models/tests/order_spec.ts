import {Order, OrderStore} from '../order'
import {User, UserStore} from '../user'
import { testUser } from './user_spec'
import { testProduct } from './product_spec'
import OrderProduct, { Product } from '../product'
import supertest from 'supertest'
import app from '../../server'
import { response } from 'express'

const request = supertest(app)

export type TestOrder = {
    id?: number
    userid: number 
    orderstatus: string
}

export type TestOrderProduct = {
    id: number
    orderId: number
    productId: number
    quantity: number
}

export const order: TestOrder = {
    userid: 2,
    orderstatus: 'open'
}

const testOrderStore = new OrderStore()
const testUserStore = new UserStore()
const testOrderProduct = new OrderProduct()

describe('Order Table Model - Extant Method Checks', () => {
    it('should have an index method', () => {
        expect(testOrderStore.index).toBeDefined()
    })

    it('should have a show method', () => {
    expect(testOrderStore.show).toBeDefined();
    });

    it('should have a create method', () => {
    expect(testOrderStore.create).toBeDefined();
    });

    it('should have an update method', () => {
    expect(testOrderStore.update).toBeDefined();
    });

    it('should have a delete method', () => {
    expect(testOrderStore.delete).toBeDefined();
    });
})

describe('Order Table Model - Method Implementation Checks', () => {
    beforeAll(async () => {
        await testUserStore.create(testUser)
        await testOrderProduct.create(testProduct)
        await testOrderStore.create(order.userid, order.orderstatus)
        })
    it('index method should return array of orders', async () => {
        const result = await testOrderStore.index()
        expect(result).toEqual(
            jasmine.objectContaining(testOrderStore)
        )
    })

    it('testShow method should return specifically requested order', async () => {
        const result = await testOrderStore.testShow(9)
        expect(result).toEqual(
            { id: 9, userid: 5, orderstatus: 'open' }
        )
    })

    it('should confirm create order method in beforeAll statement is working', async () => {
        const result = await testOrderStore.create(order.userid, order.orderstatus)
        expect(result).toEqual(
            jasmine.objectContaining(
            { userid: 2, orderstatus: 'open' }
            )
        )
    })
})

// ------------------ ENDPOINT TESTING ---------------- //
describe('Order Endpoint Tests',  () => {
    let authToken: string

    it('confirm order index route returns 200 + index of orders', async () => {
        const response = await request.get('/api/orders')
        expect(response.status).toEqual(200)
    })

    it('confirm order show route returns 200 + requested order', async () => {
        const response = await request.get('/api/orders/9')
        expect(response.status).toEqual(200)
    })

    // it('should confirm create order method in beforeAll statement is working', async () => {
    //     const result = await request.post('/orders')
    //     .send(order)
    //     expect(result).toEqual(
    //         jasmine.objectContaining(
    //         { userid: 2, orderstatus: 'open' }
    //         )
    //     )
    // })

    // it('confirm order show by id route returns 200 + specific order', async () => {
    //     const response = await request.post('/api/orders/5/products')
    //     // ---- NEEDS AUTHENTICATION ---- //
    //     expect(response.status).toEqual(200)
    // })
})

// orderRoute.get('/', index)
// orderRoute.get('/:id', show)
// orderRoute.post('/', create)
// orderRoute.put('/:id', update)
// orderRoute.get('/open/:user_id', authenticateToken, openOrders)
// orderRoute.get('/closed/:user_id', authenticateToken, closedOrders)
// orderRoute.post('/:id/products', authenticateToken, addProduct)