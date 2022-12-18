import {Order, OrderStore} from '../order'
import ProductStore, { Product } from '../product'
import {User, UserStore} from '../user'
import { testProduct } from './product_spec'
import { testUser } from './user_spec'

const testOrderStore = new OrderStore()

export const order: Order = {
    userId: 1,
    orderStatus: 'open'
}

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
    

    const testUserStore = new UserStore()
    const testProductStore = new ProductStore()
    
    // beforeAll(async () => {
    //     await test_userStore.create(test_user)
    //     await testProductStore.create(testProduct)
    //     })
    // it('index method should return array of orders', async () => {
    //     const result = await testOrderStore.index()
    //     expect(result).toEqual([])
    // })

    // it('1st show method test should return an UNDEFINED ERROR for expected order object', async () => {
    //     const result = await store.show(1)
    //     expect(result).toBeUndefined()
    // })

    // it('should create new order', async () => {
    //     const result = await testOrderStore.create(order.userId, order.orderStatus)
    //     expect(result).toEqual({
    //         id: 1,
    //         userId: 1,
    //         orderStatus: 'Open'
    //     })
    // })
// })

//   it('create method should add a book', async () => {
//     const result = await store.create({
//       title: 'Bridge to Terabithia',
//       totalPages: 250,
//       author: 'Katherine Paterson',
//       summary: 'Childrens'
//     });
//     expect(result).toEqual({
//       id: "1",
//       title: 'Bridge to Terabithia',
//       totalPages: 250,
//       author: 'Katherine Paterson',
//       summary: 'Childrens'
//     });
//   });

//   it('index method should return a list of books', async () => {
//     const result = await store.index();
//     expect(result).toEqual([{
//       id: "1",
//       title: 'Bridge to Terabithia',
//       totalPages: 250,
//       author: 'Katherine Paterson',
//       summary: 'Childrens'
//     }]);
//   });

//   it('show method should return the correct book', async () => {
//     const result = await store.show("1");
//     expect(result).toEqual({
//       id: "1",
//       title: 'Bridge to Terabithia',
//       totalPages: 250,
//       author: 'Katherine Paterson',
//       summary: 'Childrens'
//     });
//   });

//   it('delete method should remove the book', async () => {
//     store.delete("1");
//     const result = await store.index()

//     expect(result).toEqual([]);
//   });
})