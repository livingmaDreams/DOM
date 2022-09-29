const form = document.getElementById('form');

form.addEventListener('submit',addList);

window.addEventListener("DOMContentLoaded",()=>{
    showList();
});

function showList()
{
    axios.get('https://crudcrud.com/api/8fa02a64a66145ab95114e148394ee40/appointments')
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
            let b =parentElement.firstChild.nodeValue;
            let url="https://crudcrud.com/api/8fa02a64a66145ab95114e148394ee40/appointments/";

            axios.get('https://crudcrud.com/api/8fa02a64a66145ab95114e148394ee40/appointments')
               .then((res) =>{
                     for(let a of res.data)
                     {
                        if(a.Amount == b){
                           url = url + a._id;
                           console.log(url);
                        }
                     }
                     axios.delete(url).then(res => console.log(res)).catch(err=> console.log(err));
            
                })
            .catch(err => console.log(err));
        }   

     }
}

function sendingList(obj){

    axios.post('https://crudcrud.com/api/8fa02a64a66145ab95114e148394ee40/appointments',obj)
    .then(res => console.log(res))
    .catch(err => console.log(err));

}




