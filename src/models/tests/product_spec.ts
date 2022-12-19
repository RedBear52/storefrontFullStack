import ProductStore, { Product } from "../product"
import app from '../../server'
import supertest from 'supertest'
import { testUser } from "./user_spec"

// let userToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjo3MDAsImxhc3RfbmFtZSI6Ik1vY2NvIiwiZmlyc3RfbmFtZSI6IlBleXRvbiIsInBhc3N3b3JkIjoiJDJiJDEwJHBKcy8uMTM3RE1ITmJFMVNGOWo1OS5Cb1RYTHhDWXNIemFTR1NNeUpOWk9EeXlaUWk0U0NDIn0sImlhdCI6MTY3MTQ4MzUzMH0.e21wUb4DM1cqcKCHVtKObJST1gyixLll1bZ1e9WsrNs'

const request = supertest(app)

const testProductStore = new ProductStore()

export const testProduct = {
    name: 'boot straps',
    price: 52,
    category: 'cure alls'
}

describe('Product Table Model - Extant Method Checks', () => {
    it('should have an index method', () => {
        expect(testProductStore.index).toBeDefined()
    })

    it('should have a show method', () => {
    expect(testProductStore.show).toBeDefined();
    });

    it('should have a create method', () => {
    expect(testProductStore.create).toBeDefined();
    });

    it('should have a search by category method', () => {
    expect(testProductStore.searchByCategory).toBeDefined();
    });
})

describe('Product Table Model - Method Implementation Checks', () => {
    beforeAll(async () => {
      const newProduct = await testProductStore.create(testProduct)
    })

   it('should return an index that includes newly created product', async () => {
       const newProductIndex = await testProductStore.index()
       expect(newProductIndex).toContain(
        jasmine.objectContaining({
        name: 'boot straps',
        price: 52,
        category: 'cure alls'
        }))
   })

   it('should return a specifically requested product', async () => {
    const requestdUser = await testProductStore.show(1)
    expect(requestdUser).toEqual(
        jasmine.objectContaining({
            name: 'boot straps',
            price: 52,
            category: 'cure alls'
            })
        )
    })

    it('should return array of products by category', async () => {
        const requestdUser = await testProductStore.searchByCategory('cure alls')
        expect(requestdUser).toBeInstanceOf(Array)
        expect(requestdUser).toContain(
            jasmine.objectContaining({
                category: 'cure alls'
            })
        )
        expect(requestdUser).toContain(
            jasmine.objectContaining({
                name: 'boot straps'
            })
        )
    })
})

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
