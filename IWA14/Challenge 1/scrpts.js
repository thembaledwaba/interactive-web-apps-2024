firstName = 'John';
age = 35;
hobby = 'Coding';

// setting the parameter of the function as "parameter"
const logTwice = (parameter) => {
  console.log(parameter);
  console.log(parameter);
}

// Changed the function name to "message" as "hobby" already has a value
function message () {
  logTwice(`Hello, ${firstName} (${age}). I love ${hobby}!`) // Changed "name" to "firstName"
}

message() // Call the message function