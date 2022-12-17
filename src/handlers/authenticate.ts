import {Request, Response} from 'express'
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'

dotenv.config()

console.log(process.env.TOKEN_SECRET)



