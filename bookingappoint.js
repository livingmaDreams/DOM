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

// let storage_values = local_Storage();

// While submitting , store in local storage and print it
form.addEventListener('submit',onSubmit);

function onSubmit(e)
{
    e.preventDefault();
    if(nameInput.value === '' || mail.value === '' || phone.value === '' || date.value === '' || time.value === '' )
    alert('Please enter Fields');
    // else if(localStorage.getItem(mail.value) != null)
    // {
    // localStorage.removeItem(mail.value);
    // const delli = document.getElementById(mail.value);
    // delli.remove();
    // }
    // let obj = {Name: nameInput.value,Email: mail.value,Phone: phone.value,DatE: date.value,Time: time.value };
    // let obj_serialized = JSON.stringify(obj);  //JSON Stringify
    // localStorage.setItem(obj.Email,obj_serialized );
    // listCreation(nameInput.value,mail.value,phone.value,date.value,time.value);
    else{
        let obj = {Name: nameInput.value,Email: mail.value,Phone: phone.value,DatE: date.value,Time: time.value };
        try{
        axios.post('https://crudcrud.com/api/a4041e44da0e4762909dabb4786927d6/appointments',obj)
        .then(res =>{
        console.log(res);
        listCreation(res.data.Name,res.data.Email,res.data.Phone,res.data.DatE,res.data.Time,res.data._id)});
        }
        catch(err){console.log(err);}
    }
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

// function local_Storage()
// {
//     let values = [];
//     let keys = Object.keys(localStorage);
//     let leng = keys.length-1;

// while ( leng>=0 ) {
//     const objval = JSON.parse(localStorage.getItem(keys[leng]));

// listCreation(objval.Name,objval.Email,objval.Phone,objval.DatE,objval.Time);

      
// values.push(objval);
// leng--;
// }

// return values;
function listCreation(nameInput,mail,phone,date,time,id){
let list_creation = document.createElement('li');
list_creation.id=id;
list_creation.style.fontSize="150%";
list_creation.style.paddingTop = "1%";
let list_txt = document.createTextNode(nameInput + " -- " + mail + " -- " + phone + " -- " + date + " -- " + time);
list_creation.appendChild(list_txt);
appoint_div.appendChild(list_creation);

// Delete and edit button creation
let edit_button = document.createElement('button');
edit_button.className="edit-button";
edit_button.textContent = 'edit';
edit_button.style.marginLeft='20px';
edit_button.style.backgroundcolor = 'white';
//edit_button.style.float = 'right';
list_creation.appendChild(edit_button);
let del_button = document.createElement('button');
del_button.className="delete-button";
del_button.textContent = 'X';
del_button.style.marginLeft='15px';
del_button.style.backgroundcolor = 'white';
//del_button.style.float = 'right';
list_creation.appendChild(del_button);
}

window.addEventListener('DOMContentLoaded',storageAPI);

function storageAPI(){
    try{
        axios.get('https://crudcrud.com/api/a4041e44da0e4762909dabb4786927d6/appointments')
        .then(res => {
        for(let i=0;i<res.data.length;i++)
         listCreation(res.data[i].Name,res.data[i].Email,res.data[i].Phone,res.data[i].DatE,res.data[i].Time,res.data[i]._id) })
        }
        catch(err){console.log(err);}

}

appoint_div.addEventListener('click', updateList)
function updateList(e){
    const parElement = e.target.parentElement;
    const id = parElement.id;
    e.preventDefault();
    if(e.target.classList.contains('delete-button')){
      if (confirm('Are you Sure?'))
          appoint_div.removeChild(parElement);
      
    
    
    const url = `https://crudcrud.com/api/a4041e44da0e4762909dabb4786927d6/appointments/${id}`;
    try{
        axios.delete(url)
        .then(res => console.log(res, 'Appointment is Deleted'))
        }
        catch(err){console.log(err);} 
    }
    if(e.target.classList.contains('edit-button')){
     if(confirm('Are you Sure?')){
        const url = `https://crudcrud.com/api/a4041e44da0e4762909dabb4786927d6/appointments/${id}`;
        axios.get(url)
        .then((res) => {
            nameInput.value=res.data.Name;
            mail.value=res.data.Email;
            phone.value=res.data.Phone;
            date.value=res.data.DatE;
            time.value=res.data.Time;
        })
        try{
            axios.delete(url)
            .then(res => console.log(res, 'Appointment is in Edit Mode'))
            }
            catch(err){console.log(err);} 
        }
        appoint_div.removeChild(parElement);
        
     }
       
        
    
      
}
