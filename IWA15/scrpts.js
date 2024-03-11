const data = {
	lists: [
		['first', [15, 11, 13, 7, 5]],
		['second', [2, 6, 8, 4, 14, 12, 10]],
		['third', [9, 3, 1]],
	]
}

// Only edit below

/* Destructuring assignment to extract the arrays of numbers
 * Ignoring the first entries under the list array which is a label
 * Using shorthand to denote firstArray as firstA and the same for the other two
*/ 
const [,firstA] = data.lists[0];
const [,secondA] = data.lists[1]; 
const [,thirdA] = data.lists[2];

// checking that the three varaibles return the arrays as shown
console.log(firstA)
console.log(secondA)
console.log(thirdA)

const result = [];

// Initializing with let and not value so that a value can later be reassigned to it
let biggestValue;

const extractBiggest = () => {
  // Storing the last element of each array	
const firstAValue =  firstA[firstA.length - 1];
const secondAValue = secondA[secondA.length - 1];
const thirdAValue = thirdA[thirdA.length - 1];   

/* Using if - else if to determine which value is the biggest then assigning 
   it to biggestValue and removing that number from the array it comes from.
 * Checks that values are not undefined.  
 * The function returns biggestValue each time it is run.  
*/
  if (firstAValue !== undefined && (secondAValue === undefined || firstAValue > secondAValue) && (thirdAValue === undefined || firstAValue > thirdAValue)) {
	  biggestValue = firstAValue;
      firstA.pop();
	  } else if (secondAValue !== undefined && (firstAValue === undefined || secondAValue > firstAValue) && (thirdAValue === undefined || secondAValue > thirdAValue)) {
		biggestValue = secondAValue;
		secondA.pop();
	  } else if (thirdAValue !== undefined) {
		biggestValue = thirdAValue;
		thirdA.pop();
	  }
	
  return biggestValue;	
};

// Only edit above

result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())

result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())

result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())

console.log(result)