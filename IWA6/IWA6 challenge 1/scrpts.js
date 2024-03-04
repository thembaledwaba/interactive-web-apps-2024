const primaryPhone = 'O748105141'
const secondaryPhone = '0219131568'

// Only change below this line

const primaryValid = typeof number === parseInt(primaryPhone);      // added one more equals sign
const secondaryValid = typeof number === parseInt(secondaryPhone);  // made the statement a negative

console.log('Primary phone is valid numerical string:', primaryValid);
console.log('Secondary phone is valid numerical string:', secondaryValid);

/*
.isNaN(parseInt(stringVal)
)
!Number*/