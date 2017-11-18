Array.from(new Set([1, 2, 3, 2, 1])); // => [1, 2, 3]
'*'.repeat(10); // => '**********'
Promise.resolve(32).then(function (x) { return console.log(x); }); // => 32
setImmediate(function (x) { return console.log(x); }, 42); // => 42
var re = [8];
for (var _i = 0, re_1 = re; _i < re_1.length; _i++) {
    var x = re_1[_i];
}
