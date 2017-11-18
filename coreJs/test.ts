Array.from(new Set([1, 2, 3, 2, 1]));          // => [1, 2, 3]
'*'.repeat(10);                                // => '**********'
Promise.resolve(32).then(x => console.log(x)); // => 32
setImmediate(x => console.log(x), 42);         // => 42
let re = [8]
for (let x of re){

}