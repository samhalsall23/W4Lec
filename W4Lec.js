// PART 1
// let express = require ('express');
// let app = express();
// let morgan = require('morgan');


// //app.use(express.static(__dirname+"/views"));
// //app.use(express.static(__dirname+"/img"));//telling express that some of static assets will be in img

// app.use(morgan('common'));

// // app.use(function(req,res){
// //     let date = new Date();
// //     console.log("I got a request at "+ date.getHours());
    
// // })


// app.use(function(req,res,next){
//     console.log("Middleware....1");
//     next();
// });
// app.use(function(req,res,next){
//     console.log("Middleware....2");
//     next();
// });

// app.get('/', function(req,res){
//     console.log('Hello from app.get');
//     //res.send("Thanks for response");
//     res.send('Hello');
// });

// app.get('/about', function(req,res){
//     console.log("I got a GET about");
//     res.sendFile(__dirname+"/public/" + 'about.html');
    
// })

// app.listen(8000);



//PART 2 - BODY PARSER
let express = require('express');
let bodyParser = require('body-parser');
let ejs = require('ejs');

let app = express();

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');


let db =[];
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
    extended: false
}))

// parse application/json
app.use(bodyParser.json())

app.get('/', function (rqe, res) {
    //res.sendFile(__dirname + '/views' + '/index.html');
    res.render('index.html', {userName: 'Tim', ar:db})
});

app.post('/data', function(req,res){
    console.log('Post req received');
    console.log(req.body);
    db.push(req.body);
    console.log("I have " + db.length + " records");
    
    
    res.send('Thanks');
})

app.listen(8000);