//get the sum of age group using .reduce
let ageGroup = [12,3,4,5]
const reduced = ageGroup.reduce((beg,end)=>{
    return beg +end;
});
console.log(reduced)

// find out how many fruits are in the basket

let basket = [oranges=7,potatoes=3,ginger=1,apples=3, snacks=2]
const reduceBasket = basket.reduce((first,last) =>{
    return first + last
})
console.log(`the total of my grocery items comes out to $${reduceBasket}`)


// find the total of snacks and apples
let basket1 = [oranges=7,potatoes=3,ginger=1,apples=3, snacks=2]
const snaxapples =  [2+3]
const myTotal = snaxapples.reduce((snacks,apples)=>{
return snacks+apples
})
console.log(`my snacks and apples in cart came out to $${myTotal}`)