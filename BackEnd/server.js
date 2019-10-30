const express = require('express');
const app = express()
const port = 4000
const path = require('path')
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

                            //user name:admin/password:admin
const mongoDB='mongodb+srv://admin:admin@cluster0-uefz6.mongodb.net/test?retryWrites=true&w=majority';
mongoose.connect(mongoDB, {useNewUrlParser:true});

const Schema = mongoose.Schema;

const movieSchema = new Schema({
    title:String,
    year:String,
    poster:String
})

const MoiveModel = mongoose.model('movie',movieSchema);

app.use(cors());
app.use(function(req, res, next) {
res.header("Access-Control-Allow-Origin", "*");
res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
res.header("Access-Control-Allow-Headers",
"Origin, X-Requested-With, Content-Type, Accept");
next();
});

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.get('/', (req, res) => res.send('Hello World!'))


app.get('/whatever', (req, res)=>{res.send('whatever')})

app.get('/Hello/:name', (req,res)=>{
    console.log(req.params.name);
    res.send('hello '+ req.params.name)
})
app.get('/api/movies', (req,res)=>{

    MoiveModel.find((error,data)=>{
        res.json({movies:data})
    })

app.get('/api/movies/:id',(req, res)=>{
    console.log(req.params.id);

    MoiveModel.findById(req.params.id,(error,data)=>{
        res.json(data);
    })
})

    // const myMovies = 
    //         [
    //         {
    //         "Title":"Avengers: Infinity War",
    //         "Year":"2018",
    //         "Poster":"https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg"
    //         },
    //         {
    //         "Title":"Captain America: Civil War",
    //         "Year":"2016",
    //         "Poster":"https://m.media-amazon.com/images/M/MV5BMjQ0MTgyNjAxMV5BMl5BanBnXkFtZTgwNjUzMDkyODE@._V1_SX300.jpg"
    //         }
    //         ];
    //     res.status(200).json({
    //         movies:myMovies,
    //         message: 'Data Sent'
    //     });
    // //res.json({movies:myMovies});
})

app.get('/test', (req,res)=>{
    res.sendFile(path.join(__dirname+'/index.html'));
})

app.get('/name', (req,res)=>{

    console.log(req.query.lastname);
    res.send('welcome'+req.query.firstname+' '+req.query.lastname);
})

app.post('/api/movies', (req,res)=>{
    console.log(req.body);
    console.log(req.body.title);
    console.log(req.body.year);
    console.log(req.body.poster);
    res.json('Data uploaded');

    MoiveModel.create({
        title:req.body.title,
        year:req.body.year,
        poster:req.body.poster
    })
})


app.post('/name', (req,res)=>{
    console.log(req.body.lastname);
    res.send('post received from' + req.body.firstname+ ' '+ req.body.lastname+'');
})
app.listen(port, () => console.log(`Example app listening on port ${port}!`))