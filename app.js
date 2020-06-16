var express= require('express');
var cors= require('cors');
var mongoose= require('mongoose');
var bodyparser= require('body-parser');
var path= require('path');



// define the Express method
var app = express();

const route=require('./Routes/route');

// connect to mongodb
mongoose.connect('mongodb://localhost:27017/contactlist');

// to check the connection

mongoose.connection.on('connected',() =>{
    console.log("connected tpo the databse");
})

mongoose.connection.on('error',(err)=>{
    console.log(err);
})


// adding the middleware
app.use(cors());

app.use(bodyparser.json());

// define the ststic file
// app.use(express.static(path.join(__dirname
//     ,'public')));

// define the port
const port=3000;

app.use('/api',route);

// bind the server with te port
app.listen(port,()=>{
    console.log("the server is running in port nummber:",+port);
})

// testing the server
app.get('/',(req,res)=>{
    res.send("foobar");
})





