/*  SEARCH FOR ALL IDs SELECTOR
This code will search throughout the document for all elements that have a custom IDs attribute defined.
Use the devtools of the browser and it prints the list of elements
*/

const idElements = document.querySelectorAll("*[custom-id]");
console.log(idElements);

/*  VALIDATE IF CERTAIN SELECTOR EXIST INTO THE DOM
 */

function assertSelector(selector) {
  const myElement = document.querySelector(selector);
  if (myElement) {
    console.log(`The selector ${selector} exists in the DOM`);
  } else {
    console.error(`The selector ${selector} not exists in the DOM`);
  }
}

/*  VALIDATE ARRAY SELECTORS EXIST INTO THE DOM
NOTE: To do this use the above function and...
 */

//Create the array elements
const selectors = ['#selectorExist1', '.selectorExist2', '#selectorNotExist1', '.selectorNotExist2'];

// Create 'for' method
for (let selector of selectors) {
    assertSelector(selector);
}