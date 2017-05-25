// //classes
// class Animal {
//     name: string;
//     constructor(theName: string) { this.name = theName; }
//     move(distanceInMeters: number = 0) {
//         console.log(`${this.name} moved ${distanceInMeters}m.`);
//     }
// }
//
// class Snake extends Animal {
//     constructor(name: string) { super(name); }
//     move(distanceInMeters = 5) {
//         console.log("Slithering...");
//         super.move(distanceInMeters);
//     }
// }
//
// class Horse extends Animal {
//     constructor(name: string) { super(name); }
//     move(distanceInMeters = 45) {
//         console.log("Galloping...");
//         super.move(distanceInMeters);
//     }
// }
//
// let sam = new Snake("Sammy the Python");
// let tom: Animal = new Horse("Tommy the Palomino");
//
// sam.move();
// tom.move(34);

// //access modifiers
// class Animal {
//     private name: string;
//     constructor(theName: string) { this.name = theName; }
// }
//
// class Rhino extends Animal {
//     constructor() { super("Rhino"); }
// }
//
// class Employee {
//     private name: string;
//     constructor(theName: string) { this.name = theName; }
// }
//
// let animal = new Animal("Goat");
// let rhino = new Rhino();
// let employee = new Employee("Bob");
//
// animal = rhino;
// animal = employee; // Error: 'Animal' and 'Employee' are not compatible

// //readonly and implicit definition through parameter
// class Octopus {
//     readonly numberOfLegs: number = 8;
//     constructor(public readonly name: any = 9) {
//     }
// }
// var oct = new Octopus('octy');
// console.log(oct.name);
// oct.name = 4;

//Accessors (getters & setters)
// let passcode = "secret passcode";
//
// class Employee {
//     private _fullName: string;
//
//     get fullName(): string {
//         return this._fullName;
//     }
//
//     set fullName(newName: string) {
//         if (passcode && passcode == "secret passcode") {
//             this._fullName = newName;
//         }
//         else {
//             console.log("Error: Unauthorized update of employee!");
//         }
//     }
// }
//
// let employee = new Employee();
// employee.fullName = "Bob Smith";
// if (employee.fullName) {
//     console.log(employee.fullName);
// }

// //Static properties
// class Grid {
// 	static _anny: any = 9;
//     static origin = {x: 0, y: 0};
//     calculateDistanceFromOrigin(point: {x: number; y: number;}) {
//         let xDist = (point.x - Grid.origin.x);
//         let yDist = (point.y - Grid.origin.y);
//         return Math.sqrt(xDist * xDist + yDist * yDist) / this.scale;
//     }
// 	static get orgn(): {x: number, y: number}{
// 		return this.origin;
// 	}
// 	static set orgn(obj:{x: number, y: number}){
// 		this.origin = obj
// 	}
// 	static get anything(): any{
// 		return 9
// 	}
// 	static set anything( a: any){
// 		this._anny = a;
// 	}
//     constructor (public scale: number) { }
// }
//
// let grid1 = new Grid(1.0);  // 1x scale
// let grid2 = new Grid(5.0);  // 5x scale

// // Abstract classes
// abstract class Department {
//
//     constructor(public name: string) {
//     }
//
//     printName(): void {
//         console.log("Department name: " + this.name);
//     }
//
//     abstract printMeeting(): void; // must be implemented in derived classes
// }
//
// class AccountingDepartment extends Department {
//
//     constructor() {
//         super("Accounting and Auditing"); // constructors in derived classes must call super()
//     }
//
//     printMeeting(): void {
//         console.log("The Accounting Department meets each Monday at 10am.");
//     }
//
//     generateReports(): void {
//         console.log("Generating accounting reports...");
//     }
// }
//
// let department: Department; // ok to create a reference to an abstract type
// department = new Department(); // error: cannot create an instance of an abstract class
// department = new AccountingDepartment(); // ok to create and assign a non-abstract subclass
// department.printName();
// department.printMeeting();
// department.generateReports(); // error: method doesn't exist on declared abstract type

//
