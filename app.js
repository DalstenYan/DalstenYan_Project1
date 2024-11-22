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

// var q = "SELECT *, DATE_FORMAT(requestdate, '%m-%d-%Y') AS date FROM request;"

// con.query(q, (err, res) => {
//     if(err) throw err;
//     res.forEach(function(element) {
//         console.log(element.ID + " " + element.requestdate.toLocaleDateString('en-US'));
//     });
// })


app.use(morgan('dev'))

app.use(express.static('Public'))
app.use(express.urlencoded({extended:false}))
var bodyparser = require("body-parser")
app.use(bodyparser.urlencoded({extended: true}))

app.set('view engine', 'ejs')
app.set('views', 'views')

//routes
app.get("/RequestActions", (req,res) =>{
    const q = "select * from request"
    con.query(q, (err,results) =>{
        if(err) throw err;
        res.render("RequestActions", {request:results})
    }) 
})
//posting request
app.post("/RequestActions", (req, res) => 
    {
        const request = {username, reqtype, userdesc} = req.body;
        const q = "insert into request (Name, Request_Type, Description) values (?,?,?)";
        con.query(q,[username, reqtype, userdesc], (err, res) =>{
            if(err) throw err;
        });

        res.redirect("/RequestActions");
    })

//listen
app.listen(port, () =>{
    console.log("The server is running at port: " + port)
})