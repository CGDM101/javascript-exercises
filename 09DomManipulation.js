// ÖVNINGAR, 8, DOM-MANIPULERING

// -1 (events, sida 16)
function add() {
	let newelem = document.createElement('li')
	let ul = document.querySelector('ul')
	newelem.innerText='1'
	ul.appendChild(newelem)
}
// gör den med event listener i stället!

function remove() {
	let elemToRemove = document.querySelector('li')
	elemToRemove.innerHTML='' // tar inte bort!!
	// ul.remove(elemToRemove)
}

// 0 (skapa element, sida 12)
let myBody = document.createElement('body')
let myH1 = document.createElement('h1')
let mySection = document.createElement('section')
let myP = document.createElement('p')
let myButton = document.createElement('button')

mySection.appendChild(myP)
myBody.appendChild(mySection)
myBody.appendChild(myH1)
myBody.appendChild(myButton)

myH1.innerText= 'Manipulera DOM'
myP.innerText='Detta element har skapats dynamiskt'
myButton.disabled.innerText='oklickbar (för tillfället)'

// 1 Skapa en sida med en div. Ge div-elementet ett id. När sidan laddas ska du byta textinnehållet till något annat med hjälp av JavaScript och egenskapen innerHTML.
let myElementToBeChanged = document.querySelector('#my-id')
myElementToBeChanged.addEventListener('load', event => {
	myElementToBeChanged.innerHTML = "ny text" // FUNKAR INTE
})

// 2 Skapa en sida med ett button-element och en lista. (ul eller ol) När man klickar på knappen ska det läggas till ett nytt li-element sist i listan med hjälp av appendChild. Ge button-elementet och listan varsitt id.
let btn = document.querySelector('#button-id');
let ul = document.querySelector('#list-id');
let newLi = document.createElement('li')

btn.addEventListener('click', event => {
	// console.log('du klickade') se loggen f antal ggr!
	ul.appendChild(newLi)
})

// 3  Skapa ett button-element med ett id och flera div-element som har samma CSS-klass. Skriv CSS för klassen. Gör så att alla div-element byter värde på innerHTML när man klickar på knappen. Använd document.getElementsByClassName.
// Utöka exemplet så att när man klickar på knappen nästa gång ska den byta tillbaka värdet.
let allDivs = document.getElementsByClassName('myDivClass');
let button = document.getElementById('myButton');
button.addEventListener('click', event =>{
	allDivs.forEach(element => {
		element.innerHTML='nytt innehåll';		
	});
}) 

// 4a  Skapa ett button-element som har ett id och en CSS-klass. När man klickar på knappen ska den byta till en annan CSS-klass.

// 4b Om man klickar en gång till ska knappen byta tillbaka till CSS-klassen den hade först.

// 5 Skapa ett button-element och flera section-element. När man klickar på knappen ska alla section-element byta CSS-klass, men du får inte använda id eller class på section-elementen. Använd getElementsByTagName.

// 6 Skapa ett button-element, en div och en lista med ul eller ol som har minst två element. När man klickar på knappen ska du skriva ut saker till div-elementet. (Alltså göra så att text läggs till inuti div-elementet.) Först ska du skriva ut hur många childNodes listan har. Skriv sedan ut vad varje "child node"-objekt har för värde på egenskapen nodeName. Poängen är att du ska jämföra egenskaperna children och childNodes och försöka upptäcka hur de skiljer sig åt.
// Utöka funktionen så att den lägger till ett utropstecken sist på varje li-element.

// 7a Skapa en sida med ett button-element och ett annat element. Båda ska ha id. När man klickar på knappen ska det andra elementet tas bort. (inte göras osynligt, använd element.removeChild)

// 7b Utöka exemplet så att ett nytt element med samma id och textinnehåll som det borttagna läggs till på sidan, om man klickar en gång till på knappen.

// 8  Skapa en sida med ett button-element och två listor med flera element i den första. När man klickar på knappen ska det första li-elementet i den första listan flyttas till den andra listan. Tips: skapa en funktion som returnerar det första li-elementet i en html-lista.

// ÖVNINGAR, 9, EVENTS.

// 1 Skapa en funktion som körs när HTML-dokumentet har laddats klart. Funktionen ska ändra textinnehåll på ett valfritt element på webbsidan. Du ska använda defer. (se intro till förra kapitlet)

// 2 Skapa en HTML-sida med en button och ett div-element. Skapa en funktion som ska användas för att prenumerera på events. När funktionen anropas ska du skriva ut event.type och event.target till div-elementet. Samma funktion ska prenumerera både på sidans load-event och knappens klick-event.

// 3a Gör en sida med två knappar. På den ena ska det stå "+1" och på den andra "-1". Sidan ska också visa ett tal. När man klickar på +1 respektive -1 ska talet ändras. Talet ska finnas i en global variabel som heter counterState.

// 3b Gör en sida med två knappar. På den ena ska det stå "Start" och på den andra "Stopp". Stopp-knappen ska vara inaktiverad, använd element.disabled=true När man klickar på Start ska start-knappen inaktiveras och stopp-knappen aktiveras. När man klickar på Stopp ska det bli tvärtom.

// 4 Gör en sida som har en kryssruta med en label. När man klickar på label-elementet och kryssrutan blir ifylld ska ett annat element på sidan bli synligt. När man klickar igen ska elementet bli osynligt. Använd element.style.display för att göra saker synliga och osynliga. Använd absolut positionering för att undvika att de elementen som kommer efter byter plats när man togglar kryssrutan.

// 5 Gör en sida med "flikar". Ett system med flikar är när man har två eller flera element (använd div) som finns på samma plats på sidan, men bara ett är synligt åt gången. Det ska finnas knappar eller andra element (minst ett per div) som man klickar på för att göra motsvarande element synligt.

// 6 Gör en sida med element som ändrar för- eller bakgrundsfärg när musen rör sig över dem. Använd CSS-klasser och mouseenter och mouseleave events.

// 7 [utmaning] Gör ett element som ändrar storlek på texten inuti sig när muspekaren befinner sig över elementet, utan att hela elementet tar större plats. Det går att göra med bara CSS, men här ska du använda mouse events.

// 8 Gör en sida med ett textfält. När användaren håller nere en tangent ska du skriva ut i en div vilka knappar som hålls nere. Vilka events ska man använda? Tips: googla på MDN keyevent.

// 9 Gör ett textfält som validerar tal. När textfältet tappar fokus ska du kontrollera om texten i textfältet är ett giltigt tal. Du ska skriva ut resultatet i ett annat element som ligger i anslutning till textfältet, med grön text om det är ett giltigt tal och röd text annars.

// 10 Gör ett textfält som gör om texten medan man skriver, så att den gör om små bokstäver till stora. Använd keydown eller keypress event.

// 11 Poängen med den här uppgiften är att träna på att lägga till och ta bort event listeners.
// Skapa en sida med två knappar och kryssrutor. Kryssrutorna ska vara bredvid varsin knapp, vara okryssade och ha texten "Event off". När man klickar på en kryssruta så att den blir ikryssad ska det läggas till en event listener på knappen bredvid, som lyssnar på klickhändelser. När man sedan klickar på knappen ska den ändra CSS-klass på något element på sidan. Byt även namn på kryssrutan.
// Om användaren klickar igen på en kryssruta, för att ta bort krysset, så ska event listener på knappen tas bort.Tips 1: Använd en label, så man kan klicka på kryssrutans text. Tips 2: Spara funktionerna som ska kopplas till knappens klickhändelse i variabler, annars kan du inte ta bort dem när du väl lagt till dem.

// 12 Skapa en sida med två kryssrutor. Idén är att det bara ska gå att kryssa i den ena rutan. Från början ska båda rutorna vara okryssade. När man klickar på den ena rutan ska den kryssas i om båda kryssrutorna är okryssade. Men om den andra rutan är ikryssad så ska klickhändelsen avbrytas med funktionen event.preventDefault. Visa gärna ett felmeddelande på sidan.

// 13 Skapa flera olika element med samma CSS-klass. Lägg till en funktion som lyssnar på klickhändelser på alla, utan att använda getElementById. Det ska alltså vara samma funktion för alla elementen. Funktionen ska byta bakgrundsfärg på det klickade elementet, med hjälp av event.target. Tips: använd parametern event.