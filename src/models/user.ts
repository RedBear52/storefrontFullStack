import database from '../database'
// Go back and watch JWT lessons???//
export type User = {
    id: Number
    first_name: String
    last_name: String
    password: String
}
// Go back and watch JWT lessons???//

// export type OrderProduct = {
//     id: Number
//     orderId: Number
//     productId: Number
//     quantity: Number
// }

// export class OrderStore = {
//     async index(): Promise<Order[]> {
//         try {
//             const connection = await database.connect()
//             const sql = 'SELECT * FROM orders'
//             const result = await connection.query(sql)
//             connection.release()
//             return result.rows
//         } catch (err) {
//           throw new Error(`Cannot find requested order index: ${err}`)
//         }
//     }

//     async show(id: number): Promise<Order> {
//         try {
//             const connection = await database.connect()
//             const sql = 'SELECT * FROM orders WHERE id=($1)'
//             const result = await connection.query(sql, [id])
//             connection.release()
//             return result.rows[0]
//         } catch (err) {
//           throw new Error(`Cannot find order ${id}: ${err}`)
//         }
//     }

//     async create(order: Order): Promise<Order> {
//         try {
//             const connection = await database.connect()
//             const sql = 'INSERT INTO orders (id, userId, orderStatus) VALUES ($1, $2, $3) RETURNING * '
//             const result = await connection.query(sql, [order.id, order.userId, order.orderStatus])
//             connection.release()
//             return result.rows[0]
//         } catch (err) {
//           throw new Error(`Unable to create order: ${err}`)
//         }
//     }

//     async delete(id: number): Promise<Order> {
//         try {
//             const connection = await database.connect()
//             const sql = 'DELETE FROM orders WHERE id=($1)'
//             const result = await connection.query(sql, [id])
//             connection.release()
//             return result.rows[0]
//         } catch (err) {
//           throw new Error(`Unable to delete order ${id}: ${err}`)
//         }
//     }

//     async update(id: number, orderStatus: string): Promise<Order> {
//         try {
//             const connection = await database.connect()
//             const sql = 'UPDATE orders SET orderStatus=$2 WHERE id=$1 RETURNING *'
//             const result = await connection.query(sql, [id, orderStatus])
//             connection.release()
//             return result.rows[0]
//         } catch (err) {
//           throw new Error(`Unable to update status of order ${id} to ${orderStatus}: ${err}`)
//         }
//     }
// }