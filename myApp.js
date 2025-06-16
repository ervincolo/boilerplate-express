let express = require('express');
let app = express();

console.log('Hello World');


//app.get('/', function(req,res){res.send('Hello Express');});
const absolutePath = __dirname + '/views/index.html';

app.get('/', function(req,res) {
    res.sendFile(absolutePath);
});

app.get('/json', (req, res) => {
    let message = "Hello json";
    if (process.env.MESSAGE_STYLE === "uppercase") {
      message = message.toUpperCase();
    }
    res.json({ message: message });
  });

app.use('/public', express.static(__dirname + '/public'));




 module.exports = app;
