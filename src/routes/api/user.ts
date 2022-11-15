import express from 'express'
import { index } from '../../handlers/users'
import { show } from '../../handlers/users'
import { create } from '../../handlers/users'

const userRoute = express.Router()

userRoute.get('/', index)
userRoute.get('/:id', show)
userRoute.post('/', create)


export default userRoute