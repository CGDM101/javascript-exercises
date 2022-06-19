// ÖVNINGAR, 4, FUNKTIONER.

//1a läsövningar
function foo(){
	console.log("test");
}
foo("hej"); // "test" pga ger inga parametrar

// 1b
var a = foo(3);
console.log(a);
function foo(i){
	return i * i; // 9
}
// 1c forts
// 1d
// 1e
// 1f

// 2a
function add(tal1, tal2){
	return tal1 + tal2;
}

// 2b
function multi(tal1, tal2, tal3){
	return tal1 * tal2 * tal3;
}
//Vad händer om man anropar funktionen med färre än tre parametrar? - NaN!

// 2c
function myFunc(tal1, tal2, tal3, tal4){
	//return (tal1 * tal2 * tal3) + tal4;
	let multiSvar = multi(tal1, tal2, tal3);
	let addSvar = add(multiSvar, tal4);
	return addSvar;
}
let q = myFunc(1, 2, 3, 4)
console.log('2c:',q) // 10

// 3
function myFunction(name, city, favouriteColour){
	return `välkommen ${name} från ${city} med favoritfärg ${favouriteColour}`;
}
let myStr = myFunction("Camilla", "Göteborg", "blå");
console.log(myStr)

// 4
function anotherFunc(inputString){
	let s = Number(inputString);
	if(isNaN(s)){
		return inputString;
	} else{
		return s;
	}
}
let x = anotherFunc("101");
console.log(x);

// 5
function IsSameDatatype(param1, param2){
	if(typeof(param1) == typeof(param2)){
		return true;
	}
	else{
		return false;
	}
}

let svar = IsSameDatatype('topp', 'test');
let svar2 = IsSameDatatype(5, '5');
console.log(svar); // true
console.log(svar2); // false

// 6
function roundToTwoDecimals(tal){
	return tal.toFixed(2); // Avrundar t två decimaler.
}
let c = roundToTwoDecimals(10.2393939393);
console.log(c);

// 7
function paragraph(myParam){
	return '<p>' + myParam + '<p>'; // `<p>${myParam}<p>`
}
let result = paragraph('hej'); // <p>hej</p>
console.log(result);

// 8
function daysInMonth(myParam){
	if (myParam == 'jan' || myParam == 'mar'|| myParam == 'maj'|| myParam == 'jul'|| myParam == 'sept'|| myParam == 'okt'|| myParam == 'dec'){
		return 31;
	}
	else if (myParam == 'apr' ||myParam == 'jun' ||myParam == 'aug' ||myParam == 'nov'){
		return 30;
	}
	else{
		return 28;
	}
}
//let answer = daysInMonth("jun");
console.log(daysInMonth('feb'));

// 9
function returnThreeFirstCharacters(myString){ 
	return myString.substring(0, 3);
}
let d = returnThreeFirstCharacters('programmering');
console.log(d); // pro

// 10
function year(myDateString){
	return myDateString.substring(0, 4);
}
console.log(year("1997-04-14")); // 1997

// 11
function monthFunction(date){
	return date.substring(4, 6);
}
let month = monthFunction('19970414');

function dayFunction(date) {
	return date.substring(6, 8);
}
let day = dayFunction('19970414');

function daysBetweenFunction(first, second) {
	let dayReturnedFromFirst = dayFunction(first);
	let monthReturnedFromFirst = monthFunction(first); 
	let dayReturnedFromSecond = dayFunction(second);
	let monthReturnedFromSecond = monthFunction(second);

	let diffBoolMonth = false; // använder inte dessa två?
	let diffBoolDay = false;
	let diffInMonth = 0;
	if (monthReturnedFromFirst != monthReturnedFromSecond) {
		diffBoolMonth = true;
		diffInMonth = monthReturnedFromSecond - monthReturnedFromFirst;
	} 
	else if (monthReturnedFromFirst == monthReturnedFromSecond) {
		diffBoolMonth = false;
		diffInMonth = 0;
	}

	let diffInDay = 0;
	if (dayReturnedFromFirst != dayReturnedFromSecond) {
		diffBoolDay = true;
		diffInDay = dayReturnedFromSecond - dayReturnedFromFirst;
	}
	else if (dayReturnedFromFirst == dayReturnedFromSecond) {
		diffBoolDay = false;
		diffInDay = 0;
	}

	let totalDiff = 0;
	if (diffInMonth != 0){
		totalDiff = diffInDay + (diffInMonth * 30);
	}
	else if (diffInMonth == 0) {
		totalDiff = diffInDay;
	}
	return totalDiff;
}
let daysBetween = daysBetweenFunction('19970414','19970620'); // blir minus om inte tidiga datumet står först.
console.log('Dagar emellan de två datumen:',daysBetween);

// forsättning:
let myMonth = 0;
while (daysBetween > 0) {
	if (daysBetween > 30) {
		myMonth++;
		daysBetween -= 30;
	}
	if (daysBetween < 30) {
		break;
	}
}
console.log('...varav månader:',myMonth);
console.log('...och resterande dagar:', daysBetween);

// 12
function fahrenheitToCelsius(temp) {
	// c = (f - 32 * 5) / 9
	return ((temp - 32) * 5) / 9;
}
let celsius = fahrenheitToCelsius(100);
console.log('celsius',celsius);

// 13
function sumOneToHundred() {
	let heltal = 100; // ta bort denna om param
	for	(let i = heltal; i > 0; i--) {
		heltal += i;
	}
	return heltal;
}
let answer = sumOneToHundred();
console.log(answer); // 5150

// 14
function returnStringBackwards(stringToReturn) {
	let newString = '';
	for (let i = stringToReturn.length - 1; i >= 0; i--) {
		newString += stringToReturn[i];
	}
	return newString;
}
let returnedString = returnStringBackwards('paris');
console.log(returnedString);

// Version with using charAt()
function usingCharat(string){
	let first = string.charAt(0)
	let second = string.charAt(1)
	let third = string.charAt(2)
	let fourth = string.charAt(3)
	let fifth = string.charAt(4)
	let qwerty = fifth + fourth + third + second + first
	return qwerty
}
console.log(usingCharat('paris'))

// 15
function primtal(inputNumber) {
	if (inputNumber <= 1) {
		return false
	}
	else {
		for (i = 2; i < inputNumber; i++) {
			if (inputNumber % i == 0) {
				return false
			}	
		}
		return true
	}
}
console.log('is prim:',primtal(7))

// REKURSION
// 16
function factorial(tal) {
	let result = 1;
	for (i = 2; i <= tal; i++) {
		result *= i
	}
	return result
}
console.log('fakultet:',factorial(4))

// 17 wip
function factorialRecursively(tal) {

}

// 18 wip
function fibonacci(n) {
	let result = 0;
	for (i = 0; i < n; i++) {
		result = result + i
	}
}
console.log('fib',fibonacci(10))
// todo recursivley

// 19 wip
function stringBackwardsRecursively(string) {

}

// 20a wip
function sumRecursively(list) {

}

// 20b wip
function returnSmallestValueRecursively(list) {

}

// 21 wip
function changeBackgroundColourRecursively(colour, element) {

}

// 22 wip
function findTextInElement(element, string) {

}

// ÖVNINGAR, 5, LISTOR.

// 1a OBS! måste ha - 1 för att inte få 6. Har med inkl vs exkl att göra... Se 1b också!
function getRandomNumber(num1, num2){
let rand = Math.floor((Math.random() * (num2 - 1)) + num1);
return rand;
}
console.log(getRandomNumber(2, 5))

// 1b
function createListOfRandoms(lengthOfList, startNum, endNum){
	let list = []
	for (i = 0; i < lengthOfList; i++) {
		let rnd = Math.floor((Math.random() * (endNum - startNum)) +  startNum) // OBS minus startNum
		list.push(rnd)
	}
	return list
}
console.log(createListOfRandoms(50, 3, 45));

// 2a
function sumNumbersInList(myList){
	let sum = 0;
	myList.forEach(element => {
		sum += element;
	});
	return sum;
}
let qwe = sumNumbersInList([1, 2, 3]);
console.log(qwe);

// 2b
function averageOfNumbersInList(myList){
	let mean = 0;
	let sum = 0;
	myList.forEach(element => {
		sum += element;
	});
	mean = sum / myList.length;
	return mean;
}
console.log(averageOfNumbersInList([2, 4, 6, 2])); // 3.5

// 2c
function returnMaxValueOfList(myList){
	let highest = Math.max(myList[0], myList[1], myList[2]) // hårdkodat, fixa
	return highest
}
console.log(returnMaxValueOfList([20.5, -300, 10]));

// 3
function listHasWord(myList, myValue){
	if (myList.find(x => x == myValue)) {
		return true
	}
	else if (myList.find(x => x != myValue)) {
		return false
	}
}
let r = listHasWord(['hej','hello'], 'hej');
console.log(r); // true

// 4a refaktorera?
function mySplitFunction(string, separator){
	let myNewArray = [];
	let currentStart = 0;
	for (i = 0; i < string.length; i++) {
		let sub = string.substring(i, i + separator.length)
		if (sub == separator) {
			myNewArray.push(string.substring(currentStart, i))
			currentStart = i +separator.length
		}
		else {

		}
	}
	if (currentStart < string.length - 1) {
		myNewArray.push(string.substring(currentStart))
	}
	return myNewArray
}
console.log(mySplitFunction('my string', ' '));

// 4b
function capitaliseMyString(myString){
	let stringLength = myString.length // todo ta bort hårdkodningen
	let firstWord, secondWord, thirdWord, fourthWord

	let array = mySplitFunction(myString, ' ')
	for (i = 0; i < array.length; i++) {
		firstWord = array[0]
		secondWord = array[1]
		thirdWord = array[2]
		fourthWord = array[3]	
	}
	
	let newFirstWord = firstWord[0].toUpperCase() + firstWord.substring(1)
	let newSecondWord = secondWord[0].toUpperCase() + secondWord.substring(1)
	let newThirdWord = thirdWord[0].toUpperCase() + thirdWord.substring(1)
	let newFourthWord = fourthWord[0].toUpperCase() + fourthWord.substring(1)
	
	let newStringOfWords = newFirstWord + ' ' + newSecondWord + ' ' + newThirdWord + ' ' + newFourthWord
	return newStringOfWords
}
console.log(capitaliseMyString('detta är min sträng'))

// 5a wip
function printRectangle(myList, myNum) {
	for (i = 0; i <= myNum; i += 2) {
		console.log(myList[i], myList[i + 1], myList[i + 2])
	}
}
console.log(printRectangle([1, 2, 3, 4, 5, 6], 2))
console.log('slut övn 5a')
// 5b
// 6
// 7
// 8a
// 8b
// 9
// Bubble sort
// Merge sort

// ÖVNINGAR, 6, OBJEKT:

// 1
let myObject = {
	number : 1, // obs ej let här på de inre (props)
	string : 'hej',
	bool : true,
	myFunc() {},
	emptObj : {}
}

// 2
let objectContainingObject = { 
	objectWithin : { // obs man har inte let på de inre (props)
		innermostObjet : {}
	}
}

// 3
function makeBook(title, author, genres) {
	let object = { 
		title : title, // ?
		author : author,
		genres : genres
	}
	return object
}
let res = makeBook('titeln', 'författaren', ['horror', 'programming'])
console.log(res)

// 4
// 5
// 6
// 7
// 8
// 9
// 10
// 11
// 12
// 13

// json

// ÖVNINGAR, 7, HIGHER ORDER FUNCTIONS:
// 1 Skriv en arrow function som gör samma sak som följande funktion:
function vanlig(parameter) { return parameter; }

vanlig = (parameter) => {return parameter} // Är det bara en param kan () uteslutas.

// 2 
hey = (tal) => tal * 2

// 3
arrowCalculateMean = (tal1, tal2) =>
{
	return (tal1 + tal2) / 2 	// {} och return kan tas bort om en rad.	
}

// 4
whoo = () => 42

// 5
foo = (myString) => console.log(myString)

// 6
bar = (param) => param > 0 ? true : false

// {
// 	if (param > 0) return true
// 	else return false
// }

// 7
arrow = (tal) => tal ===  10 || tal === 12 ? true : false

// 8 WIP:
whoops = (param) => {
	return typeof param
} 

// 9 TODO:

// 10
let listA = [2, 4, 8, 16, 32, 64, 128, 256]
let listB = [10, 'b', -32, 'FF', 3.14, [], (x => x + 1), 'end']

listA.forEach(element => {
	console.log(element)
});

listB.forEach(element => {
	if (typeof element == 'string') {
		console.log(element)
	}
});

const myMap = listA.map(x => x - 1) // Minska alla med 1
myMap.forEach(element => {
	console.log(element)
});

const toString = listB.map(x => x + '') // Gör alla till sträng
toString.forEach(element => {
	console.log(element)
});

const allStringsAndNumbers = listB.filter(x => typeof x == 'string' || typeof x == 'number')
console.log(allStringsAndNumbers)

const firstLargerThan20 = listA.find(x => x > 20) // filter hade gett ALLA >20
console.log(firstLargerThan20)

initialValue = 0
const sum = listA.reduce(
	(previousValue, currentValue) => previousValue + currentValue, initialValue
)
console.log(sum)

let concatenateAllStrings = listB.filter(x => typeof x == 'string')
// WIP ska användas reduce
let newstr = ''
concatenateAllStrings.forEach(element => {
	newstr += element
});

// 11 todo