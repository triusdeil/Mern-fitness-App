import express, { urlencoded } from 'express'
import fitnessRoute from './routes/fitness.route'
import cors from 'cors'
//Initializations
const app = express()

//Settings
app.set('port', process.env.PORT || 4000)

//Middleware
app.use(express.json())
app.use(urlencoded({extended:false}))
app.use(cors())

//routes
app.use('/api', fitnessRoute)

export default app