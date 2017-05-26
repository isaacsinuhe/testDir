//Destructuring
let o = {
    a: "foo",
    b: 12,
    c: "bar"
};

// let { a: something, b: nothing }: { a: string, b: number, c: string } = j;
// let { a: something, b: nothing } = o;


// console.log(something, nothing);
//
// rest in obj
let { a, ...passthrough } = o;
let total = passthrough.b + passthrough.c.length;
//
// // spreading objects
// let defaults = { food: "spicy", price: "$$", ambiance: "noisy" };
// let search = { ...defaults, food: "rich" };
