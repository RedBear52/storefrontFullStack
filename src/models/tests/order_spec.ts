import {Order, OrderStore} from '../order'

const store = new OrderStore()

const order: Order = {
    id: 1,
    userId: 52,
    orderStatus: 'Open'
};

describe('Order Table Model - Extant Method Checks', () => {
    it('should have an index method', () => {
        expect(store.index).toBeDefined()
    })

    it('should have a show method', () => {
    expect(store.show).toBeDefined();
    });

    it('should have a create method', () => {
    expect(store.create).toBeDefined();
    });

    it('should have a update method', () => {
    expect(store.update).toBeDefined();
    });

    it('should have a delete method', () => {
    expect(store.delete).toBeDefined();
    });
})

describe('Order Table Model - Method Implementation Checks', () => {
    it('index method should return an array of orders', async () => {
        const result = await store.index()
        expect(result).toEqual([])
    })

    it('create method should generate new order', async () => {
        const result = await store.create({
            id: 1,
            userId: 52,
            orderStatus: 'open'
        })
        expect(result).toBeDefined()
    })

    // it('show method should return expected order object', async () => {
    //     const result = await store.show(1)
    //     expect(result).toBeDefined()
    // })
})


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
// });