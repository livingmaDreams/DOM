const form = document.getElementById('form');

form.addEventListener('submit',addList);

showList();

function showList()
{
    axios.get('https://crudcrud.com/api/10c01c74b62c4805a8aefff32edf4979/appointments')
    .then(res => console.log(res))
    .catch(err => console.log(err));
}

function addList(e)
{
    e.preventDefault();
    const expenseAmount = document.getElementById("amount");
    const description = document.getElementById("description");
    const category = document.getElementById("category");

    const li = document.createElement('li');
    li.id="items";

    const amountTxt=document.createTextNode(expenseAmount.value);
    const descTxt=document.createTextNode(description.value);
    const categoryTxt=document.createTextNode(category.value);

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

    sendingList(expenseAmount.value,description.value,category.value);

    expenseAmount.value='';
    description.value='';
    category.value='';

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

function sendingList(a,b,c){

    const obj = {
        Amount: a,
        Description: b,
        Category: c
    };

    axios.post('https://crudcrud.com/api/10c01c74b62c4805a8aefff32edf4979/appointments',obj)
    .then(res => console.log(res))
    .catch(err => console.log(err));

}




