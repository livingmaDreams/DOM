const form = document.getElementById('form');

form.addEventListener('submit',addList);

showList();

function showList()
{
    axios.get('https://crudcrud.com/api/10c01c74b62c4805a8aefff32edf4979/appointments')
    .then(res =>{
        storageDisplay(res);
    })
    .catch(err => document.body.innerHTML = document.body.innerHTML + "<h4>Something went Wrong</h4>");
}

function storageDisplay(values)
{
    console.log(values);
    for(let a of values.data)
      createElement(a);
}

function addList(e)
{
    e.preventDefault();
    const expenseAmount = document.getElementById("amount");
    const description = document.getElementById("description");
    const category = document.getElementById("category");

    const obj = {
        Amount: expenseAmount.value,
        Description: description.value,
        Category: category.value
    }

    createElement(obj)
    sendingList(obj);

    expenseAmount.value='';
    description.value='';
    category.value='';

}

function createElement(value){
    const li = document.createElement('li');
    li.id="items";

    const amountTxt=document.createTextNode(value.Amount);
    const descTxt=document.createTextNode(value.Description);
    const categoryTxt=document.createTextNode(value.Category);

    li.append(amountTxt,"-",descTxt,"-",categoryTxt);     

    const editButton = document.createElement('button');
    editButton.className="edit-button";
    editButton.textContent="edit";
    
    const delButton = document.createElement('button');
    delButton.className="delete-button";
    delButton.textContent="delete";  
    

    li.appendChild(editButton);
    li.appendChild(delButton);

    const ListParent = document.getElementById("expense-List");
    ListParent.appendChild(li);

}


const expenseList= document.getElementById('expense-List');
expenseList.addEventListener('click',delList);

function delList(e)
{
    e.preventDefault();
    if(e.target.classList.contains('delete-button')){
        if(confirm('Are you Sure?'))
        {
            const parentElement = e.target.parentElement;
            expenseList.removeChild(parentElement);
        }
    }   


}

function sendingList(obj){

    axios.post('https://crudcrud.com/api/10c01c74b62c4805a8aefff32edf4979/appointments',obj)
    .then(res => console.log(res))
    .catch(err => console.log(err));

}




