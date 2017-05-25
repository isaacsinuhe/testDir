// // named function
// function add(x: number, y: number): number{
// 	return x + y;
// }
// // anon function
// let myAdd =
// function (x: number, y: number): number{
// 	return x + y
// }

// // optional parameter
// function buildName(firstName: string, lastName = "Smith") {
//     return firstName + " " + lastName;
// }
//
// let result1 = buildName("Bob");                  // works correctly now, returns "Bob Smith"
// let result2 = buildName("Bob", undefined);       // still works, also returns "Bob Smith"
// let result3 = buildName("Bob", "Adams", "Sr.");  // error, too many parameters
// let result4 = buildName("Bob", "Adams");         // ah, just right

// // rest parameters
// function buildName(firstName: string, ...restOfName: string[]) {
//     return firstName + " " + restOfName.join(" ");
// }
//
// let employeeName = buildName("Joseph", "Samuel", "Lucas", "MacKinzie");

// // this and arrow functs
// interface Card {
// 	suit: string;
// 	card: number;
// }
// interface Deck {
// 	suits: string[];
// 	cards: number[];
// 	createCardPicker(this: Deck): () => Card;
// }
// let deck = {
//     suits: ["hearts", "spades", "clubs", "diamonds"],
//     cards: Array(52),
//     createCardPicker: function() {
//         return function() {
//             let pickedCard = Math.floor(Math.random() * 52);
//             let pickedSuit = Math.floor(pickedCard / 13);
//
//             return {suit: this.suits[pickedSuit], card: pickedCard % 13};
//         }
//     }
// }
// let cardPicker = deck.createCardPicker();
// let pickedCard = cardPicker();
// console.log("card: " + pickedCard.card + " of " + pickedCard.suit);
