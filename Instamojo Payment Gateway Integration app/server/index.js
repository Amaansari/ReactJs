const express = require('express')
const axios = require('axios')
const app = express()
const cors = require("cors")
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
app.use(cors())

app.listen(8080)

app.post('/payment',async (req,res)=>{
    try{
        const buyer = req.body;
        const instServer = "https://test.instamojo.com/api/1.1/payment-requests";
        const payload = {
            amount : buyer.amount,
            buyer_name : buyer.name,
            phone:buyer.phone,
            email:buyer.email,
            purpose:buyer.product
        }
        const auth = {
            headers : {
                "X-Api-Key":"test_db67b9819c236293a83251824b3",
                "X-Auth-Token":"test_2e66d93c28548fcb14043d33525"
            }
        }
        const response = await axios.post(instServer,payload,auth)
        console.log(response)
        res.status(200).json(response.data)
    }
    catch(err){
        res.status(500).json(err)
    }
})