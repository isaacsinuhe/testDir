var express = require('express');
var http = require('http');
var path = require('path');

var app = express();

/**
 * setting app configuration
 */
app.set('appName', 'hello-world');
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

/**
 * registering middleware
 */
 
/**
 * registering route handlers
 */
app.all('*', function (req, res, next) {
    res.render('index', {msg: 'Welcome to the Practical Node.js!'});
});

/**
 * serving through a port
 */
http
    .createServer(app)
    .listen(
        app.get('port'),
        function () {
            console.log(
                'Express.js server listening on port ' +
                app.get('port')
            );
        }
    );