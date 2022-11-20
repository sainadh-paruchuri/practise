let input=document.getElementById('input1');
let amount=document.getElementById('amount');
let subButton=document.getElementById('submit');
let remaining=document.getElementById('remaining');
let spent=document.getElementById('spent');

//form
let expenseAmount=document.getElementById('number');
let expenseDescription=document.getElementById('description');
let expenseChoose=document.getElementById('choose');
let expenseButton=document.getElementById('submitExpense');
let ul=document.getElementById('unlist');

subButton.addEventListener('click',addAmount);
expenseButton.addEventListener('click',addExpence);
ul.addEventListener('click',deleteUser);
ul.addEventListener('click',editUser);

function addAmount(e){
    e.preventDefault();
    alert('Are you sure!')
    amount.innerHTML=Number(input.value);
    remaining.innerHTML=Number(input.value);

    input.value='';
}

function addExpence(event){
    event.preventDefault();
    if(expenseAmount.value==='' || expenseDescription.value==='' || expenseChoose.value===''){
        document.getElementById('msg').innerHTML='please fill all';
        document.getElementById('msg').style.color='red';

        setTimeout(()=>{
            document.getElementById('msg').innerHTML='';
        },3000);

    }
    else{
        remaining.innerHTML=remaining.innerHTML-Number(expenseAmount.value);
        spent.innerHTML=Number(spent.innerHTML)+Number(expenseAmount.value);
    let userExpence={
        amount:expenseAmount.value,
        description:expenseDescription.value,
        choose:expenseChoose.value
    }
    axios.post("https://crudcrud.com/api/bb9ccc62956143d6a7f50a755324d5eb/expenseData",userExpence)
            .then((response)=>{
                ShowListExpense(response.data)
                console.log(response.data)
            })
            .catch((err)=>{
                console.log(err);
    })
    expenseAmount.value='';
    expenseDescription.value='';
    expenseChoose.value='';

}
}

function ShowListExpense(userExpence){    
    const children=`<li id="${userExpence._id}"> <h4 id="eamount">${userExpence.amount}</h4><h4 id="ediscription">${userExpence.description}</h4><h4 id="echoose">${userExpence.choose}</h4> <button class="delete">DELETE</button><button class="edit">EDIT</button></li>`
    ul.innerHTML+=children;  
}

window.addEventListener('DOMContentLoaded',(event)=>{

    axios.get("https://crudcrud.com/api/bb9ccc62956143d6a7f50a755324d5eb/expenseData")
    .then((response)=>{
        response.data.forEach(element => {
            ShowListExpense(element);
        });
        
        console.log(response);
    })
    .catch((err)=>{
        console.log(err);
    })
 })

 function deleteUser(e){
    if(e.target.classList.contains('delete')){
        let id=e.target.parentElement.id;
        console.log(id);
        axios.delete(`https://crudcrud.com/api/bb9ccc62956143d6a7f50a755324d5eb/expenseData/${id}`)
        .then((response)=>{
            window.location.reload;
            console.log(response);
        })
        .catch((err)=>{
            console.log(err);
        })
        let li=e.target.parentElement;
        ul.removeChild(li);

    }
}


function editUser(e){
    if(e.target.classList.contains('edit')){
   let id =e.target.parentElement.id;
   console.log(id);
   console.log(e.target.parentElement.id.nextElementSibling)
   axios.get(`https://crudcrud.com/api/bb9ccc62956143d6a7f50a755324d5eb/expenseData/${id}`)
           .then((response)=>{
                    expenseAmount.value=response.data.amount;
                    expenseDescription.value=response.data.description;
                    expenseChoose.value=response.data.choose;
            })      
            axios.delete(`https://crudcrud.com/api/bb9ccc62956143d6a7f50a755324d5eb/expenseData/${id}`) 
            let li=e.target.parentElement;
            ul.removeChild(li);    
    }
}

