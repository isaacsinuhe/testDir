/// <reference path="./ReqObj.d.ts" /> 

import express = require("express");
import routes = require("./routes");
import http = require("http");
import path = require("path");
const mongoskin = require("mongoskin");
import logger = require("morgan");
import errorHandler = require("errorhandler");
import bodyParser = require("body-parser");
import methodOverride = require("method-override");

let dbUrl = process.env.MONGOHQ_URL || 'mongodb://@localhost:27017/blog', 

db = mongoskin.db(dbUrl, { safe: true }), collections = {
    articles: db.collection('articles'),
    users: db.collection('users')
},

app = express();
app.locals.appTitle = 'blog-express';

app.use(function (req: express.Request & ReqObj, res: express.Response, next: express.NextFunction): any {
    if (!collections.articles || !collections.users)
        return next(new Error("No collections."));
    req.collections = collections;
    return next();
});

app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, '../views'));
app.set('view engine', 'jade');
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(methodOverride());
app.use(require('stylus').middleware(__dirname + '/public'));
app.use(express.static(path.join(__dirname, '../public/')));
// development only
if ('development' == app.get('env')) {
    app.use(errorHandler());
}
// Pages and routes
app.get('/', routes.index);
app.get('/login', routes.user.login);
app.post('/login', routes.user.authenticate);
app.get('/logout', routes.user.logout);
app.get('/admin', routes.article.admin);
app.get('/post', routes.article.post);
app.post('/post', routes.article.postArticle);
app.get('/articles/:slug', routes.article.show);
// REST API routes
app.get('/api/articles', routes.article.list);
app.post('/api/articles', routes.article.add);
app.put('/api/articles/:id', routes.article.edit);
app.delete('/api/articles/:id', routes.article.del);
app.all('*', function (req, res) {
    res.send(404);
});
// http.createServer(app).listen(app.get('port'), function(){
// console.log('Express server listening on port ' + app.get('port'));
// });
var server = http.createServer(app);
var boot = function () {
    server.listen(app.get('port'), function () {
        console.info('Express server listening on port ' + app.get('port'));
    });
};
var shutdown = function () {
    server.close();
};
if (require.main === module) {
    boot();
}
else {
    console.info('Running app as a module');
}
let port = app.get('port');
export { boot, shutdown, port }
//# sourceMappingURL=__app.js.map 