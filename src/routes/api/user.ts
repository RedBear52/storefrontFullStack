import express from 'express'
import { UserStore } from '../../models/user'

const userRoute = express.Router()

userRoute.get('/:id')


export default userRoute