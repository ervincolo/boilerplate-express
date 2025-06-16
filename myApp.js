let express = require('express');
let app = express();
require('dotenv').config();

console.log('Hello World');


//app.get('/', function(req,res){res.send('Hello Express');});
const absolutePath = __dirname + '/views/index.html';
app.use('/public', express.static(__dirname + '/public'));

app.get('/', function(req,res) {res.sendFile(absolutePath);});


app.use('/json', (req, res) => {
	let response = "Hello json";

	if(process.env.MESSAGE_STYLE === 'uppercase') {
		return res.json({message:response.toUpperCase()})
	} else {
  	return res.json({message:response})
	}
})






 module.exports = app;
