const myForm=document.querySelector('#my-form')
const nameInput=document.querySelector('#name')
const emailInput=document.querySelector('#email')
const msg=document.querySelector('.msg')
const userList=document.querySelector('#users')
const btn=document.querySelector('.btn')
const ul=document.querySelector('.items');

btn.addEventListener('click',onSubmit)

let deleteButton=document.createElement('button');
let editButton=document.createElement('button');
            
deleteButton.type='button';
deleteButton.innerHTML='DELETE';
deleteButton.className='delete';

editButton.type='button';
editButton.innerHTML='EDIT';
editButton.className='edit';

//myForm.addEventListener('click',onSubmit);

function onSubmit(e){
     e.preventDefault();
     if(nameInput.value==='' || emailInput.value===''){
         msg.innerHTML='please enter all fields';
         msg.style.background='orangered';
         setTimeout(()=> msg.innerHTML="",3000)
     }else{
         // const li=document.createElement('li');
         // li.appendChild(document.createTextNode(`${nameInput.value} : ${emailInput.value}`)); 
         // userList.appendChild(li);
 
         let my_obj={
            'name':nameInput.value,
            'email':emailInput.value
         }
         let obj=JSON.stringify(my_obj);
         
         localStorage.setItem(my_obj.email,obj);
         let keyArray=Object.keys(localStorage);

         let li;
         console.log(keyArray)
         for(let datakey of keyArray){
            let data=JSON.parse(localStorage[datakey]);
            li=document.createElement('li');
            li.appendChild(document.createTextNode(`${data.name}-${data.email}`));

            //createing buttons
            
            li.appendChild(deleteButton)
            li.appendChild(editButton)
         
            console.log(data)
         }
         ul.appendChild(li)
 
         
     }
     nameInput.value='';
     emailInput.value=''; 
 }
 window.addEventListener('DOMContentLoaded', (event) => {
    let keyArray=Object.keys(localStorage);
    console.log(keyArray)
    for(let datakey of keyArray){
       let data=JSON.parse(localStorage[datakey]);
       let li=document.createElement('li');
       li.appendChild(document.createTextNode(`${data.name}-${data.email}`));
       li.appendChild(deleteButton)
       li.appendChild(editButton)
       ul.appendChild(li);
       console.log(data)
    }
})
 
function removeItem(e){
   if(e.target.classList.contains('delete')){
       if(confirm("Are you Sure")){
           var li=e.target.parentElement;
           localStorage.removeItem(li);
           itemList.removeChild(li);
       }
   }
}
