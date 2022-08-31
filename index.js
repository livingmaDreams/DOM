// const headerBorder = document.getElementById("main-header");
// headerBorder.style.borderBottom = "solid black ";

// const item = document.getElementById("add-item");
// item.style.color="green";
// console.log(item.innerText);
// console.log(item.textContent);


//GET ELEMENT BY CLASS
const items = document.getElementsByClassName('list-group-item');
console.log(items);

for(let item of items)
{
    item.style.fontWeight="bold";
}

items[2].style.backgroundColor="green";

