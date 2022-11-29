import database from '../database'
import bcrypt from 'bcrypt'
import dotenv from 'dotenv'
import jwt from 'jsonwebtoken'

dotenv.config()

const saltRounds = process.env.SALT_ROUNDS as string
const pepper = process.env.BCRYPT_PASSWORD as string

export type User = {
    id?: number
    first_name: string
    last_name: string
    password: string
}

// export type userProduct = {
//     id: Number
//     userId: Number
//     productId: Number
//     quantity: Number
// }

export class UserStore {
    async create(newUser: User): Promise<User> {
        try {
            const connection = await database.connect()
            const sql = 'INSERT INTO users (first_name, last_name, password) VALUES ($1, $2, $3) RETURNING * '

            const hashedPassword = bcrypt.hashSync(newUser.password + pepper, parseInt(saltRounds))

            const result = await connection.query(sql, [
                newUser.first_name,
                newUser.last_name,
                hashedPassword
                ])
            connection.release()
            return result.rows[0]
        } catch (err) {
            throw new Error(`Unable to create newUser: ${err}`)
        }
    }

    async authenticateUser(user: User): Promise<User | null> {
        const connection = await database.connect()
        const sql = 'SELECT password FROM users WHERE id=$1'
        const result = await connection.query(sql, [user.id])

        if (result.rows.length) {
            const user = result.rows[0]
            console.log(user)

            if (bcrypt.compareSync(user.password + pepper, user.password)) {
                return user
            }
        }
        return null
    }

    async index(): Promise<User[]> {
        try {
            const connection = await database.connect()
            const sql = 'SELECT * FROM users'
            const result = await connection.query(sql)
            connection.release()
            return result.rows
        } catch (err) {
          throw new Error(`Cannot find requested user index: ${err}`)
        }
    }

    async show(id: number): Promise<User> {
        try {
            const connection = await database.connect()
            const sql = 'SELECT * FROM users WHERE id=$1'
            const result = await connection.query(sql, [id])
            connection.release()
            return result.rows[0]
        } catch (err) {
          throw new Error(`Cannot find user ${id}: ${err}`)
        }
    }

    async delete(id: number): Promise<User> {
        try {
            const connection = await database.connect()
            const sql = 'DELETE FROM users WHERE id=$1'
            const result = await connection.query(sql, [id])
            connection.release()
            return result.rows[0]
        } catch (err) {
          throw new Error(`Unable to delete user ${id}: ${err}`)
        }
    }

    // async update(id: number, userStatus: string): Promise<User> {
    //     try {
    //         const connection = await database.connect()
    //         const sql = 'UPDATE users SET userStatus=$2 WHERE id=$1 RETURNING *'
    //         const result = await connection.query(sql, [id, userStatus])
    //         connection.release()
    //         return result.rows[0]
    //     } catch (err) {
    //       throw new Error(`Unable to update status of user ${id} to ${userStatus}: ${err}`)
    //     }
    // }
}