var form=document.getElementById('addForm');
var itemList=document.getElementById('items');

//form submit event
form.addEventListener('submit',addItem);
//Delete event
itemList.addEventListener('click',removeItem);

//add Item
function addItem(e){
    e.preventDefault();

    //Get input value
    var newItem=document.getElementById('input').value;

    //create new li element
    var li=document.createElement('li');
    //Add class
    li.className='list-group-item';
    //Add text node with input value
    li.appendChild(document.createTextNode(newItem));

    //create del button element
    var deleteButton=document.createElement('button');
    //Add classes to del btns
    deleteButton.className='btn btn-danger btn-sm float-right delete'

    //Append text
    deleteButton.appendChild(document.createTextNode('X'));

    //Edit button
    var editButton=document.createElement('button');
    //Add class
    editButton.className='btn btn-success btn-sm ml-1 float-right edit';
    //Add text
    editButton.appendChild(document.createTextNode('EDIT'));
    //Append button li
    
    li.appendChild(editButton);
    li.appendChild(deleteButton);

    itemList.appendChild(li);

}

function removeItem(e){
    if(e.target.classList.contains('delete')){
        if(confirm("Are you Sure")){
            var li=e.target.parentElement;
            itemList.removeChild(li);
        }
    }
}