
let itemList=document.querySelector('#items');
//parentNode
itemList.parentNode.style.background='#ccc';
console.log(itemList.parentNode)

// parentElemnt

itemList.parentElement.style.background='red';

//childNode
console.log(itemList.childNode);

console.log(itemList.children);
itemList.children[1].style.color='pink';

//firstChild
console.log(itemList.firstChild);
console.log(itemList.firstElementChild);

//lastchild
console.log(itemList.lastChild);
console.log(itemList.lastElementChild);

//nextsibling

console.log(itemList.nextElementSibling);
console.log(itemList.nextSibling)

//previous sibling

console.log(itemList.previousSibling);
console.log(itemList.previousElementSibling);

let newDiv=document.createElement('div');

//add class
 newDiv.className='hello';

 //add id
 newDiv.id='hello1';

 //add attr
 newDiv.setAttribute('title','hello div')

 //create text
 let newText=document.createTextNode('Hello');
 newDiv.appendChild(newText);

 let container=document.querySelector('header .container');
 var h1=document.querySelector('header h1');
 container.insertBefore(newDiv,h1);

 let container1=document.querySelector('#main');

 container1.insertBefore(newDiv,itemList.children[0]);

 console.log(newDiv)




