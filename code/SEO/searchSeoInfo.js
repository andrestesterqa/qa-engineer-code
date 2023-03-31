/*
This code help you to retrieve the title and description meta tag content
of the current webpage and logs them to the console.

*/

function searchSeoInfo() {
    const title = document.title || '';
    const description = document.querySelector("meta[name='description']")?.content || '';
  
    console.log(`%cText of title tag: %c${title}`, 'color: blue; font-weight: bold;', 'color: black; font-weight: normal;');
    console.log(`%cText of description tag: %c${description}`, 'color: green; font-weight: bold;', 'color: black; font-weight: normal;');
  }

