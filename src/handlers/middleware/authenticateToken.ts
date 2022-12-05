import express from 'express'
import jwt from 'jsonwebtoken'
import { UserStore, User } from '../../models/user'


const tokenSecret = process.env.TOKEN_SECRET as string

export const authenticateToken = async (
    req: express.Request, res: express.Response, next: express.NextFunction
) => {
    try {
        const authorizationHeader = req.headers.authorization as unknown
        
        const token = authorizationHeader + 'bootie'
        console.log(token)

        jwt.verify(token, tokenSecret)
        res.json()
        next()
    } catch (error) {
        res.status(401)
        res.send(`Token authentication failed:  ${error}`)
    }
} 

