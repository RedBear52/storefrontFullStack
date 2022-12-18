
import {User, UserStore}from '../user'

const testUserStore = new UserStore()

export const testUser: User = {
    last_name: 'Mocco',
    first_name: 'Peyton',
    password: 'password'
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

   it('should confirm creation of test user in beforeAll block', async () => {
      const newUserCheck = await testUserStore.create(testUser)
      expect(newUserCheck.last_name).toEqual('Mocco')
      expect(newUserCheck.first_name).toEqual('Peyton')
   })

   it('should return an index with the newly created user', async () => {
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
})

// ----- FIX MIGRATION / RESET/ UP / DOWN / DB INTEGRASTION -----//