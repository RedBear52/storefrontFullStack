import express from 'express'

const orderRoute = express.Router()

orderRoute.get('/open/:user_id')
orderRoute.get('/closed/:user_id')

export default orderRoute