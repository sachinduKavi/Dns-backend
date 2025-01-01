import express, {Express} from 'express'
import dotenv from 'dotenv'

import vernamRouter from './route/vernam'

dotenv.config()

const app: Express = express()
const PORT = process.env.PORT || 3000

app.use(express.json())


app.use('/vernam', vernamRouter)

app.listen(PORT, () => {
    console.log('App running on port ' + PORT + '...')
})

