const express = require('express')
const Razorpay = require('razorpay')
const cors = require("cors")
const app = express()

// const razorpay = new Razorpay({
//     key_id:"asdnandn21312321",
//     key_secret:"dndiandi123323ado"
// })

app.use(cors())
app.listen(8080)

app.get('/order',async(req,res)=>{
    // const data = await razorpay.orders.create({
    //     "amount":(500*100),
    //     "currency":"INR",
    //     "receipt":"RCP_ID_"+Date.now()
    // })
    res.send("razorpay...")
}) 