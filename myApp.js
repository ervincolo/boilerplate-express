require('dotenv').config();
const express = require('express');
const app = express();

const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: false}));

app.use((req, res, next) => {
    let string = `${req.method} ${req.path} - ${req.ip}`
    console.log(string) 
     next();
});

app.get('/now', (req, res, next) => {
    req.time = new Date().toString(); // middleware: dodajemo vrijeme
    next();                            // idemo dalje na handler
  }, (req, res) => {
    res.send({ time: req.time });     // handler: vraćamo JSON
  });

app.get('/name',(req,res) => {
    const first = req.query.first;
    const last = req.query.last;
    res.send({name: `${first} ${last}`});
}) 

app.get('/:word/echo', (req,res) => {
    const word = req.params.word;
    res.send({echo: word});
})


//app.get('/', function(req,res){res.send('Hello Express');});
const absolutePath = __dirname + '/views/index.html';
app.get('/', function(req,res) {res.sendFile(absolutePath);});
app.use('/public', express.static(__dirname + '/public'));


app.get('/json', (req, res) => {
	let response = "Hello json";
	if(process.env.MESSAGE_STYLE === 'uppercase') {
		return res.json({ message: response.toUpperCase() });
	} else {
		return res.json({ message: response });
	}
});

console.log('ervin');

module.exports = app;
