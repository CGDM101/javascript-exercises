// ÖVNINGAR, 2, JAVASCRIPT: DATATYPER, VARIABLER, KONSOLLEN.

1 + 1 - 1 		// 1
1 + '1' - 1 	// 10
1 - '1' + '1' 	// '01'
typeof '1' 		// 'string'
0.1 + 0.2 		// 0.30000000000000004
1/0 			// Infinity
'anka' - 5 		// NaN
2 * NaN 		// NaN

// 1
typeof(1.01)                // 'number'
typeof('false')             // 'string'
typeof(null)                // 'object'
typeof(pancake)             // 'undefined'
typeof(1/0)                 // 'number'
typeof(false || true)       // 'boolean'
typeof("123" - 0)           // 'number'
typeof("1000"/10)           // 'number'
typeof(123.4 - ' ')         //'number'
typeof('5' + "0" / '2')     // 'string'
typeof('5' + "0" / '5' + 0) // 'string'
typeof('kalle' - 5)         // 'number'
typeof(true + true + false) // 'number'
typeof(5 && 8)              // 'number'
typeof(5 || 8)              // 'number'
typeof(!5)                  // 'boolean'
typeof(true && false || false && true) // 'boolean'
typeof(1 + 2 * 3 + 4 * 5 + 6) // 'number'
typeof(2 < 3)               // 'boolean'
typeof('två' < 'tre')       // 'boolean'
typeof(17 === '17')         // 'boolean'
typeof(17 === '17')         // 'boolean'
typeof(17.00000000000000000001 == 17) // 'boolean'
typeof(undefined || null || 0 || false || "foo") // 'string'

// 2
// Vilket värde kommer variabeln x att ha efter att respesktive kodrad har körts? 
/*
z = 5
z++
--z
z += 15
x = 8; y = 16; z = y - x // ()
x = 10; z = x++			// 10 (11 om man skriver  ++x i st f x++)
x = 2; y = 5; x = x + y; y = x + y; z = y; // 12?

console.log(x);
*/

// 3
//console.log("Vad heter du?")
/*const prompt = require('prompt-sync')()
let userName = prompt('Vad heter du?')
console.log(`welcome ${userName}`);*/

/*
// 4
const prompt2 = require('prompt-sync')()
let tal1 = prompt2("Skriv in tal 1: ");
let tal2 = prompt2("Skriv in tal 2: ")
tal1 = Number(tal1) // alt 1 (NumberConstructor)
tal2 = + tal2; 		// alt 2
//tal2 = tal2 - 0 	// alt 3


let sum = tal1 + tal2;
let diff = tal1 - tal2;
let prod = tal1 * tal2;
let quot = tal1 / tal2;
console.log("Summa: " + sum);
console.log("Differens: " + diff);
console.log("Produkt: " + prod);
console.log("Kvot: " + quot); 

// 5
const prompt3 = require('prompt-sync')()
let userInput = prompt3("Skriv in ett tal som du vill avrunda!");
console.log(Math.round(userInput)); // avrundar till heltal. (toFixed?)

// ÖVNING 3, KONTROLLSTRUKTURER OCH PROGRAMFLÖDE

// 1
const myPrompt = require('prompt-sync')()
let userPassword = myPrompt('Skriv in ett lösenord');
const correctPassword = 'abc123';
if (userPassword == correctPassword){
	console.log('Välkommen in!');
}
else {
	console.log('Fel lösenord, ge dig iväg!')
}

// 2
const pr = require('prompt-sync')()
let input = pr('Skriv in ett tal: ');
if (input < 100) console.log('Ditt tal är mindre än 100');
else if (input > 100) console.log('Ditt tal är större än 100');
else console.log('Du skrev in exakt 100!');


// 3
let userGuess;
const secretNumber = 27;
let p = require('prompt-sync')()
userGuess = p('Skriv in ett tal mellan 1 och 100: ');

while (userGuess != secretNumber){
	p = require('prompt-sync')()
	if (userGuess == secretNumber){
		console.log('rätt fr innan för while'); // denna körs inte 
	}
	if (userGuess < secretNumber) {
		userGuess = p('gissa högre!');
	}
	else {
		userGuess= p('gissa lägre!');
	} 
}console.log('rätt frpn utan för while') // denna körs

// 4
const promptQ = require('prompt-sync')()
let userMonth = promptQ('Månad: ')
let monthAsNumber = 0;

switch(userMonth){
	case 'jan':
	monthAsNumber = 1;
	break;
	case 'februari':
	monthAsNumber = 2;
	break;
	case 'mars':
	monthAsNumber = 3;
	break;
	case 'april':
	monthAsNumber = 4;
	break;
	case 'maj':
	monthAsNumber = 5;
	break;
	case 'juni':
	monthAsNumber = 6;
	break;
	case 'juli':
	monthAsNumber = 7;
	break;
	case 'augusti':
	monthAsNumber = 8;
	break;
	case 'september':
	monthAsNumber = 9;
	break;
	case 'oktober':
	monthAsNumber = 10;
	break;
	case 'november':
	monthAsNumber = 11;
	break;
	case 'december':
	monthAsNumber = 12;
	break;
}

console.log(userMonth, 'som månad:',monthAsNumber);

// 5
for (let i = 0; i < 17; i++){
	console.log(i);
}

// 6
let x = 65536;
while (x > 2){
	console.log(x);
	x /= 2;
}

// 7a
let promptZ = require('prompt-sync')();
let input = promptZ('skriv in sträng');
let myNewSentence ='';
while(input != '.'){
	input = promptZ('skriv in en till sträng');
	myNewSentence += input + ' ';
	if (input == '.'){
		break;
	}
}
console.log(myNewSentence);
let x = myNewSentence.substring(0, myNewSentence.length - 2); // Tar bort punkten (och sista mellanslaget).
console.log(x);

// 7b
for (let i = 20; i >= 2; i--){
	if (i % 2 == 0){
		console.log(i);
	}
}

// 8 fråga om denna
const promptY = require('prompt-sync')()
let userNumber = promptY('Skriv in ett tal: ');

// while(userNumber > 2){
// 	if (userNumber % 2 != 0){
// 		userNumber = (userNumber * 3) + 1;
// 		console.log('beräkning om talet var udda',userNumber)
// 	}
// 	else if (userNumber % 2 == 0){
// 		userNumber = userNumber / 2;
// 		console.log('beräkning om talet var jämnt',userNumber);
// 	}
// }

for(let i = userNumber; i > 2; i--){
	if (i % 2 != 0){
		i = (i * 3) + 1;	// 1 ska bli 4	
		console.log(i);

	}
	else if (i % 2 == 0){
		console.log(i);
		i = i / 2; 			// 2 ska bli 1
	}
}

*/

// 9a
let text = '';
for( let i=0; i<6; i++ ) {
    for( let j=0; j<8; j++ ) {
        if( (i + j) % 2 === 0)
            text += '#';
        else
            text += '.';
    }
    text += '\n';
}
console.log(text);

// 9b
let nioB = '';
for (let y = 0; y < 6; y++){
	for (let x = 0; x < 8; x++){
		if (x == 0){
			nioB += '#';
		}
		else {
			nioB += '.';
		}
	}
	nioB += '\n';
}
console.log(nioB);

// 9c
let nioC = '';
for (let y = 0; y < 6; y++){
	for (let x = 0; x < 8; x++){
		if (x == 0 && y == 0 || x == 1 && y == 1 || x == 2 && y == 2 || x == 3 && y == 3 || x == 4 && y == 4 || x == 5 && y == 5 || x == 6 && y == 6){
			nioC += '#';
		}
		else {
			nioC += '.';
		}
	}
	nioC += '\n';
}
console.log(nioC);

// 9d
let nioD = '';
for (let y = 0; y < 6; y++){
	for (let x = 0; x < 8; x++){
		if (x == 2 || x == 3 || x == 4){
			nioD += '#';
		}
		else {
			nioD += '.';
		}
	}
	nioD += '\n';
}
console.log(nioD);

// 9e
let nioE = '';
for (let y = 0; y < 6; y++) {
	for (let x = 0; x < 8; x++) {
		if (x == 2 || y == 2) { // obs x går neråt i programmering
			nioE += '#';
		}
		else {
			nioE += '.';
		}
	}
	nioE += '\n';
}
console.log(nioE);

// 9f
let nioF = '';
for (let y = 0; y < 6; y++) {
	for (let x = 0; x < 8; x++) {
		if ((x == 4) || ((x == 5 && y == 0) || (x == 3 && y == 2) || (x == 2 && y == 3) || (x == 1 && y == 4) || (x == 0 && y == 5))) {
		nioF += '#';
		}
		else {
			nioF += '.';
		}
	}
	nioF += '\n';
}
console.log(nioF);

// 9g
let  nioG = '';
for (y = 0; y < 6; y++) {
	for (x = 0; x < 8; x++) {
		if (x == 0 && y == 0 || x == 1 && y == 1 || x == 3 && y == 3 || x == 4 && y == 4 || x == 5 && y == 5 || x == 6 && y == 6  			|| x == 5 && y == 0 || x == 4 && y == 1 || x == 3 && y == 2 || x == 2 && y == 2 || x == 2 && y == 3 ||  x == 1 && y == 4 || x == 0 && y == 5  ) {
				nioG += '#';
			}
			else {
				nioG += '.';
			}
		}
	nioG += '\n';
}
console.log(nioG);

// 9h
let nioH = '';
for (y = 0; y < 6; y++) {
	for (x = 0; x < 8; x++) {
		if (x == 0 || x == 2 || x == 4 || x == 6) {
			nioH += '#';
		}
		else {
			nioH += '.';
		}
	}
	nioH += '\n';
}
console.log(nioH);

// 9i
let nioI = '';
for (y = 0; y < 6; y++) {
	for (x = 0; x < 8; x++) {
		if (y == 0 || y == 5 || x == 0 || x == 7     ||     (y == 2 && x == 2 || y == 2 && x == 3 ||y == 2 && x == 4 ||y == 2 && x == 5)    ||     (y == 3 && x == 2 || y == 3 && x == 3 || y == 3 && x == 4 || y == 3 && x == 5)) {
			nioH += '.';
		}
		else {
			nioH += '#';
		}
	}
	nioH += '\n';
}
console.log(nioH);

// 9j wip
let nioJ = '';
for (y = 0; y < 6; y++) {
	for (x = 0; x < 8; x++) {
		nioJ += '.#O';
		if (x < 7) {
			nioJ;
		}
		else {
			nioJ += '\n';
		}
	}
}
 console.log(nioJ);

 // 9k wip
 let nioK ='';
 for (y = 0; y < 6; y++) {
	for (x = 0; x < 8; x++) {
		if (y = 3 && (x >= 0 && x <= 8)) { // punktraden y 3
			nioK += '.';
		}
		else {
			nioK += '#';
		}
	}
	nioK += '\n';
 }
 console.log(nioK);

/*

9h	9i	9j	9k
#.#.#.#.	........	.#O.#O.#	..#..#..
#.#.#.#.	.######.	O.#O.#O.	..#..#..
#.#.#.#.	.#....#.	#O.#O.#O	..#..#..
#.#.#.#.	.#....#.	.#O.#O.#	........
#.#.#.#.	.######.	O.#O.#O.	.#.#.#.#
#.#.#.#.	........	#O.#O.#O	#.#.#.#.

*/