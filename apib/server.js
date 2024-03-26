var express = require ('express');
var mysql = require('mysql');
var cors = require('cors'); 
var app = express(); 

app.use(express.json()); 
app.use(express.urlencoded({extended:true}));
app.use(cors({origin:true}));
app.use(cors());

//create db connection
const db = mysql.createConnection({
    host:'localhost',
    user: 'root',
  password: '',
  database: 'hrm_db',
});

//connect to db
db.connect((err)=>{
    if(err) throw err;
    console.log('connected to mysql...');
});

//create server port
var port = process.env.PORT||7777;
app.listen(port,()=>{
    console.log('Running on port 7777');
});
module.exports=app;

app.get('/hello',(req,res,next)=>{
    res.send('hello');
});
////login

app.get('/api/login',(req, res) => {
  

    let sql = "SELECT * FROM user WHERE USERNAME = '"  + req.query.user+ "' AND PASSOWRD = '" + req.query.pass+"'";
     
     let query = db.query(sql, (err, results) => {
       if(err) throw err;
         res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
     });
   });
   app.get('/getAll',(req, res) => {
     let sql = "SELECT * FROM user";
     let query = db.query(sql, (err, results) => {
       if(err) throw err;
       res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
     });
   });
   