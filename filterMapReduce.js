let food = [
{ item: "taco", id: 1, value: 3},
{ item: "burrito", id: 2, value: 8},
{ item: "fajitas", id: 3, value: 9},
{ item: "queso", id: 4, value: 5},
{ item: "quesadilla", id: 5, value: 5}]

let foodFilter = food.filter(f => f.value <= 5)
console.log('foodFilter:', foodFilter) 
//Food items for 5 and under: 
//[
//  { item: 'taco', id: 1, value: 3 },
//  { item: 'queso', id: 4, value: 5 },
//  { item: 'quesadilla', id: 5, value: 5 }
//]


let mapFilter = food.map(f => f.item)
console.log('mapFilter:', mapFilter)
//Food choices: 
//[ 'taco', 'burrito', 'fajitas', 'queso', 'quesadilla' ]

let reduceFilter = food.reduce((sum, i) => sum + i.value, 0)
console.log('reduceFilter:', reduceFilter)
//food items total
//30
