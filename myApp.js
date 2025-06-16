let express = require('express');
let app = express();
require('dotenv').config();

console.log('Hello World');


//app.get('/', function(req,res){res.send('Hello Express');});
const absolutePath = __dirname + '/views/index.html';

app.get('/', function(req,res) {
    res.sendFile(absolutePath);
});

app.get("/json", (req, res) => {
    const message =
      process.env.MESSAGE_STYLE === "uppercase"
        ? "HELLO JSON"
        : "Hello json";
    res.json({ message });
  });

app.use('/public', express.static(__dirname + '/public'));




 module.exports = app;
