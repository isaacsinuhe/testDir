/// <reference path="./app.d.ts" /> 

let TWITTER_CONSUMER_KEY = process.env.TWITTER_CONSUMER_KEY;
let TWITTER_CONSUMER_SECRET = process.env.TWITTER_CONSUMER_SECRET

import express = require("express");
import routes = require("./routes");
import http = require("http");
import path = require("path");
import mongoose = require('mongoose');
import models = require('./models');
// const mongoskin = require("mongoskin");

const dbUrl = process.env.MONGOHQ_URL || 'mongodb://@localhost:27017/blog', 
db = mongoose.connect(dbUrl, {db: {safe: true}}, console.log)
// db = mongoskin.db(dbUrl, { safe: true }), 
// collections = {
//     articles: db.collection('articles'),
//     users: db.collection('users')
// };

let everyauth = require('everyauth');
import session = require("express-session");
import logger = require("morgan");
import errorHandler = require("errorhandler");
import cookieParser = require("cookie-parser");
import bodyParser = require("body-parser");
import methodOverride = require("method-override");

everyauth.debug = true;
everyauth.twitter
    .consumerKey(TWITTER_CONSUMER_KEY)
    .consumerSecret(TWITTER_CONSUMER_SECRET)
    .findOrCreateUser(function (
        this: any,
        session: any,
        accessToken: any,
        accessTokenSecret: any,
        twitterUserMetadata: any): Promise<any> {
            var promise = this.Promise();
            process.nextTick( () => {
                if (twitterUserMetadata.screen_name === 'isaacsinuhe') {
                    session.user = twitterUserMetadata;
                    session.admin = true;
                }
                promise.fulfill(twitterUserMetadata);
            })
            return promise;
        }
    )
    .redirectPath('/admin');

everyauth.everymodule.handleLogout(routes.user.logout);
everyauth.everymodule.findUserById( function (user: User, callback: Function) {
    callback(user);
})

/**
 * init app
 */
let app = express();

/**
 * app configuration
 */
app.locals.appTitle = 'blog-express';

app.use( (req: express.Request & ReqObj, res: express.Response, next: express.NextFunction): any => {
    // if (!collections.articles || !collections.users)
    //     return next(new Error("No collections."));
    // req.collections = collections;
    if (!models.Article || !models.User) return next(new Error('No models.'));
    req.models = models;
    return next();
});
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, '../views'));
app.set('view engine', 'pug');

/**
 * middleware configuration
 */
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

app.use(cookieParser('3CCC4ACD-6ED1-4844-9217-82131BDCB239'));
app.use(session({ secret: '2C44774A-D649-4D44-9535-46E296EF984F' }))
app.use(everyauth.middleware(app))

app.use(methodOverride());
app.use(require('stylus').middleware(__dirname + '/public'));
app.use(express.static(path.join(__dirname, '../public/')));

app.use( function (req, res, next) {
    if ( req.session && req.session.admin )
        res.locals.admin = true;
    next();
});

var authorize = function (req: express.Request, res: express.Response, next: express.NextFunction): void | express.Response {
    if (req.session && req.session.admin)
        return next();
    else
        return res.sendStatus(401);
};
// development only
if ('development' == app.get('env')) app.use(errorHandler());
/**
 * routing
 */
app.get('/', routes.index);
app.get('/login', routes.user.login);
app.post('/login', routes.user.authenticate);
app.get('/logout', routes.user.logout);
app.get('/admin', authorize, routes.article.admin);
app.get('/post', authorize, routes.article.post);
app.post('/post', authorize, routes.article.postArticle);
app.get('/articles/:slug', routes.article.show);
// REST API routes
app.all('/api', authorize);
app.get('/api/articles', routes.article.list);
app.post('/api/articles', routes.article.add);
app.put('/api/articles/:id', routes.article.edit);
app.delete('/api/articles/:id', routes.article.del);

/**
 * fallback
 */
app.all('*', (req, res) => {
    res.sendStatus(404);
});
// http.createServer(app).listen(app.get('port'), function(){
// console.log('Express server listening on port ' + app.get('port'));
// });
let server = http.createServer(app);
let boot = () => {
    server.listen(app.get('port'), () => {
        console.info('Express server listening on port ' + app.get('port'));
    });
};
let shutdown = () => {
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