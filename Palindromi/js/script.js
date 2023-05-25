let word = prompt('inserisci una parola')
console.log(word)

let arrayWord = word.split('')
console.log(arrayWord)

let arrayReverse = arrayWord.reverse()
console.log(arrayReverse)

let wordNew = arrayWord.join('')
console.log(wordNew)

if(word === wordNew){
    console.log('la parola è un palindromo')
}
else{
    console.log('la parola non è un palindromo')
}