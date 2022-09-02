const btn= document.querySelector('#submit');
const form = document.querySelector('#myform');
const nameInput = document.querySelector('#name');
const mail = document.querySelector('#email');
const phone = document.querySelector('#phone');
const date = document.querySelector('#date');
const time = document.querySelector('#time');


// While submitting , store in local storage and print it
form.addEventListener('submit',onSubmit);

function onSubmit(e)
{
    e.preventDefault();
    console.log('click');
    if(nameInput.value === '' || mail.value === '' || phone.value === '' || date.value === '' || time.value === '' )
    alert('Please enter Fields');
    else
    {
    const obj = {Name : nameInput.value,Email : mail.value,Phone : phone.value,Date: date.value,Time: time.value };
    let obj_serialized = JSON.stringify(obj);  //JSON Stringify
    localStorage.setItem(obj.Name,obj_serialized );
    console.log(obj);
    //console.log(obj.Name);
    console.log(obj_serialized);
    let obj_deserialized = JSON.parse(localStorage.getItem(nameInput.value)); //JSON parse
    
    console.log(obj_deserialized);
    //console.log(obj_deserialized.Name);
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
