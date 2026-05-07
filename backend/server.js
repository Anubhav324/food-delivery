import express from 'express'
import cors from 'cors'
import { connectDB } from './config/db.js'
import foodRouter from './routes/foodRoute.js'
import userRouter from './routes/userRoute.js'
import 'dotenv/config'
import cartRouter from './routes/cartRoute.js'
import orderRouter from './routes/orderRoute.js'



//app config

const app=express()
const port=5000



//middleware
app.use(express.json())
app.use(cors())

//Db connection
connectDB();

//api edpoints
app.use("/api/food",foodRouter)
app.use("/images",express.static('uploads'))

app.use("/api/user",userRouter)
app.use("/api/cart",cartRouter)
app.use("/api/order",orderRouter)

app.get("/",(req,res)=>{
    res.send("api working")
}) 

app.listen(port,()=>{
    console.log(`Server strted on http://localhost:${port}`)
})
//anubhav1234
//mongodb+srv://fooddelivery:@cluster0.h2fqfmg.mongodb.net/?