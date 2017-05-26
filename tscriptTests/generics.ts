// // generic type basics
// // generic identity functions
// function identity<T>(arg: T): T {
//     return arg;
// }
// console.log(identity<number>(3));

// // Generic types
// interface GenericIdentityFn {
//     <T>(arg: T): T;
// }
//
// function identity<U>(arg: U): U {
//     return arg;
// }
//
// let myIdentity: GenericIdentityFn = identity;
// myIdentity<string>('something');

// // Generic class
// class GenericNumber<T> {
//     zeroValue: T;
//     add: (x: T, y: T) => T;
// }
//
// let myGenericNumber = new GenericNumber<number>();
// myGenericNumber.zeroValue = 0;
// myGenericNumber.add = function(x, y) { return x + y; };
//
// let stringNumeric = new GenericNumber<string>();
// stringNumeric.zeroValue = "zero value ";
// stringNumeric.add = function(x, y) { return x + y; };
//
// console.log(myGenericNumber.add(myGenericNumber.zeroValue, 9));
// console.log(stringNumeric.add(stringNumeric.zeroValue, "test"));

// // Generic constraints
// interface Lengthwise {
//     length: number;
// }
//
// function loggingIdentity<T extends Lengthwise>(arg: T): T {
//     console.log(arg.length);  // Now we know it has a .length property, so no more error
//     return arg;
// }
// loggingIdentity(9);
// loggingIdentity({length: 10, value: 3});
