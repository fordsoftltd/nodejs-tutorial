const express = require('express')
const bodyParser = require('body-parser')
const app = express()
//get, post, put, patch, delete

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json());
const productRouter = require('./product-router/products-router')

app.use("/products",productRouter)

module.exports =app;

