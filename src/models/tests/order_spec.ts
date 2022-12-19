import {Order, OrderStore} from '../order'
import {User, UserStore} from '../user'
import { testUser } from './user_spec'
import { testProduct } from './product_spec'
import OrderProduct, { Product } from '../product'

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