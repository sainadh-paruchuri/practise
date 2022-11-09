const myForm=document.querySelector('#my-form')
const nameInput=document.querySelector('#name')
const emailInput=document.querySelector('#email')
const msg=document.querySelector('.msg')
const userList=document.querySelector('#users')
const btn=document.querySelector('.btn')

btn.addEventListener('click',onSubmit)


//myForm.addEventListener('click',onSubmit);

let count=1;
function onSubmit(e){
     e.preventDefault();
     if(nameInput.value==='' || emailInput.value===''){
         msg.innerHTML='please enter all fields';
         msg.style.background='orangered';
         setTimeout(()=> msg.innerHTML="",3000)
     }else{
         const li=document.createElement('li');
         li.appendChild(document.createTextNode(`${nameInput.value} : ${emailInput.value}`)); 
         userList.appendChild(li);
 
         //clear the fields
         localStorage.setItem(count,`${nameInput.value} : ${emailInput.value}`);
         count++;
 
         
     }
     nameInput.value='';
     emailInput.value=''; 
 }
 