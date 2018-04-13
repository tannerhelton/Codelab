var express = require('express');
var bodyParser = require('body-parser');
var app = express();

var http = require('http').Server(app);

var server = http.listen(3000, function () {
    console.log('hosting from ' + webroot);
    console.log('server listening on http://localhost/');
});

var io = require('socket.io').listen(server);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

app.get('/echo', function (req, res) {
    res.send('Hello World!')
});

app.post('/echo', function (req, res) {
    console.log('post / = ' + JSON.stringify(req.body));
    res.status(201).send('got it');
    io.sockets.emit('update', req.body);
});

var webroot = __dirname + '/../client/';

app.use('/', express.static(webroot));
