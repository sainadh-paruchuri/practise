// let title=document.getElementById('header-title');
// title.style.borderBottom="2px solid black";

// let itemTitle=document.querySelector('.title');
// itemTitle.style.color='green';

let items=document.getElementsByClassName('list-group-item');
items[2].style.backgroundColor='green';

for(let i=0;i<items.length;i++){
items[i].style.fontWeight='bold';
}