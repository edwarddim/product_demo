// 1. BRING IN ALL OUR DEPENDENCIES
const express = require("express")
const cors = require("cors")

// 2. INSTANTIATE A NEW EXPRESS SERVER
const app = express()

// 3. START OUR DATABASE
require("./config/mongoose.config")

// 4. CONFIGURE EXPRESS SERVER FOR POST REQUESTS AND CORS REQUESTS
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))

// 5. CONNECT OUR EXPRESS INSTANCE TO ROUTES
require("./routes/product.routes")(app)



// 6. TURN ON OUR EXPRESS SERVER
const server = app.listen(8000, ()=>{
    console.log("EXPRESS SERVER ON 8000")
})