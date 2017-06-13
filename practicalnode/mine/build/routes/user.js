"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.list = function (req, res, next) {
    res.send('respond with a resource');
};
/*
 * GET login page.
 */
exports.login = function (req, res, next) {
    res.render('login');
};
/*
 * GET logout route.
 */
exports.logout = function (req, res, next) {
    !!req.session && req.session.destroy(console.log);
    res.redirect('/');
};
/*
 * POST authenticate route.
 */
exports.authenticate = function (req, res, next) {
    if (!req.body.email || !req.body.password)
        return res.render('login', {
            error: 'Please enter your email and password.'
        });
    req.collections.users.findOne({
        email: req.body.email,
        password: req.body.password
    }, function (error, user) {
        if (error)
            return next(error);
        if (!user)
            return res.render('login', {
                error: 'Incorrect email&password combination'
            });
        if (req.session) {
            req.session.user = user;
            req.session.admin = user.admin;
        }
        res.redirect('/admin');
    });
};
