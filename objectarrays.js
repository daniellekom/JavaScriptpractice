
let people = [{name:"scott",age:31,funny:false},{name:"Omer",age:35,funny:true},
{name:"Dan",age:22,funny:false}]

// find the funniest in our object Array using . filter

const funniestPerson = people.filter(person =>person.funny)
console.log(funniestPerson)

//find the youngest in array above using filter

const youngestPerson = people.filter(person => person.age<25)

console.log(youngestPerson)

//find who is not funny 
const notFunny = people.filter(person => !person.funny)
console.log(notFunny)

// use .foreach to find everyones info

const findAllPeople = people.forEach(person =>{
    console.log('name',person.name)
    console.log('age',person.age)
    console.log('funny',person.funny)
})
console.log('-------------------------------------------------------------------------------------------')


// use .map to add info for people

const addInfo = people.map(person =>({name:person.name,
    school:'broward',areFriends: true}))
    console.log(addInfo)

console.log('-------------------------------------------------------------------------------------------')

//find out info about clients
const customers =[{customerid:1, frequentShopper:true, emailOnFile:true, ccOnFile:false, age:26,favProduct:"lipstick"},
  {customerid:2 ,frequentShopper:true ,emailOnFile:false ,ccOnFile:false,age:21,favProduct:"concealer"},
  {customerid:3 ,frequentShopper:true ,emailOnFile:true, ccOnFile:false,age:38,favProduct:"foundation"},
  {customerid:4 ,frequentShopper:false, emailOnFile:false, ccOnFile:false,age:65,favProduct:"lipstick"}]
 
  console.log('-------------------------------------------------------------------------------------------')


// //use .splice to update fav product for customer 1



console.log('-------------------------------------------------------------------------------------------')


  //use filter to find all shoppers w email on file to send promotions

  const customerEmails = customers.filter(customer => customer.emailOnFile)
  console.log(customerEmails)

  console.log('-------------------------------------------------------------------------------------------')

  //use filter to find clients over 50

  const customerAge = customers.filter(customer => customer.age >50)
  console.log(customerAge)

  console.log('-------------------------------------------------------------------------------------------')

//use foreach to find fav products of each customer
const changeProduct = customers.forEach(customer => {
    console.log('customerId',customer.customerid)
    console.log('favProduct' ,customer.favProduct)
})

console.log('-------------------------------------------------------------------------------------------')

//use filter to find out who doesnt have an email w us

const noEmails = customers.filter(customer => !customer.emailOnFile)
console.log(noEmails)

//use foreach to list id of customers with ages

const idOfCustomers = customers.forEach(customer=> {
console.log('customerid',customer.customerid)
console.log('customers ages',customer.age)
})
