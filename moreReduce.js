//using data.txt
var fs = require('fs')
var output = fs.readFileSync('data.txt', 'utf8')
.replace(/\r/g,'')// replace will only replace first occurance of \r unless you surround it with / /g
.split('\n')
.map(line =>line.split('\t'))
.reduce((customers, line) => {
	customers[line[0]] = customers[line[0]] || [],
	customers[line[0]].push({
		name: line[1],
		price: line[2],
		quantity: line[3]
	})
	return customers
}, {})
//reduce takes two arguments, first it takes a function, 
//second it takes a staring object (ex: 0) this time we will pass it an object
//the function we pass to reduce wants two arguments
//first is the object that we are constructing (the end goal)
//the second object is the thing we are iterating (the line in this case)

console.log('output', JSON.stringify(output, null, 2))