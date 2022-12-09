import {Request, Response} from 'express'
import { OrderStore, OrderProduct } from '../models/order'

const store = new OrderStore()

export const index = async (_req: Request, res: Response) => {
    const ordersIndex = await store.index()
    res.json(ordersIndex)
}

export const show = async (req: Request, res: Response) => {
    const orderShow = await store.show(parseInt(req.params.id))
    res.json(orderShow)
}

export const create = async (req: Request, res: Response) => {
    const newOrderInfo = await store.create(
        req.body.userId,
        req.body.orderStatus
    )
    res.json(newOrderInfo)
}

export const addProduct = async (req: Request, res: Response) => {
    try {
        const orderId = req.params.id
        const orderProd = req.body as OrderProduct
        const newOrderProd = await store.addProduct(orderProd, parseInt(orderId))
        res.json(newOrderProd)
    }
        catch (error) {
        throw new Error(`Could not add order/product: ${error}`)
    }
}

export const update = async (req: Request, res: Response) => {
    const updatedOrder = await store.update(
        req.body.orderStatus,
        req.body.id
    )
    res.json(updatedOrder)
}

export const openOrders = async (req: Request, res: Response) => {
    const openOrdersIndex = await store.showOpenOrders(parseInt(req.params.user_id))
    res.json(openOrdersIndex)
}

export const closedOrders = async (req: Request, res: Response) => {
    const closedOrdersIndex = await store.showClosedOrders(parseInt(req.params.user_id))
    console.log(closedOrdersIndex)
    res.json(closedOrdersIndex)
}