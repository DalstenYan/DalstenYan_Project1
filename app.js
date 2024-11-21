const express = require('express')
const mysql = require('mysql')
const morgan = require('morgan')

//connection
const con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'portfoliorequests'
})

//error handling
con.connect((err) =>{
    if(err) throw err;
    console.log("Database is connected");
})

//express stuff
const port = 8080

const app = express()

var q = "SELECT *, DATE_FORMAT(requestdate, '%m-%d-%Y') AS date FROM request;"

con.query(q, (err, res) => {
    if(err) throw err;
    res.forEach(function(element) {
        console.log(element.ID + " " + element.requestdate.toLocaleDateString('en-US'));
    });
})


app.use(morgan('dev'))