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
describe('User Endpoint Tests',  () => {
    let authToken: string

    it('confirm specific user request route returns 401 to UNAUTHORIZED user', async () => {
        const response = await request.get('/api/users')
        expect(response.status).toBe(401)
    })

    it('confirm user create route returns 200 to AUTHORIZED user', async () => {
        const response = await request.post('/api/users')
        .send(testUser)
        authToken = "Bearer " + response.body
        expect(response.status).toEqual(200)
    })

    it('confirm specific user request route returns 200 + valid user info to AUTHORIZED request', async () => {
    const response = await request.get('/api/users/5')
        .set('Authorization', authToken)
        authToken = 'Bearer' + response.body
        expect(response.status).toBe(200)
        expect(response.body).toEqual(
            jasmine.objectContaining({ 
                id: 5, 
                firstname: 'Peyton', 
                lastname: 'Mocco' 
            })
        )
    })
})
