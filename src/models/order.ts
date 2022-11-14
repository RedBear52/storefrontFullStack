import Client from '../database'

export type Order {
    id: Number
    userId: Number
    orderStatus: String
}

export class OrderStore {
    async index(): Promise<Order[]> {
        try {
            const connection = await Client.connect()
            const sql = 'SELECT * FROM orders'
            const result = await connection.query(sql)
            connection.release()
            return result.rows
        } catch (err) {
          throw new Error(`Cannot get orders ${err}`)
        }
    }
}