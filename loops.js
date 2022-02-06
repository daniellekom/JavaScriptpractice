//alphabet a-j loop

let alphabet = ["a","b","c","d","e","f","g","h","i","j"]
function theAlphabet(){
for (let a=0; a<alphabet.length; a++)
 console.log(alphabet[a])}

theAlphabet()

console.log( '--------------------------------------')

//alphabet in decending order not a loop
let array = ["a","b","c","d","e","f","g","h","i","j"]
function theArray(){
    let array1 = array.reverse()
    console.log(array1)
}
theArray()

console.log('--------------------------------------')

// countdown from 5 to "brace yourselves!"
function countdown(){
    for (let b=5; b>0; b--)
    console.log(b);
    console.log('brace yourselves!!')
}
countdown()

console.log('--------------------------------------')

//write a for of loop to get the sqr numbers in array

let numbers = [3,5,7,9]
for (let sqr of numbers){
    console.log(Math.pow(sqr,2))
}

console.log('--------------------------------------')

//write a for of loop to get the sqr of the array

let mysquare = [9,12,31]

for (let sqr of mysquare){
    console.log(Math.pow(sqr,2))
}
console.log(`the numbers I squared are ${mysquare}`)

