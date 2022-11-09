import express, { Request, Response } from 'express'
import bodyParser from 'body-parser'

const app: express.Application = express()
const port: string = "0.0.0.0:3000"

app.use(bodyParser.json())

app.get('/', function (req: Request, res: Response) {
    res.send('Howdy Universe!')
})

app.listen(3000, function () {
    console.log(`starting app on: ${port}`)
})
