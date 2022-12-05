import express from 'express'
import { index } from '../../handlers/users'
import { show } from '../../handlers/users'
import { create } from '../../handlers/users'
import { remove } from '../../handlers/users'
import { authenticate } from '../../handlers/users'
import { authenticateToken } from '../../handlers/middleware/authenticateToken'

const userRoute = express.Router()

userRoute.get('/', index)
userRoute.get('/:id', show)
userRoute.post('/', create)
userRoute.delete('/:id', authenticate, remove)
userRoute.post('/authenticate', authenticate)



export default userRoute