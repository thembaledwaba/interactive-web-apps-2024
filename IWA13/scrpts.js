let state = 'idle'
let user = null
let calculated = '1'

// Only allowed to change below

// Fixed the syntax for the arrow function
const logCalc = () => { 
    const isString = typeof calculated === 'numerical-string'; // Inserted and strict equality operator 
    const calculatedAsNumber = isString ? calculated : parseInt(calculated); // Changed to parseInt
    calculated = calculatedAsNumber + 1; 
}

// Fixed the syntax for the arrow function
const calcUser = () => {
  logCalc (); // Added the brackets to call the function
  if (calculated > 2) user = 'John';
  if (calculated > 2) state = 'requesting';
  if (calculated > 3) state = 'idle';
}

// Fixed the syntax for the arrow function
const checkUser = () => {
	if (user && state === 'requesting') {
		console.log(`User: ${user} (${calculated})`)
	}
}

// Only allowed to change code above

checkUser()
calcUser()

checkUser()
calcUser()

checkUser()
calcUser()

checkUser()
calcUser()

checkUser()
calcUser()