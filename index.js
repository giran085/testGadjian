const express = require('express')
const cors = require('cors')
const app = express()
const PORT = 4000
const employeesRouter = require('./1_routers/employees')


const db = require('./3_databases/mysql')
db.connect()

app.use(cors())
app.use(express.json())
app.use('/', employeesRouter)




app.get('/', (req,res)=>{
    res.send('Welcome to API Page - Test giran')
})

app.listen(PORT, ()=> console.log('Server run on Port ${PORT}'))
