import {Order, OrderStore} from '../../models/order'
import {User, UserStore} from '../../models/user'
import { testUser } from '../../models/tests/user_spec'
import { testProduct } from '../../models/tests/product_spec'
import OrderProduct, { Product } from '../../models/product'
import supertest from 'supertest'
import app from '../../models/../server'
import { response } from 'express'

const request = supertest(app)

// ------------------ ENDPOINT TESTING ---------------- //
describe('Product Endpoint Tests',  () => {
    let authToken: string

    it('confirm product index route returns 200 + index of products', async () => {
        const response = await request.get('/api/products')
        expect(response.status).toEqual(200)
    })

    it('confirm product show route returns 200 + requested product', async () => {
        const response = await request.get('/api/products/1')
        expect(response.status).toEqual(200)
    })

    it('confirm product show by category route returns 200 + product index', async () => {
        const response = await request.get('/api/products/category/cure alls')
        expect(response.status).toEqual(200)
    })


    // ---- NEED TO FIGURE OUT AUTHORIZING USER FOR PRODUCT & ORDERS -----//
    // it('confirm create product route returns 200 + valid product info to AUTHORIZED request', async () => {
    //     const response = await request.post('/api/products')
    //     authToken = 'Bearer' + response.body
    //     .set('Authorization', authToken)
    //     .send(testProduct)
    //     expect(response.status).toBe(200)
    //     // expect(response.body).toEqual(
    //     //     jasmine.objectContaining({ 
    //     //         name: 'boot straps',
    //     //         price: 52,
    //     //         category: 'cure alls'
    //     //     })
    //     // )
    // })
})

// productRoute.get('/', index)
// productRoute.get('/:id', show)
// productRoute.post('/', authenticateToken, create)
// productRoute.get('/category/:category', category)