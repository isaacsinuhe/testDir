/*
 * GET users listing.
 */
import express = require('express');
export const list = function (req: express.Request & ReqObj, res: express.Response, next: express.NextFunction): any {
    res.send('respond with a resource');
};
/*
 * GET login page.
 */
export const login = function (req: express.Request & ReqObj, res: express.Response, next: express.NextFunction): any{
    res.render('login');
};
/*
 * GET logout route.
 */
export const logout = function (req: express.Request & ReqObj, res: express.Response, next: express.NextFunction): any {
    res.redirect('/');
};
/*
 * POST authenticate route.
 */
export const authenticate = function (req: express.Request & ReqObj, res: express.Response, next: express.NextFunction): any{
    res.redirect('/admin');
};
