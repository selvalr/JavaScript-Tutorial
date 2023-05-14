const express = require('express');

const cors=require('cors')
const app = express();
const mysql = require('mysql');
   


app.use(cors({}));

app.use(express.json());
   
/*------------------------------------------
--------------------------------------------
Database Connection
--------------------------------------------
--------------------------------------------*/
const conn = mysql.createConnection({
  host: 'localhost',
  port:3306,
  user: 'root', /* MySQL User */
  password: 'root123', /* MySQL Password */
  database: 'car' /* MySQL Database */
});
   
/*------------------------------------------
--------------------------------------------
Shows Mysql Connect
--------------------------------------------
--------------------------------------------*/
conn.connect((err) =>{
  if(err) {console.log( err)}
  else{
    console.log('Mysql Connected with App...');
  }
 
});
   
/**
 * Get All Items
 *
 *
 */
app.get('/api/car',(req, res) => {
  let sqlQuery = "SELECT * FROM car";
  
  let query = conn.query(sqlQuery, (err, results) => {
    if(err) throw err;
    res.send(apiResponse(results));
  });
});
   
/**
 * Get Single Item
 *
 
 */
app.get('/api/car/:id',(req, res) => {
  let sqlQuery = "SELECT * FROM car WHERE id=" + req.params.id;
    
  let query = conn.query(sqlQuery, (err, results) => {
    if(err) throw err;
    res.send(apiResponse(results));
  });
});
   
/**
 * Create New Item
 *
 
 */
app.post('/api/car',(req, res) => {
  let data = {carname: req.body.carname, price: req.body.price,model:req.body.model,color:req.body.color};
  
  let sqlQuery = "INSERT INTO car SET ?";
  
  let query = conn.query(sqlQuery, data,(err, results) => {
    if(err) throw err;
    res.send(apiResponse(results));
  });
});
   
/**
 * Update Item
 *
 
 */
app.put('/api/car/:id',(req, res) => {
  let sqlQuery = "UPDATE car SET carname='"+ req.body.carname+"', price='"+req.body.price+"',model='"+req.body.model+"',color='"+req.body.color+"' WHERE id="+req.params.id;
  
  let query = conn.query(sqlQuery, (err, results) => {
    if(err) throw err;
    res.send(apiResponse(results));
  });
});
   
/**
 * Delete Item
 *
 
 */
app.delete('/api/car/:id',(req, res) => {
  let sqlQuery = "DELETE FROM car WHERE id="+req.params.id+"";
    
  let query = conn.query(sqlQuery, (err, results) => {
    if(err) throw err;
      res.send(apiResponse(results));
  });
});
  
/**
 * API Response
 *
*/

function apiResponse(data)
{
    return JSON.stringify({data});
}
   
/*------------------------------------------
--------------------------------------------
Server listening
--------------------------------------------
--------------------------------------------*/
app.listen(3000,() =>{
  console.log('Server started on port 3000...');
});