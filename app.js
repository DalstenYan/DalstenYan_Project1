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

    app.post('/modify', (req, res) => {
        const { requestId, newTitle, newDescription } = req.body;
        const actionType = req.body.actionType;
      
        if (actionType === 'update') {
          // Perform update action
          const query = 'UPDATE requests SET title = ?, description = ? WHERE id = ?';
          db.query(query, [newTitle, newDescription, requestId], (err, result) => {
            if (err) {
              console.error('Error updating request:', err.stack);
              return res.status(500).send('Error updating request');
            }
      
            res.redirect('/');
          });
        } else if (actionType === 'delete') {
          // Perform delete action
          const query = 'DELETE FROM requests WHERE id = ?';
          con.query(query, [requestId], (err, result) => {
            if (err) {
              console.error('Error deleting request:', err.stack);
              return res.status(500).send('Error deleting request');
            }
      
            res.redirect('/');
          });
        } else {
          res.status(400).send('Invalid action');
        }
      });


      app.get('/getRequestData/:id', (req, res) => {
        const requestId = req.params.id;

        con.query('SELECT * FROM request WHERE id = ?', [requestId], (err, result) => {
          if (err) {
              console.error('Error querying the database:', err);
              res.status(500).send({ error: 'Database error' });
          } else {
              if (result.length > 0) {
                  res.json(result[0]);  
              } else {
                  res.status(404).send({ error: 'Request not found' });
              }
          }
        });
      });

      app.delete('/deleteRequest/:id', (req, res) => {
        const requestId = req.params.id
        console.log(requestId)

        con.query('DELETE FROM request WHERE id = ?', [requestId], (err, result) => {
            if (err) {
                console.error('Error deleting from database:', err);
                res.status(500).send({ error: 'Database error' });
            } else {
                if (result.affectedRows > 0) {
                    res.status(222).send("ITS DONE")
                } else {
                    res.status(404).send({ error: 'Request not found' });
                }
            }
            
        });
        
    });




//listen
app.listen(port, () =>{
    console.log("The server is running at port: " + port)
})