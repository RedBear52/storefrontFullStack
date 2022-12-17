import {Order, OrderStore} from '../order'
import ProductStore from '../product'
import {User, UserStore} from '../user'
import {Product} from '../product'

const order_store = new OrderStore()
const order: Order = {
    userId: 1,
    orderStatus: 'open'
}

describe('Order Table Model - Extant Method Checks', () => {
    it('should have an index method', () => {
        expect(order_store.index).toBeDefined()
    })

    it('should have a show method', () => {
    expect(order_store.show).toBeDefined();
    });

    it('should have a create method', () => {
    expect(order_store.create).toBeDefined();
    });

    it('should have an update method', () => {
    expect(order_store.update).toBeDefined();
    });

    it('should have a delete method', () => {
    expect(order_store.delete).toBeDefined();
    });
})

describe('Order Table Model - Method Implementation Checks', () => {
    const test_user = {
        last_name: 'Mocco',
        first_name: 'Peyton',
        password: 'password'
    }

    const test_product = {
        name: 'boot straps',
        price: 52,
        category: 'cure alls'
    }

    const test_userStore = new UserStore()
    const test_productStore = new ProductStore()
    
    // beforeAll(async () => {
    //     await test_userStore.create(test_user)
    //     await test_productStore.create(test_product)
    //     })
    it('index method should return array of orders', async () => {
        const result = await order_store.index()
        expect(result).toEqual([])
    })

    // it('1st show method test should return an UNDEFINED ERROR for expected order object', async () => {
    //     const result = await store.show(1)
    //     expect(result).toBeUndefined()
    // })

    // it('should create new order', async () => {
    //     const result = await order_store.create(order.userId, order.orderStatus)
    //     expect(result).toEqual({
    //         id: 1,
    //         userId: 1,
    //         orderStatus: 'Open'
    //     })
//     })
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