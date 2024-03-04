// Selecting the root element with the attribute data-key equal to "order1".
const root1 = document.querySelector('[data-key="order1"]');

// Creating a subelement selection using the class that is a decendant of root and the other class under this element
const biscuits1 = root1.querySelector('.biscuits .count');
const donuts1 = root1.querySelector('.donuts .count');
const pancakes1 = root1.querySelector('.pancakes .count');
const status1 = root1.querySelector('.status dd');


// Selecting the root element with the attribute data-key equal to "order2".
const root2 = document.querySelector('[data-key="order2"]')

// Creating a subelement selection using the class that is a decendant of root and the other class under this element
const biscuits2 = root2.querySelector('.biscuits .count');
const donuts2 = root2.querySelector('.donuts .count');
const pancakes2 = root2.querySelector('.pancakes .count');
const status2 = root2.querySelector('.status dd');

// Selecting the root element with the attribute data-key equal to "order3".
const root3 = document.querySelector('[data-key="order3"]');

// Creating a subelement selection using the class that is a decendant of root and the other class under this element
const biscuits3 = root3.querySelector('.biscuits .count');
const donuts3 = root3.querySelector('.donuts .count');
const pancakes3 = root3.querySelector('.pancakes .count');
const status3 = root3.querySelector('.status dd');

// Retrieving data attribute using the data keys associated with the object that was created using it change the content 
biscuits1.textContent = root1.getAttribute('data-biscuits');
donuts1.textContent = root1.getAttribute('data-donuts');
pancakes1.textContent = root1.getAttribute('data-pancakes');

// Retrieving data attribute using an if statement to determine the text used to change the content 
status1.textContent = root1.getAttribute('data-delivered') === 'true' ? 'Delivered' : 'Pending';

// Retrieving data attribute using the data keys associated with the object that was created using it change the content 
biscuits2.textContent = root2.getAttribute('data-biscuits');
donuts2.textContent = root2.getAttribute('data-donuts');
pancakes2.textContent = root2.getAttribute('data-pancakes');

// Retrieving data attribute using an if statement to determine the text used to change the content
status2.textContent = root2.getAttribute('data-delivered') === 'true' ? 'Delivered' : 'Pending';

// Retrieving data attribute using the data keys associated with the object that was created using it change the content 
biscuits3.textContent = root3.getAttribute('data-biscuits');
donuts3.textContent = root3.getAttribute('data-donuts');
pancakes3.textContent = root3.getAttribute('data-pancakes');

// Retrieving data attribute using an if statement to determine the text used to change the content
status3.textContent = root3.getAttribute('data-delivered') === 'true' ? 'Delivered' : 'Pending';

