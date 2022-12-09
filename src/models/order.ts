import { Connection } from 'pg'
import database from '../database'
import { addProduct } from '../handlers/orders'

export type Order = {
    id?: number
    userId: number
    orderStatus: string
}

export type OrderProduct = {
    id: number
    orderId: number
    productId: number
    quantity: number
}

export class OrderStore {
    async index(): Promise<Order[]> {
        try {
            const connection = await database.connect()
            const sql = 'SELECT * FROM orders'
            const result = await connection.query(sql)
            connection.release()
            return result.rows
        } catch (err) {
          throw new Error(`Cannot find requested order index: ${err}`)
        }
    }

    async show(id: number): Promise<Order> {
        try {
            const connection = await database.connect()
            const sql = 'SELECT * FROM orders WHERE id=$1'
            const result = await connection.query(sql, [id])
            connection.release()
            return result.rows[0]
        } catch (err) {
          throw new Error(`Cannot find order ${id}: ${err}`)
        }
    }

    async create(userId: number, orderStatus: string): Promise<Order> {
        try {
            const connection = await database.connect()
            const sql = 'INSERT INTO orders (userId, orderStatus) VALUES ($1, $2) RETURNING * '
            const result = await connection.query(sql, [userId, orderStatus])
            connection.release()
            return result.rows[0]
        } catch (err) {
          throw new Error(`Unable to create order: ${err}`)
        }
    }

    async delete(id: number): Promise<Order> {
        try {
            const connection = await database.connect()
            const sql = 'DELETE FROM orders WHERE id=($1)'
            const result = await connection.query(sql, [id])
            connection.release()
            return result.rows[0]
        } catch (err) {
          throw new Error(`Unable to delete order ${id}: ${err}`)
        }
    }

    async update(id: number, orderStatus: string): Promise<Order> {
        try {
            const connection = await database.connect()
            const sql = 'UPDATE orders SET orderStatus=$2 WHERE id=$1 RETURNING *'
            const result = await connection.query(sql, [id, orderStatus])
            connection.release()
            return result.rows[0]
        } catch (err) {
          throw new Error(`Unable to update status of order ${id} to ${orderStatus}: ${err}`)
        }
    }

    async addProduct(orderProd: OrderProduct, orderId: number): Promise<OrderProduct> {
        try {
            const connection = await database.connect()
            const sql = 'INSERT INTO order_products (quantity, orderid, productid) VALUES ($1, $2, $3) RETURNING * '
            
            const result = await connection.query(sql, [orderProd.quantity, orderId, orderProd.productId])
            connection.release()

            const order = result.rows[0]
            console.log(order)
            return order
        } catch (error) {
            throw new Error(`Could not add product: ${orderProd.productId}  to  order: ${orderProd.orderId}`)
        }
    }

    async showOpenOrders(userId: number): Promise<Order[]> {
        try {
            const connection = await database.connect()
            const sql = `SELECT * FROM orders WHERE userid = $1 AND orderstatus = 'open'`
            const result = await connection.query(sql, [userId])
            connection.release()

            return result.rows
        } catch {
            throw new Error(`Could not find any open orders for user with id of: ${userId}`)
        }
    }

    async showClosedOrders(userId: number): Promise<Order[]> {
        try {
            const connection = await database.connect()
            const sql = `SELECT * FROM orders WHERE userid = $1 AND orderstatus = 'completed'`
            const result = await connection.query(sql, [userId])
            connection.release()

            return result.rows
        } catch {
            throw new Error(`Could not find any completed orders for user with id of: ${userId}`)
        }        
    }
}