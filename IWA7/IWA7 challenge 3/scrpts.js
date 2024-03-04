const leoName = 'Leo'
const leoSurname = 'Musvaire     '
const leoBalance = '-9394'

const sarahName = 'Sarah    '
const sarahSurname = 'Kleinhans'
const sarahBalance = '-4582.2'

const divider = '----------------------------------'

// Only change below this line

/* Sepearted Money Leo owd and Sarah owed
 * parseInt the balnces for both to make them numbers
 * multiplied them by -1 to make the numbers positive
*/ 
const leoOwed = parseFloat(leoBalance * -1);              //use parsefloat             
const sarahOwed = parseFloat(sarahBalance * -1);

// Added a trim to remove the spaces that existed
const leoAdjustedSurname = (leoSurname.trim());
const sarahAdjustedName = (sarahName.trim());

//fixed syntax errors: use of curly brackets and quotes 
const leo = `${leoName} ${leoAdjustedSurname} (Owed: R${leoOwed.toFixed(2)})`;
const sarah = `${sarahAdjustedName} ${sarahSurname} (Owed: R${sarahOwed.toFixed(2)})`;

//Add variable 
const owedTotal = (leoOwed + sarahOwed);

//Added the variables to be added to make up the total
const total = "Total amount owed: " + "R" + (owedTotal.toFixed(2));

//Added the \n to illustrate that we are going to the next line
const result = `${leo} \n ${sarah} \n \n ${divider} \n ${divider} \n ${total} 
\n ${divider}`;

console.log(result)

/* const thousands = parseInt(totalOwed / 1000)
const hundreds = totalOwed % 1000 */