import dotenv from 'dotenv'
import { Pool } from 'pg'

dotenv.config()

const {
    POSTGRES_HOST,
    POSTGRES_DB,
    POSTGRES_TEST_DB,
    POSTGRES_USER,
    POSTGRES_PASSWORD,
    POSTGRES_TEST_PASSWORD,
    POSTGRES_TEST_USER,
    ENV
} = process.env



let database: Pool = new Pool

if (ENV === 'test') {
    database = new Pool({
        port: 6543,
        host: POSTGRES_HOST,
        database: POSTGRES_TEST_DB,
        user: POSTGRES_TEST_USER,
        password: POSTGRES_TEST_PASSWORD
    })
} else if (ENV === 'dev') {
    database = new Pool({
        port: 6543,
        host: POSTGRES_HOST,
        database: POSTGRES_DB,
        user: POSTGRES_USER,
        password: POSTGRES_PASSWORD
    })
} else {
    console.log('man...something went way wrong...')
    
}

console.log(ENV)

export default database