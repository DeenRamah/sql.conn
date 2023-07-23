require("dotenv").config()//configure settings and sensitive info

const express = require("express")
const app = express()

app.use(express.json())// place json files to the request object

//then direct the request to endpoint starting ith /post to postRouters.js
//app.use("/posts", require("./routes/postRoutes"))


//Global Error Handler. IMPORTANT function params MUST start with err
//allows error execution during processing of request
//provides way to respond to errors
app.use((err, req, res, next) =>{
    console.log(err.stack)// allows the trace of the error
    // shows the sequence funtion calls that le to the error
    console.log(err.name)
    console.log(err.code)

    res.status(500).json({
        message:  "hey mf go debug something ain't working"
    })
})

//listening to the pc port
const PORT = process.env.PORT || 3331;
app.listen(PORT, () => console.log(`server is running bro , on port ${PORT}`))


//http://localhost:3331