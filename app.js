const express = require("express");
const path = require("path");
const app = express();
const bodyparser = require("body-parser");
const mongoose = require("mongoose");
require('dotenv').config()
// mongoose.connect('mongodb://localhost/pWebContactForm',{useNewUrlParser: true});
// const port = 8000;

const connectDB = require('./connectMongo')
connectDB()

var contactFSchema = new mongoose.Schema({
    name: String,
    email:String,
    number: String,
    address: String,
    more: String
});

var ContactForm = mongoose.model('ContactForm', contactFSchema);


app.use('/static', express.static('static'))
app.use(express.urlencoded())


app.set('view engine', 'pug')
app.set('views', path.join(__dirname, 'views'))

app.get('/', (req, res)=>{
    const params = {}
    res.status(200).render('home.pug', params);
})
app.get('/contact', (req, res)=>{
    const params = {}
    res.status(200).render('contact.pug', params);
})

app.post('/contact', (req, res)=>{
    var myData = new ContactForm(req.body);
    myData.save().then(()=>{
        res.send("Data has been sent to the database, I will respond you as soon as possible")
    }).catch(()=>{
        res.status(404).send("Data has not been sent to the database")
    });
})

const PORT = process.env.PORT
app.listen(PORT, ()=>{
    console.log("The application started successfully on port" + PORT);
});


