import {Request, Response} from 'express'
import { UserStore } from '../models/user'

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
    const newUser = await store.create({
        id: req.body.id,
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        // password here???   or just a token???
        password: req.body.password
        // password here???   or just a token???
    })
    res.json(newUser)
}

