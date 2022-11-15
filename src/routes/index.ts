import express from 'express'
import userRoute from './api/user'
import productRoute from './api/product'
import orderRoute from './api/order'

const routes = express.Router()

routes.use('/user', userRoute)
routes.use('/product', productRoute)
routes.use('/order', orderRoute)

routes.get('/', (_req: express.Request, res: express.Response) => {
    res.send('api route !')
})

export default routes