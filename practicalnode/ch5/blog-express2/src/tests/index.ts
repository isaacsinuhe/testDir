let {shutdown, port, boot} = require('../app');
import superagent = require('superagent');
import expect = require('expect.js');
let seedArticles = require('../../db/articles.json');

describe('server', function () {

    before(function () {
        boot();
    });

    describe('homepage', function () {
        it('should respond to GET', function (done: any) {
            superagent
                .get('http://localhost:' + port)
                .end(function (res) {
                    expect(res.status).to.equal(200);
                    done()
                })
        })
        it('should contain posts', function (done: any) {
            superagent
                .get('http://localhost:' + port)
                .end(function (res) {
                    seedArticles.forEach(function (item: any, index: number, list: any[]) {
                        if (item.published) {
                            expect(res.text).to.contain('<h2><a href="/articles/' + item.slug + '">' + item.title);
                        } else {
                            expect(res.text).not.to.contain('<h2><a href="/articles/' + item.slug + '">' + item.title);
                        }
                        // console.log(item.title, res.text)
                    })
                    done()
                })
        });
    });

    describe('article page', function () {
        it('should display text', function (done: any) {
            var n = seedArticles.length;
            seedArticles.forEach(function (item: any, index: number, list: any[]) {
                superagent
                    .get('http://localhost:' + port + '/articles/' + seedArticles[index].slug)
                    .end(function (res) {
                        if (item.published) {
                            expect(res.text).to.contain(seedArticles[index].text);
                        } else {
                            expect(res.status).to.be(401);
                        }
                        // console.log(item.title)
                        if (index + 1 === n) {
                            done();
                        }
                    })
            })
        })
    })
    after(function () {
        shutdown();
    });
});