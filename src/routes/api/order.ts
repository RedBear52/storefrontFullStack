import express from 'express'
import { index } from '../../handlers/orders'
import { create } from '../../handlers/orders'
import { openOrders } from '../../handlers/orders'
import { closedOrders } from '../../handlers/orders'

const orderRoute = express.Router()

orderRoute.get('/', index)
orderRoute.post('/', create)
orderRoute.get('/open/:user_id', openOrders)
orderRoute.get('/closed/:user_id', closedOrders)

export default orderRoute