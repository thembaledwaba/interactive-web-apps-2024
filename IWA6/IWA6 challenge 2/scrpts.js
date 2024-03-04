const rent = 400;
const tax = '8%';
const food = 51.7501;
const salary = 800;
const transport = 10.2;
const hourOfDay = 00;
const minuteOfDay = 00;

// Only change below this line

/* assigned all the variables,
 * changed the numerical strings to numbers using parseInt,
 * deducted tax as a percent of the salara from the salary,
*/

const taxAsDecimal = parseInt(tax) / parseInt('100');
const startingAfterTax = (salary * 1) - (taxAsDecimal * salary);
const balance = (startingAfterTax - transport - food - rent);

if ((hourOfDay === null) && (minuteOfDay === null)){
balance = undefined                                         //added a return of undefined if variables are null
} else
if ((hourOfDay === parseInt('00')) && (minuteOfDay === parseInt('00'))) {
    console.log(balance.toFixed(2))                         // changed .toFixed(3) to .toFixed(2)
}
	
