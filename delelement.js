const list = document.querySelectorAll('li');

for(let lt of list)
{
    const newbut = document.createElement('button');
    newbut.textContent = 'X';
    newbut.className='delete';
    newbut.style.backgroundColor='red';
    newbut.style.float='right';

    lt.appendChild(newbut);
}

const form = document.getElementById('addform');
form.addEventListener('submit',addItem);

function addItem(e){
    e.preventDefault();
    let textVal = document.getElementById('textvalue');
    const listParent = document.getElementById('items');

    //Create New list
    const newlist = document.createElement('li');
    newlist.className='list-group-item';
    
    const txtnode = document.createTextNode(textVal.value);
    newlist.appendChild(txtnode);

    //Create Button
    const listButton = document.createElement('button');
    listButton.textContent='X';
    listButton.className='delete';
    listButton.style.backgroundColor='red';
    listButton.style.float='right';

    newlist.appendChild(listButton);

    //Create Edit Button
    const edibut = document.createElement('button');
    edibut.textContent="edit";
    edibut.style.backgroundColor='white';
    edibut.style.float='right';

    newlist.appendChild(edibut);

    //Add Item
    listParent.appendChild(newlist);

    textVal.value='';

    
}

const list1 = document.querySelectorAll('li');

for(let lt of list1)
{
    const edibut = document.createElement('button');
    edibut.textContent="edit";
    edibut.style.backgroundColor='white';
    edibut.style.float='right';

    lt.appendChild(edibut);
}

const dellist = document.getElementById('items');
dellist.addEventListener('click',delItem);
function delItem(e){
    if(e.target.classList.contains('delete')){
      if(confirm('Are you Sure?')){
      let parELe = e.target.parentElement;
      dellist.removeChild(parELe);
      }
    }

}

