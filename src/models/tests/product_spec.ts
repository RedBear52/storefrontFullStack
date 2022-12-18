import ProductStore, { Product } from "../product"

const testProductStore = new ProductStore()

export const testProduct = {
    name: 'boot straps',
    price: 52,
    category: 'cure alls'
}

describe('Producct Table Model - Extant Method Checks', () => {
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
        const requestdUser = await testProductStore.show(1)
        expect(requestdUser).toEqual(
            jasmine.objectContaining({
                name: 'boot straps',
                price: 52,
                category: 'cure alls'
                })
            )
        })
})

