
const add  = (a, b) => a + b; // Fixed syntax by adding brackets around the parameter of the function

const multiply = (a, b) => a * b; // Fixed syntax as before and also made the function carry out the purpose of the function

// this in this instance accesses the object(example1 or example2) listed below by hoisting
function internal() {
	const added = add(this.internal.a, this.internal.b);
	const multiplied = multiply(added, this.internal.c);
	console.log(multiplied);
}

// Not allowed to change below this

const example1 = {
	internal: {
		a: 2,
		b: 4,
		c: 8,
	},
	add,
	multiply,
  calculate: internal
}

const example2 = {
	internal: {
		a: 2,
		b: 2,
		c: 3,
	},
	add,
	multiply,
  calculate: internal
}

example1.calculate()
example2.calculate()