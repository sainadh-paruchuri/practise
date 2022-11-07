

let second=document.querySelectorAll('li');
for(let i=0;i<second.length;i++){
    if(i==1){
        second[i].style.color='green';
    }
}
let odd=document.querySelectorAll('li:nth-child(odd');
for(let i=0;i<odd.length;i++){
    odd[i].style.background='green';
}

// querySelector selects only first query with same className
//querySelectorAll Selects all the querys with same classNames


