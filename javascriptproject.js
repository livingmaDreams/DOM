const form = document.getElementById('form');

form.addEventListener('submit',addList);

window.addEventListener("DOMContentLoaded",()=>{
    showList();
});

function showList()
{
    axios.get('https://crudcrud.com/api/608e8e4319364826a3d4dad9cdea88aa/appointments')
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
    sendingList(obj);
    
    expenseAmount.value='';
    description.value='';
    category.value='';

}

function createElement(value){
    const li = document.createElement('li');
    li.id=value._id;

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
expenseList.addEventListener('click',updateDelist);

function updateDelist(e)
{
    e.preventDefault();
    if(e.target.classList.contains('delete-button')){
        if(confirm('Are you Sure?'))
        {
            const parentElement = e.target.parentElement;
            expenseList.removeChild(parentElement);
            let url="https://crudcrud.com/api/608e8e4319364826a3d4dad9cdea88aa/appointments/" +parentElement.id ;
            axios.delete(url).then(res => console.log(res)).catch(err=> console.log(err));

        }   

     }
     if(e.target.classList.contains('edit-button')){
        if(confirm('Are you Sure?'))
        {
            const parentElement = e.target.parentElement;
            editList(parentElement);
        }   

     }
}
function editList(parEle){
    const Amount = parEle.firstChild.nodeValue;
    const Description = parEle.childNodes[2].nodeValue;
    const Category = parEle.childNodes[4].nodeValue;

    document.getElementById("amount").value = Amount;
    document.getElementById("description").value = Description;
    document.getElementById("category").value = Category;
    
    expenseList.removeChild(parEle);

    let url="https://crudcrud.com/api/608e8e4319364826a3d4dad9cdea88aa/appointments/" + parEle.id ;
    axios.delete(url).then(res => console.log(res)).catch(err=> console.log(err));

    
}

function sendingList(obj){

    axios.post('https://crudcrud.com/api/608e8e4319364826a3d4dad9cdea88aa/appointments',obj)
    .then(res =>createElement(res.data))
    .catch(err => console.log(err));

}




