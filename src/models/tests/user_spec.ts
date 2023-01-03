
// import dotenv from 'dotenv'
import {User, UserStore}from '../user'
import supertest from 'supertest'
import app from '../../server'
import { testProduct } from './product_spec'

const request = supertest(app)
const testUserStore = new UserStore()

export const testUser: User = {
    last_name: 'Mocco',
    first_name: 'Peyton',
    password: process.env.POSTGRES_TEST_PASSWORD as string
}

describe('User Table Model - Extant Method Checks', () => {
    it('should have an index method', () => {
        expect(testUserStore.index).toBeDefined()
    })

    it('should have a show method', () => {
    expect(testUserStore.show).toBeDefined();
    });

    it('should have a create method', () => {
    expect(testUserStore.create).toBeDefined();
    });

    it('should have an update method', () => {
    expect(testUserStore.authenticateUser).toBeDefined();
    });

    it('should have a delete method', () => {
    expect(testUserStore.delete).toBeDefined();
    });
})

describe('user Table Model - Method Implementation Checks', () => {
    beforeAll(async () => {
      const newUser = await testUserStore.create(testUser)
    })

   it('should return an index containing newly created user', async () => {
       const newUserIndex = await testUserStore.index()
       expect(newUserIndex).toContain(
        jasmine.objectContaining({
        last_name: 'Mocco',
        first_name: 'Peyton',
        }))
   })

   it('should return a specifically requested user', async () => {
    const requestdUser = await testUserStore.show(5)
    expect(requestdUser).toEqual(
        jasmine.objectContaining({
            last_name: 'Mocco',
            first_name: 'Peyton',
            })
        )
    })

    it('should confirm create user method in beforeAll statement is working', async () => {
        const result = await testUserStore.create(testUser)
        expect(result).toEqual(
            jasmine.objectContaining({
             last_name: 'Mocco',
             first_name: 'Peyton'
            })
        )
    })
})

