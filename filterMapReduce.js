//just some filter/map/reduce 

var people = [
{ name: 'bill', age: 73},
{ name: 'mike', age: 55},
{name: 'caleb', age:30},
{name: 'susan', age: 60},
{name: 'taylor', age: 30}
]

//filter 

var result = people.filter(person => person.age === 30)
console.log(result)

//map

var names = [] 
for(var i=0; i < people.length; i++)
{
	names.push(people[i].names)
}
console.log(names)


var age = people.map(p => p.age)
console.log(age.sort())

var total = 0;

for(var i = 0; i < age.length; i++)
{
	total += age[i]
	//console.log(total)
}
console.log(total)

var total2 = age.reduce((sum, order) => sum + order, 0)
console.log(total2)


var newTest = people.map(n => n.name)
console.log(newTest)

var filTest = people.filter(n => n.age > 35)
console.log(filTest)

var redTest = filTest.reduce((sum, i) => sum + i.age, 0)
console.log(redTest)


let products = [
	{id: 1, price: 3},
	{id: 2, price: 2},
	{id: 3, price: 7},
	{id: 4, price: 5},
	{id: 5, price: 3},
	{id: 6, price: 1},
	{id: 7, price: 3}]

let mapProds = products.map(a => a.price)
console.log(mapProds)
 let sumProds = mapProds.reduce((sum, i) => sum + i, 0)
 console.log(sumProds)
 //todo use sum and i with reduce. read article and figure out reduce

 let finalReduce = products.reduce((sum, product) => sum + product.price, 0)
 console.log(finalReduce)
