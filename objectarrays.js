
let people = [{name:"scott",age:31,funny:false},{name:"Omer",age:35,funny:true},
{name:"Dan",age:22,funny:false}]

//find the funniest in our object Array using . filter

const funniestPerson = people.filter(person =>person.funny)
console.log(funniestPerson)

// //find the youngest in array above using filter

const youngestPerson = people.filter(person => person.age<25)

console.log(youngestPerson)

// // find who is not funny 
const notFunny = people.filter(person => !person.funny)
console.log(notFunny)

// use .foreach

const findAllPeople = people.forEach(person =>{
    console.log('name',person.name)
    console.log('age',person.age)
    console.log('funny',person.funny)
})
