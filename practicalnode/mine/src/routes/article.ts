/*
 * GET article page.
 */
import express = require('express');
export const show = function (req: express.Request & ReqObj , res: express.Response, next: express.NextFunction): any {
    if (!req.params.slug) return next(new Error('No article slug.'));
    // req.collections.articles.findOne({ slug: req.params.slug }, function (error: any, article: any) {
    req.models.Article.findOne({ slug: req.params.slug }, function (error: any, article: any) {
        if (error) return next(error);
        if (!article.published && !req.session.admin) return res.send(401);
        res.render('article', article);
    });
};
/*
 * GET articles API.
 */
export const list = function (req: express.Request & ReqObj, res: express.Response, next: express.NextFunction): any {
    // req.collections.articles.find({}).toArray(function (error: any, articles: any) {
    req.models.Article.list(function (error: any, articles: any) {
        if (error) return next(error);
        res.send({ articles: articles });
    });
};
/*
 * POST article API.
 */
export const add = function (req: express.Request & ReqObj, res: express.Response, next: express.NextFunction): any {
    if (!req.body.article) return next(new Error('No article payload.'));
    var article = req.body.article;
    article.published = false;
    // req.collections.articles.insert(article, function (error: any, articleResponse: any) {
    req.models.Article.create(article, function (error: any, articleResponse: any) {
        if (error)
            return next(error);
        res.send(articleResponse);
    });
};
/*
 * PUT article API.
 */
export const edit = function (req: express.Request & ReqObj, res: express.Response, next: express.NextFunction): any {
    if (!req.params.id) return next(new Error('No article ID.'));
    // req.collections.articles.updateById(req.params.id, { $set: req.body.article }, function (error: any, count: any) {
    //     if (error)
    //         return next(error);
    //     res.send({ affectedCount: count });
    // });
    req.models.Article.findById(req.params.id, function (error: any, article: any) {
        if (error) return next(error);
        article.update({ $set: req.body.article }, function (error: any, count: number, raw: any) {
            if (error) return next(error);
            res.send({ affectedCount: count });
        })
    });
};
/*
 * DELETE article API.
 */
export const del = function (req: express.Request & ReqObj, res: express.Response, next: express.NextFunction): any {
    if (!req.params.id) return next(new Error('No article ID.'));
    // req.collections.articles.removeById(req.params.id, function (error: any, count: any) {
    //     if (error)
    //         return next(error);
    //     res.send({ affectedCount: count });
    // });
    req.models.Article.findById(req.params.id, function (error: any, article: any) {
        if (error) return next(error);
        if (!article) return next(new Error('article not found'));
        article.remove(function (error: any, doc: any) {
            if (error) return next(error);
            res.send(doc);
        });
    });
};
/*
 * GET article POST page.
 */
export const post = function (req: express.Request & ReqObj, res: express.Response, next: express.NextFunction): any {
    if (!req.body.title)
        res.render('post');
};
/*
 * POST article POST page.
 */
export const postArticle = function (req: express.Request & ReqObj, res: express.Response, next: express.NextFunction): any {
    if (!req.body.title || !req.body.slug || !req.body.text) {
        return res.render('post', { error: 'Fill title, slug and text.' });
    }
    var article = {
        title: req.body.title,
        slug: req.body.slug,
        text: req.body.text,
        published: false
    };
    // req.collections.articles.insert(article, function (error: any, articleResponse: any) {
    req.models.Article.create(article, function (error: any, articleResponse: any) {
        if (error) return next(error);
        res.render('post', { error: 'Article was added. Publish it on Admin page.' });
    });
};
/*
 * GET admin page.
 */
export const admin = function (req: express.Request & ReqObj, res: express.Response, next: express.NextFunction): any{
    // req.collections.articles.find({}, { sort: { _id: -1 } }).toArray(function (error: any, articles: any) {
    req.models.Article.list(function (error: any, articles: any) {
        if (error) return next(error);
        res.render('admin', { articles: articles });
    });
};
