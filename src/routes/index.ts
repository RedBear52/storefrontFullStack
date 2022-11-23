import express from 'express'
import userRoute from './api/user'
import productRoute from './api/product'
import orderRoute from './api/order'

const routes = express.Router()

routes.use('/users', userRoute)
routes.use('/products', productRoute)
routes.use('/orders', orderRoute)

routes.get('/', (_req: express.Request, res: express.Response) => {
    res.send('api route !')
})

export default routes