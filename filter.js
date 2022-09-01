

//add description 

let decBox = document.createElement('input');
decBox.type='text';
decBox.id='description-box';
decBox.className='description';
decBox.style.height='35px';


let formList = document.querySelector('form .text-input');
let subButton = document.getElementById('submit');
formList.insertBefore(decBox,subButton);  

//filter
let searchButton = document.getElementById('filter');
let items = document.getElementById('items');

searchButton.addEventListener('keyup',filterItems)

function filterItems(e)
{
    e.preventDefault();
    let text = e.target.value.toLowerCase();
    let itemList = items.getElementsByTagName('li');
     
    Array.from(itemList).forEach(function(it){
        let itemName = it.firstChild.textContent;
        if(itemName.toLowerCase().indexOf(text) != -1)
        it.style.display='block';
        else
        it.style.display='none';
    }
    )

}

