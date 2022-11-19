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

function addAmount(e){
    e.preventDefault();
    alert('Are you sure!')
    amount.innerHTML=input.value;
    remaining.innerHTML=Number(0);
    spent.innerHTML=Number(0);

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
    let userExpence={
        amount:expenseAmount.value,
        description:expenseDescription.value,
        choose:expenseChoose.value
    }
    
    ShowListExpense(userExpence);

}

}

function ShowListExpense(userExpence){
    console.log(userExpence);
    let li=document.createElement('li');
    let deleteButton=document.createElement('button');
    let editButton=document.createElement('button');
    console.log(userExpence.amount);

    li.id='list'
    deleteButton.className='delete'
    editButton.className='edit'

    li.appendChild(document.createTextNode(`${userExpence.amount}-${userExpence.description}-${userExpence.choose}`));
    deleteButton.appendChild(document.createTextNode('DELETE'));
    editButton.appendChild(document.createTextNode('EDIT'));

    li.appendChild(deleteButton);
    li.appendChild(editButton);
    ul.appendChild(li);

}



