import {Request, Response} from 'express'
import ProductStore from '../models/product'

const store = new ProductStore()

export const index = async (_req: Request, res: Response) => {
    const productIndex = await store.index()
    res.json(productIndex)
}

export const show = async (req: Request, res: Response) => {
    const requestedProduct = await store.show(parseInt(req.params.id))
    res.json(requestedProduct)
}

export const create = async (req: Request, res: Response) => {
    const newProduct = await store.create({
        name: req.body.name,
        price: req.body.price,
        category: req.body.category
    })
    res.json(newProduct)
}

export const category = async (req: Request, res: Response) => {
    const selectedByCategory = await store.searchByCategory(req.params.category)
    res.json(selectedByCategory)
}

