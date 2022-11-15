import express, {Request, Response} from 'express'
import { OrderStore } from '../models/order'

const store = new OrderStore()

export const index = async (_req: Request, res: Response) => {
    const ordersIndex = await store.index()
    res.json(ordersIndex)
}

export const openOrders = async (req: Request, res: Response) => {
    const openOrdersIndex = await store.show(parseInt(req.params.user_id))
    res.json(openOrdersIndex)
}

export const closedOrders = async (req: Request, res: Response) => {
    const closedOrdersIndex = await store.show(parseInt(req.params.user_id))
    res.json(closedOrdersIndex)
}

// const orderRoutes = async (app: express.Application) => {
//     app.get('/orders', index)
// }


