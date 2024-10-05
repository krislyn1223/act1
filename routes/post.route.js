const express = require("express")

const routes = express.Router()

routes.get("/home", (req, res) => {
    res.send("Welcome home")
})

routes.get("/contact", (req, res) => {
    res.send("Welcome contact")
})

routes.get("/about", (req, res) => {
    res.send("Welcome about")
})

routes.get("/info", (req, res) => {
    res.send("Welcome Info")
})

routes.get("/home", (req, res) => {
    res.send("Welcome dashboard")
})


module.exports = routes