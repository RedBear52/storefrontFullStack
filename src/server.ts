import express, { Request, Response } from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import routes from './routes'

const app: express.Application = express()
const port: string = "0.0.0.0:3000"

const corsOptions = {
    origin: 'https://localhost:3000',
    optionsSuccesStatus: 200
}

app.use(cors(corsOptions))
app.use(bodyParser.json())

app.get('/', function (_req: Request, res: Response) {
    res.send('Howdy Multiverse!')
})

app.use('/api', routes)

app.listen(3000, function () {
    console.log(`starting app on: ${port}`)
})

export default app