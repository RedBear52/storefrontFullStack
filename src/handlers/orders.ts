import {Request, Response} from 'express'
import { OrderStore } from '../models/order'

const store = new OrderStore()

export const index = async (_req: Request, res: Response) => {
    const ordersIndex = await store.index()
    res.json(ordersIndex)
}

export const create = async (req: Request, res: Response) => {
    const newOrderInfo = await store.create(
        req.body.userId,
        req.body.orderStatus
    )
    res.json(newOrderInfo)
}

export const openOrders = async (req: Request, res: Response) => {
    const openOrdersIndex = await store.show(parseInt(req.params.user_id))
    res.json(openOrdersIndex)
}

export const closedOrders = async (req: Request, res: Response) => {
    const closedOrdersIndex = await store.show(parseInt(req.params.user_id))
    console.log(closedOrdersIndex)
    res.json(closedOrdersIndex)
}