import express from 'express'
import jwt from 'jsonwebtoken'

const tokenSecret = process.env.TOKEN_SECRET as string

export const authenticateToken = async (
    req: express.Request, 
    res: express.Response, 
    next: express.NextFunction
) => {
    try {
        const authorizationHeader = req.headers.authorization as string
        
        const token = authorizationHeader.slice(7)
        console.log(token)

        const verifiedToken = jwt.verify(token, tokenSecret)
        res.locals.users = verifiedToken
        console.log(res.locals)

        next()
    } catch (error) {
        res.status(401)
        res.send(`Token authentication failed:  ${error}`)
    }
} 

