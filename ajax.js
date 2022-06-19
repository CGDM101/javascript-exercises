// chuck norris
const chuckNorrisUrl = 'https://api.chucknorris.io/jokes/random' // alternativ

const btn = document.querySelector('#my-button')
const resultsDiv = document.querySelector('.my-div')

btn.addEventListener('click', async () => {
	// Skicka http req till API:et,
	// vänta på att få svar från servern
	const response = await fetch(chuckNorrisUrl, { method: 'GET'})
// console.log(response)
	// Omvandla svaret till ett JS-objekt mha JSON
	const data = await response.json()
// console.log('api responsen', data)
	resultsDiv.innerText = data.value
})

// 1a Gör en webbsida med en <button> och en <div>. När användaren klickar på knappen ska du göra ett GET request till följande URL och lägga resultatet i div-elementet. URL: "https://forverkliga.se/JavaScript/api/simple.php"
const forverkligaUrl ='https://forverkliga.se/JavaScript/api/simple.php'
const btnForverkliga = document.querySelector('#button')
const resultsDivForverkliga = document.querySelector('.div')

btnForverkliga.addEventListener('click', async () => {
	const response = await fetch(newUrl, { method: 'GET'})
	const data = await response.json()
	resultsDivForverkliga.innerText = data.info //  data.message eller data.info
})

// 1b Prova att använda flera sätt att skicka request: fetch och axios i första hand, kanske även XMLHttpRequest och jQuery.ajax.
const axiosBtn = document.querySelector('axios-btn')
const xmlHttpRequestBtn = document.querySelector('xml-btn')
// resultsDivForverkliga är diven

// 2a  Ändra koden så att den använder en querystring som är "world", med samma URL.
const newUrl = 'http://forverkliga.se/JavaScript/api/simple.php?key=world'
const btn2a = document.querySelector('#button-2a')
const btn2b = document.querySelector('#button-2b')
const resultsDiv2 = document.querySelector('.div-2')

// 2b Omvandla resultatet från API:et till ett JavaScript-objekt och visa innehållet på webbsidan. Tips: använd JSON.parse.

// 3 Gör en webbsida som låter användaren skicka request till "database API". Dokumentation: https://forverkliga.se/JavaScript/api/api-db.php Man ska kunna lägga till ett nytt värde till databasen och hämta alla värden från databasen.

// 4  Ändra koden så att man kan ta bort värden från databasen.

// 5  Skapa en webbsida som använder https://api.adviceslip.com/, https://api.chucknorris.io/, http://quotesondesign.com/wp-json/posts, https://placekitten.com/ eller https://developers.giphy.com/docs/ för att göra ett AJAX request och uppdatera webbsidan med resultatet.

// 6 Skapa en webbsida som använder ett oberäkneligt API: https://forverkliga.se/JavaScript/api/unreliable.php. Ibland returnerar det en sträng i JSON-format, ibland bara ett felmeddelande. Tips: använd try/catch.

// 7 se känkar! Sunrise/sunset workshop! Sunset and sunrise times API, Get Lat Long from Address, positionstack 
// 7a  Använd API:et för att ta reda på när solen gick upp i Göteborg idag. Gör en webbsida med en <button>. Webbsidan ska visa tiden när man klickar på knappen.

// 7b  Låt användaren skriva in latitud och longitud i textfält. Använd dem när man klickar på knappen.

// 7c Låt användaren skriva in antingen lat+long eller en adress. Om man skriver in en adress, använd https://positionstack.com/ för att översätta adressen till latitud och longitud.

// 7d Spara resultat från tidigare sökningar i en lista.

// 8 Gör en webbapp som använder https://pokeapi.co/ för att visa information om Pokémons. Börja med att visa information om en specifik Pokémon - namn, bild och någon ytterligare egenskap. Lägg sedan till att man kan välja vilken Pokémon som ska visas.
const pokeUrl = 'https://pokeapi.co/api/v2/pokemon/ditto'
const pokeBtn = document.querySelector('#poke-button')
const pokeAbilities = document.querySelector('.poke-abilities')
const pokeName = document.querySelector('.poke-name')
const img = document.createElement('img')
img.src = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png'	

let pokeImage = document.querySelector('.poke-image') // obs när hårdkodad i .html!



pokeBtn.addEventListener('click', async () => {
	const response = await fetch(pokeUrl, { method: 'GET'})
	const data = await response.json()
console.log('hela json:',data) // debug
	pokeName.innerText = 'hans namn: ' + data.name

	let lengt =data.abilities.length //
	console.log('len', lengt) // 2 st
	pokeAbilities.innerText = data.name + ' har ' + lengt + ' abilites: ' + data.abilities[0].ability.name + ' ' + data.abilities[1].ability.name
	

	document.querySelector('.poke-image').appendChild(img) // Denna ska vara här, annars visas bilden redan från början!

	// obs bilden ska hämtas fr api:et inte url:
	console.log('bild', data.sprites.front_default) // funkar
})