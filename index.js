const express = require("express")
require("dotenv").config()
const app = express()

app.get("/",(req,resp) => {
    resp.send("Welcome, This is home page")
})

app.get("/about",(req,resp) => {
    resp.send("Welcome, This is a About page")
})

app.listen(process.env.PORT);