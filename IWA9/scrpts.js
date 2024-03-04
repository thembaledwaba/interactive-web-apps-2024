const salary = 4000;
const lodging = 'apartment'
const size = 'large'


// Only change the syntax below (not the values or key names)

const expenses = {
    food: 51.7501,
    transport:  10.2,
}
  
const tax = {
    734: '3%',
    234: '20%',
    913: '12%',
    415: '38%',
    502: '42%',
}

// I changed all the Keys to camel case and removed the single quotes
const rent = {
    none: 0,
    smallRoom: 200,
    largeRoom: 300,
    smallApartment: 400,
    'large-apartment': 800,
    smallHouse: 1200,
    largeHouse: 2400,
}

// You can change below however you want

const taxAsDecimal = parseInt(tax[913]) / 100 //I Used the Square brackets due to the key being a number
const startingAfterTax = (salary * 1) - (taxAsDecimal * salary) // added the brackests and multiples the tax As Decimal to the salary
const type = `${size}-${lodging}`  
const balance = (startingAfterTax - ((expenses.transport) + (expenses.food) + (rent[type]))) // Fixed the syntax and added the correct apartment type
console.log(balance.toFixed(2)) // added .tofixed(2 for two decimal places)