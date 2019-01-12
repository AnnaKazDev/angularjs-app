var express = require('express');

var app = express();
app.use(express.static(__dirname));
app.get('/', function (req, res) {
	res.render('script.js');
	res.redirect('/about');
});

app.listen(3000, 'localhost');
console.log('MyProject Server is Listening on port 3000');