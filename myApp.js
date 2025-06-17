require('dotenv').config();
const express = require('express');
const app = express();

app.use((req, res, next) => {
    let string = `${req.method} ${req.path} - ${req.ip}`
    console.log(string) 
     next();
});

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
