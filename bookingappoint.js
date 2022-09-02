const btn= document.querySelector('#submit');
const form = document.querySelector('#myform');
const nameInput = document.querySelector('#name');
const mail = document.querySelector('#email');
const phone = document.querySelector('#phone');
const date = document.querySelector('#date');
const time = document.querySelector('#time');
const body = document.querySelector('body');

// Appointment tag creation 
const appoint_div = document.createElement('div');
appoint_div.className='appointment-list';
appoint_div.style.textAlign = 'center';
appoint_div.style.paddingTop = '1%';
body.appendChild(appoint_div);
const appoint_header = document.createElement('label');
appoint_header.className='appointment-header';
appoint_header.textContent='Fixed Appointments';
appoint_header.style.fontSize = '150%';
appoint_header.style.fontWeight= 'bold';
appoint_div.appendChild(appoint_header);

// While submitting , store in local storage and print it
form.addEventListener('submit',onSubmit);

function onSubmit(e)
{
    e.preventDefault();
    if(nameInput.value === '' || mail.value === '' || phone.value === '' || date.value === '' || time.value === '' )
    alert('Please enter Fields');
    else
    {
    const obj = {Name : nameInput.value,Email : mail.value,Phone : phone.value,Date: date.value,Time: time.value };
    let obj_serialized = JSON.stringify(obj);  //JSON Stringify
    localStorage.setItem(obj.Email,obj_serialized );
    //console.log(obj);
    //console.log(obj.Name);
    //console.log(obj_serialized);
    let obj_deserialized = JSON.parse(localStorage.getItem(mail.value)); //JSON parse
    
    //console.log(obj_deserialized);
    //console.log(obj_deserialized.Name);
    }

 

// List Creation
let list_creation = document.createElement('li');
list_creation.className="appointment-list";
list_creation.style.fontSize="150%";
list_creation.style.paddingTop = "1%";
let list_txt = document.createTextNode(nameInput.value + " -- " + mail.value + " -- " + phone.value + " -- " + date.value + " -- " + time.value);
list_creation.appendChild(list_txt);
appoint_div.appendChild(list_creation);
// let del_button = document.createElement('button');
// del_button.className="delete-button";
// del_button.textContent = 'X';
//del_button.style.backgroundcolor = 'white';
//del_button.style.float = 'right';
//list_creation.appendChild(del_button);

nameInput.value='';
mail.value='';
phone.value='';
date.value='';
time.value='';
}
btn.addEventListener('mouseover',mouseOver);

function mouseOver(e)
{
    btn.style.background='white';
    btn.style.color='black';

}
btn.addEventListener('mouseout',mouseOut);

function mouseOut(e)
{
    btn.style.background='orange';
    btn.style.color='white';
}


console.log('local storage :' + localstorage());

function localstorage()
{
    let values = [];
    let keys = Object.keys(localStorage);
    let leng = keys.length;

while ( leng>=0 ) {
    values.push(localStorage.getItem(keys[leng]) );
    leng--;
}

return values;

}
