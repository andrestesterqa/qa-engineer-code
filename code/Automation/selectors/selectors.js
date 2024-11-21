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

/*  VALIDATE IF CERTAIN SELECTOR EXIST INTO THE SHADOWROOT 
 */
function assertSelectorInShadowRoot(shadowHostSelector, selector) { 
  const shadowHost = document.querySelector(shadowHostSelector); // Corregido  
  if (shadowHost === null) {
      console.error(`The selector ${shadowHostSelector} not exists in the DOM`);
      return;
  }
  const shadowRoot = shadowHost.shadowRoot;  
  const shadowElement = shadowRoot.querySelector(selector);  

  if (shadowElement) {
      console.log(`The selector ${selector} exists in the shadow root of ${shadowHostSelector}`);
      console.log(shadowElement)
  } else {
      console.error(`The selector ${selector} not exists in the shadow root of ${shadowHostSelector}`);
  }
}

/*  VALIDATE IF CERTAIN SELECTOR EXIST INTO THE SHADOWROOT AND RETURN A LIST*/
function assertSelectorsInShadowRoot(shadowHostSelector) {   
  const shadowHost = document.querySelector(shadowHostSelector); // Seleccionamos el host  
  if (shadowHost === null) {  
      console.error(`El selector ${shadowHostSelector} no existe en el DOM`);  
      return [];  
  }  

  const shadowRoot = shadowHost.shadowRoot;  
  const elementsWithDataTestId = shadowRoot.querySelectorAll('[data-testid]'); // Seleccionamos todos los elementos con `data-testid`  

  if (elementsWithDataTestId.length > 0) {  
      console.log(`Se encontraron ${elementsWithDataTestId.length} elementos con data-testid en el shadow root de ${shadowHostSelector}`);  
      return Array.from(elementsWithDataTestId); // Convertimos a un array para devolver  
  } else {  
      console.error(`No se encontraron elementos con data-testid en el shadow root de ${shadowHostSelector}`);  
      return [];  
  }  
}
