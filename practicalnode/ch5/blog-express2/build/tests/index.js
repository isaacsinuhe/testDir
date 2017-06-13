"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _a = require('../app'), shutdown = _a.shutdown, port = _a.port, boot = _a.boot;
var superagent = require("superagent");
var expect = require("expect.js");
var seedArticles = require('../../db/articles.json');
describe('server', function () {
    before(function () {
        boot();
    });
    describe('homepage', function () {
        it('should respond to GET', function (done) {
            superagent
                .get('http://localhost:' + port)
                .end(function (res) {
                expect(res.status).to.equal(200);
                done();
            });
        });
        it('should contain posts', function (done) {
            superagent
                .get('http://localhost:' + port)
                .end(function (res) {
                seedArticles.forEach(function (item, index, list) {
                    if (item.published) {
                        expect(res.text).to.contain('<h2><a href="/articles/' + item.slug + '">' + item.title);
                    }
                    else {
                        expect(res.text).not.to.contain('<h2><a href="/articles/' + item.slug + '">' + item.title);
                    }
                    // console.log(item.title, res.text)
                });
                done();
            });
        });
    });
    describe('article page', function () {
        it('should display text', function (done) {
            var n = seedArticles.length;
            seedArticles.forEach(function (item, index, list) {
                superagent
                    .get('http://localhost:' + port + '/articles/' + seedArticles[index].slug)
                    .end(function (res) {
                    if (item.published) {
                        expect(res.text).to.contain(seedArticles[index].text);
                    }
                    else {
                        expect(res.status).to.be(401);
                    }
                    // console.log(item.title)
                    if (index + 1 === n) {
                        done();
                    }
                });
            });
        });
    });
    after(function () {
        shutdown();
    });
});
