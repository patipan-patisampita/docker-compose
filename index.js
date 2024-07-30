const express = require('express')
const app = express()

require('dotenv').config()

app.get('/',(req,res)=>{
    res.send('<center>Home page</center>')
})

const PORT = process.env.PORT || 30001
app.listen(PORT,()=>{
    console.log(`SERVER running at http://localhost:${PORT}`)
})