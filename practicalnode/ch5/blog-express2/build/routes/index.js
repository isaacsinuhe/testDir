"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var user = require("./user");
exports.user = user;
var article = require("./article");
exports.article = article;
/*
 * GET home page.
 */
function index(req, res, next) {
    req.collections.articles.find({ published: true }, { sort: { _id: -1 } })
        .toArray(function (error, articles) {
        if (error)
            return next(error);
        res.render('index', { articles: articles });
    });
}
exports.index = index;
;
