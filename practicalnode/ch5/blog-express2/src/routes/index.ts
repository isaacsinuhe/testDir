import * as user from './user';
import * as article from './article';

import express = require('express');
export {user, article};
/*
 * GET home page.
 */
export function index(req: express.Request & ReqObj, res: express.Response, next: express.NextFunction): any {
    req.collections.articles.find({ published: true }, { sort: { _id: -1 } })
        .toArray(function (error: any, articles: any) {
            if (error)
                return next(error);
            res.render('index', { articles: articles });
        });
};
