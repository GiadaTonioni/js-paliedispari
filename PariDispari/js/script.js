let scelta = prompt('digita la tua scelta: pari o dispari?')

function sommaNumeri(a,b) {
	let somma = a + b;
	return somma;
}

function generateRandomNumber(min, max) {
	return(Math.floor(Math.random() * (max - min + 1) + min));
}

let numUtente = parseInt(prompt('Inserisci un numero da 1 a 5'));

while(numUtente > 5) {
	numUtente = parseInt(prompt("Inserisci un numero corretto"))
}
console.log(numUtente)

let numPC= generateRandomNumber(1, 5)
console.log(numPC)

let risultato = sommaNumeri(numUtente,numPC);     
console.log(risultato)


function pariOdispari(number) {
	if(number % 2 === 0) {
		return "pari";
	}
	else {
		return "dispari";
    }
}

if(pariOdispari(risultato) === scelta){
	console.log('Hai vinto')
}
else{
	console.log('Hai perso')
}

    








