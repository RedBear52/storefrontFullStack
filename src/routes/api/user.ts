import express from 'express'
import { index } from '../../handlers/users'
import { show } from '../../handlers/users'
import { create } from '../../handlers/users'
import { remove } from '../../handlers/users'
import { authenticateUser } from '../../handlers/users'
import { authenticateToken } from '../../handlers/middleware/authenticateToken'

const userRoute = express.Router()

userRoute.get('/', authenticateToken, index)
userRoute.get('/:id', authenticateToken, show)
userRoute.post('/', create)
userRoute.delete('/:id', authenticateToken, remove)
userRoute.post('/authenticate', authenticateUser)

export default userRoute

