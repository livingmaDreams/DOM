 const parentList = document.querySelector('#items');
 console.log(parentList.parentElement); //Parent Element
 const parentList1 = document.querySelector('.list-group-item');
 console.log(parentList1.parentElement); // Parent Element
 console.log(parentList1.nextSibling);   // Next Sibling
 console.log(parentList1.nextElementSibling);   //Next Element Sibling
 const items = document.querySelector('.list-group');
 console.log(items.previousSibling);   // Previous Sibling
 console.log(items.previousElementSibling);   //Previous Element Sibling
 const childElement = document.querySelector('#items');
 console.log(childElement.lastElementChild);   //Last Element Child
 console.log(childElement.lastChild);          // Last Child
 console.log(childElement.firstElementChild);    // First Element CHild
 console.log(childElement.firstChild);           // First Child

 const newItem = document.createElement('li');  //Create Element
 newItem.className="list-group-item";
 newItem.textContent="Item 5";
 items.appendChild(newItem);    // Appendchild

 items.setAttribute('style','color:green');  //Set Attribute

 const newhead = document.createElement('h5');  //Create Element
 newhead.className="new-head-title";
 const textnod = document.createTextNode('Hello World');  // Create Text Node
 newhead.appendChild(textnod);
 const headerTitle = document.querySelector('header h1');
 const container = document.querySelector('header .container');
 container.insertBefore(newhead,headerTitle);

 const newItem1 = document.createElement('li');  //Create Element
 newItem1.className="list-group-item";
 newItem1.textContent="Hello World";
 childElement.insertBefore(newItem1,parentList1);
 



