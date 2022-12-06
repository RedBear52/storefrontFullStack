import { Request, Response } from 'express'
import { UserStore, User } from '../models/user'
import jwt from 'jsonwebtoken'

const tokenSecret = process.env.TOKEN_SECRET as unknown as string

const store = new UserStore()

export const index = async (_req: Request, res: Response) => {
    const userIndex = await store.index()
    res.json(userIndex)
}

export const show = async (req: Request, res: Response) => {
    const queriedUser = await store.show(parseInt(req.params.id))
    res.json({
        id: queriedUser.id,
        firstname: queriedUser.first_name,
        lastname: queriedUser.last_name
        })
}

export const create = async (req: Request, res: Response) => {
    
    const user: User = {
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        password: req.body.password
    }
      const newUser = await store.create(user)
      const token = jwt.sign({user: newUser}, tokenSecret)
      res.json(token )
}
    
export const remove = async (req: Request, res: Response) => {
    
    const deletedUser = await store.delete(parseInt(req.params.id))
    res.json(deletedUser)
}

export const authenticateUser = async (req: Request, res: Response) => {
    try {
      const userReq = req.body as User
      const userInfo = await store.authenticateUser(userReq)
      if (userInfo) {
        const token = jwt.sign(userInfo, tokenSecret)
        
        res.status(200).json(token)
      } else {
        res.status(400).json({ error: 'User was not authenticated' })
      }
    } catch (err) {
      res.status(500).json({ error: `Could not authenticate user: ${err}` })
    }
    
}
  
