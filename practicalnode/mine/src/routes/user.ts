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
    !!req.session && req.session.destroy(console.log);
    res.redirect('/');
};
/*
 * POST authenticate route.
 */
export const authenticate = function (req: express.Request & ReqObj, res: express.Response, next: express.NextFunction): any{
    if(!req.body.email || !req.body.password)
        return res.render('login', { error: 'Please enter your email and password.' });
    // req.collections.users.findOne({
    req.models.User.findOne({
        email: req.body.email,
        password: req.body.password
    }, function (error: any, user: User){
        if (error) return next(error)
        if (!user) return res.render('login', { error: 'Incorrect email&password combination' });
        if(req.session){
            req.session.user = user;
            req.session.admin = user.admin;
        }
        res.redirect('/admin')
    }
    );
};
