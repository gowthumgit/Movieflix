const express = require('express');
const bodyParser = require('body-parser');
const dbConfig = require('./config/database.config.js');
const mongoose = require('mongoose')
path = require('path');
cors = require('cors');

mongoose.Promise = global.Promise;




// connection to mongodb using mongoose
mongoose.connect(dbConfig.url,{
    useNewUrlParser :true
}).then(() =>{
    console.log("DB Connected successfully....")
}).catch(err =>{
    console.log("Could not Connect DB successfully....",err)
    process.exit();
});

const app = express();

app.use(bodyParser.urlencoded({extended:true}));

app.use(bodyParser.json())

const AdminRoute = require('./app/routes/AdminRoutes')
app.use('/admin',AdminRoute)

const audiRoute = require('./app/routes/audiRoutes')
app.use('/audi',audiRoute)

const TheatreRoute = require('./app/routes/theatreRoutes')
app.use('/theatre',TheatreRoute)

const SeatRoute = require('./app/routes/seatRoutes')
app.use('/seat',SeatRoute)

const MovieRoute = require('./app/routes/MovieRoutes')
app.use('/movie',MovieRoute)

const UserRoute = require('./app/routes/userRoutes')
app.use('/user',UserRoute)

app.listen(7070,function(){
    console.log("Server is listening to Port no 7070");
});

app.get('/',(req,res)=>{
    res.send("message:Hello Multiplex Node Express");
});
app.use(bodyParser.json());
app.use(cors());


app.post('/display',(req,res)=>{
    console.log("in post method")
    console.log(req.body)
});