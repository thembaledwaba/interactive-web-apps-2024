const currentYear = new Date().getFullYear()

const holidays = {
    0: {
        id: 0,
        name: 'Day of Reconciliation',
        date: `16 December ${currentYear}`,
    },
    1: {
        id: 1,
        name: 'Workers Day',
        date: new Date(`1 April ${currentYear}`),
    },
    2: {
        id: 2,
        name: 'Day of Goodwill',
        date: new Date(`26 December ${currentYear}`),
    },
    3: {
        id: 3,
        name: 'New Year Day',
        date: new Date(`1 January ${currentYear}`),
    },
    4: {
        id: 4,
        name: 'Womens Day',
        date: new Date(`9 August ${currentYear}`),
    },
    5: {
        id: 5,
        name: 'Heritage Day',
        date: new Date(`24 September ${currentYear}`),
    },
    6: {
        id: 6,
        name: 'Christmas Day',
        date: new Date(`25 December ${currentYear} 13:25`),
    },
    7: {
        id: 7,
        name: 'Youth Day',
        date: new Date(`16 June ${currentYear}`),
    },
    8: {
        id: 8,
        name: 'Human Rights Day',
        date: new Date(`21 March ${currentYear}`)
    },
}

const christmas = 6
const futureId = 9

// Do not change code above this comment

//Checking whether an item has been assigned to the 9 key.
console.log(holidays[9] || 'ID 9 not created yet');

//Used the spread operator to create a copy of the object without affecting the original. 
const copied = {...holidays[6]};
copied.name = ('X-mas');           // fixed syntax error on changing the name in the object

/* Creating a new date object so as to not affect the old date 
 * Setting the time for the new date to midnight
 * Update the date property with the new Date object
*/ 
const correctDate = new Date(copied.date);
correctDate.setHours(0); 
correctDate.setMinutes(0);
copied.date = correctDate; 

//Verify that new date is earlier than the previous date.
isEarlier = copied.date < holidays[6].date;
console.log('New date is earlier:', isEarlier)
if (isEarlier) copied.date = correctDate

//Verify that the changes have taken effect
console.log('ID change:', holidays[6].id !== copied.id);
console.log('Name change:', holidays[6].name !== copied.name);
console.log('Date change:', holidays[6].date !== copied.date);

//Use new Date in the objects 
const firstHolidayTimestamp = Math.min(
    new Date(holidays[0].date).getTime(),
    new Date(holidays[1].date).getTime(),
    new Date(holidays[2].date).getTime(),
    new Date(holidays[3].date).getTime(),
    new Date(holidays[4].date).getTime(),
    new Date(holidays[5].date).getTime(),
    new Date(holidays[6].date).getTime(),
    new Date(holidays[7].date).getTime(),
    new Date(holidays[8].date).getTime(),
  ); 


const lastHolidayTimestamp = Math.max(
  new Date(holidays[0].date).getTime(),
  new Date(holidays[1].date).getTime(),
  new Date(holidays[2].date).getTime(),
  new Date(holidays[3].date).getTime(), 
  new Date(holidays[4].date).getTime(),
  new Date(holidays[5].date).getTime(),
  new Date(holidays[6].date).getTime(),
  new Date(holidays[7].date).getTime(),
  new Date(holidays[8].date).getTime(),
); 

/**
 * Change timestamps into date objects using new date
 */
const firstHolidayDate = new Date(firstHolidayTimestamp);
const lastHolidayDate = new Date(lastHolidayTimestamp);

// Add formatDate function to make the date more readible 
const formatDate = date => {
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Month is zero-based
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
};

const formattedCorrectDate = formatDate(correctDate);

const formattedFirstHolidayDate = formatDate(firstHolidayDate);
const formattedLastHolidayDate = formatDate(lastHolidayDate);


/**
 * fixed interpolation syntax
 */
console.log(`The first holiday in the year as date:`, formattedFirstHolidayDate );
console.log(`The last holiday in the year as date:`, formattedLastHolidayDate);

// Generate a random holiday date in the same format
const randomIndex = Math.floor(Math.random() * Object.keys(holidays).length);
const randomHoliday = holidays[randomIndex];
const randomHolidayDate = new Date(randomHoliday.date);



const formattedRandomHolidayDate = formatDate(randomHolidayDate);

console.log('A randomly selected holiday date in the same format:', formattedRandomHolidayDate);

