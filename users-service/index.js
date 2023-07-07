const express = require ('express');
const mysql = require ('mysql2');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const PORT=3002;
const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Sarhane1991.",
    database: "trendy",
  });
  
  connection.connect((err) => {
    if (err) {
      console.error("Error connecting to database:", err);
      return;
    }
    console.log("Connected to database");
  });
app.use(cors());
app.use(bodyParser.json());
app.get('/users', (req, res)=>{const query= 'select * from users';
connection.query(query, (err,suc)=>{
    console.log(suc)
    if(err) console.log(err)
 res.json(suc)})});
app.listen(PORT,()=>console.log(`listening on port: ${PORT}`)).on('error',()=>console.log('users service is down'));