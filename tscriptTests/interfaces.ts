 //interfaces
interface LabelledValue {
    label: string
}
type someth = {
	label: string
}
// label prop
function printLabel(labelledObj: someth) {
    console.log(labelledObj.label);
}

let myObj = {size: 10, label: "Size 10 Object"};

printLabel(myObj);

// // default values
// interface SquareConfig {
//     color?: string;
//     width?: number;
	// [propName: string]: any
// }
//
// function createSquare(config: SquareConfig): {color: string; area: number;}{
//     let newSquare = {color: "white", area: 100};
//     if (config.color) {
//         newSquare.color = config.color;
//     }
//     if (config.width) {
//         newSquare.area = config.width * config.width;
//     }
//     return newSquare;
// }
// let mySquare = createSquare({color: "black"});

// //interfaces for functions
// interface SearchFunc {
//     (source: string, subString: string): boolean;
// }
//
// let mySearch: SearchFunc;
// mySearch = function(source: string, subString: string) {
//     let result = source.search(subString);
//     return result > -1;
// }

// // Implement interface
// interface ClockInterface {
//     currentTime: Date;
//     setTime(d: Date);
// }
//
// class Clock implements ClockInterface {
//     currentTime: Date;
//     setTime(d: Date) {
//         this.currentTime = d;
//     }
//     constructor(h: number, m: number) { }
// }

// // Extending interfaces (interfaces extending to interfaces)
// interface Shape {
//     color: string;
// }
//
// interface Square extends Shape {
//     sideLength: number;
// }
//
// let square = <Square>{};
// square.color = "blue";
// square.sideLength = 10;

// //Hybrid types
// interface Counter {
//     (start: number): string;
//     interval: number;
//     reset(): void;
// }
//
// function getCounter(): Counter {
//     let counter = <Counter>function (start: number){};
//     counter.interval = 123;
//     counter.reset = function () { };
//     return counter;
// }
//
// let c = getCounter();
// c(10);
// c.reset();
// c.interval = 5.0;

// // Interfaces extending classes
// class Control {
//     private state: any;
// 	constructor(state: any){
// 		this.state = state;
// 	}
// }
//
// interface SelectableControl extends Control {
//     select(): void;
// }
//
// class Button extends Control implements SelectableControl {
// 	constructor(){
// 		super(1);
// 	}
//     select() {}
// }
// console.log(new Button)
