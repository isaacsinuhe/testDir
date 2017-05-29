// // intersection types
// function extend<T, U>(first: T, second: U): T & U {
//     let result = <T & U>{};
//     for (let id in first) {
//         (<any>result)[id] = (<any>first)[id];
//     }
//     for (let id in second) {
//         if (!result.hasOwnProperty(id)) {
//             (<any>result)[id] = (<any>second)[id];
//         }
//     }
//     return result;
// }
// class Body{
// 	constructor(public name: string){};
// }
// class Head extends Body{
// 	constructor(public name: string){
// 		super(name);
// 	}
// }
//
// class Person2 {
//     constructor(public name: Head & Body) { }
// }
// let some = new Person2(new Head('hi'));
//
// class Person {
//     constructor(public name: string) { }
// }
// interface Loggable {
//     log(): void;
// }
// class ConsoleLogger implements Loggable {
//     log() {
//         // ...
//     }
// }
// var jim = extend(new Person("Jim"), new ConsoleLogger());
// var n = jim.name;
// jim.log();
