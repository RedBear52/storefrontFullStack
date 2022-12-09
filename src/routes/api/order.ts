import express from 'express'
import { index } from '../../handlers/orders'
import { create } from '../../handlers/orders'
import { update } from '../../handlers/orders'
import { show } from '../../handlers/orders'
import { addProduct } from '../../handlers/orders'
import { openOrders } from '../../handlers/orders'
import { closedOrders } from '../../handlers/orders'
import { authenticateToken } from '../../handlers/middleware/authenticateToken'

const orderRoute = express.Router()

orderRoute.get('/', index)
orderRoute.get('/:id', show)
orderRoute.post('/', create)
orderRoute.put('/:id', update)
orderRoute.get('/open/:user_id', authenticateToken, openOrders)
orderRoute.get('/closed/:user_id', authenticateToken, closedOrders)
orderRoute.post('/:id/products', authenticateToken, addProduct)

export default orderRoute