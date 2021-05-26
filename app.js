const express = require('express');
const logger = require('morgan');
const path = require('path')
const todoRouter = require('./router/todoRouter')
const indexRouter = require('./router/indexRouter')
const uuidv4 = require('uuid').v4

const app = express()

app.use (logger('dev'));

app.use(express.json())

app.use(express.static(path.join(__dirname, "public")));

app.set('views', path.join(__dirname, "views"))

app.set('view engine', 'ejs')


app.use("/api/todo", todoRouter)
app.use("/", indexRouter)

app.get('/', function (req,res){
    res.render('index')
})

app.listen(3000, function(){
    console.log('server started')
})

module.exports = app;