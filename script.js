const text1 = document.getElementById("dynamic-text");
const inttext1 = text1.innerHTML;
text1.style.color = "green";
function chngtxts(){
    text1.innerHTML = "The text has been changed."
}
function remove(){
    text1.innerHTML = inttext1;
}
const toggleButton = document.getElementById('theme-toggle');
const currentTheme = localStorage.getItem('theme');
// if (currentTheme === 'dark') {
//     document.body.classList.add('dark-mode');
//     toggleButton.textContent = 'Enable Light Mode';
// }
// console.log(document.body.classList);
toggleButton.addEventListener('click', () => {
    // Toggle the class on body
    document.body.classList.toggle('dark-mode');
    console.log(document.body.classList);
    // Check if dark mode is now active
    if (document.body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark');
        toggleButton.textContent = 'Enable Light Mode';
    } else {
        localStorage.setItem('theme', 'light');
        toggleButton.textContent = 'Enable Dark Mode';
    }
});

const formsub = document.getElementById("practice-form");
formsub.addEventListener("submit", (event) => {
    event.preventDefault();
  const acpt = document.getElementById("terms").checked;
  if (!acpt) {
    alert("Please accept the terms and conditions before submitting.");
    return;
  }
    const usrnm = document.getElementById("username").value;
    const flvr = document.getElementById("ice-cream").value;
    const review = document.getElementById("form-output");

    review.innerHTML = `
  <p>usernameis : ${usrnm}</p>
  <p>flavour : ${flvr}</p>
`;
})

const hs = document.getElementById("btn-hide");

hs.addEventListener('click', () => {
    const boxelement = document.querySelector(".box-element");
    if(boxelement.style.visibility === "hidden"){
        boxelement.style.visibility = "visible";
    }
    else{
        boxelement.style.visibility = "hidden";
    }
});

const cc = document.getElementById("btn-color");

cc.addEventListener('click', ()=> {
    const boxelement1 = document.querySelector(".box-element");
    if(window.getComputedStyle(boxelement1).visibility === "visible"){
        boxelement1.style.backgroundColor = `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`;
    }
});

const gs = document.getElementById("btn-grow");
let size = 0;
gs.addEventListener("click", () =>{
    const boxelement2 = document.querySelector(".box-element");
    if(window.getComputedStyle(boxelement2).visibility === "visible"){
        if(size === 0){
            size++;
            boxelement2.style.height = "300px";
        boxelement2.style.width = "300px";
        }
        else{
            size--;
            boxelement2.style.height = "150px";
        boxelement2.style.width = "150px";
        }
    }
});

// 1. Select the necessary DOM elements
const todoInput = document.getElementById('todo-input');
const addButton = document.getElementById('btn-add-item');
const dynamicList = document.getElementById('dynamic-list');

// 2. Add an event listener to the "Add to List" button
addButton.addEventListener('click', function() {
    // Get the input value and trim any accidental whitespace
    const itemText = todoInput.value.trim();

    // Validation: Don't add empty items to the list
    if (itemText === "") {
        alert("Please enter an item before adding.");
        return;
    }

    // 3. Create the new <li> element
    const newLi = document.createElement('li');
    
    // Set its text content to the user's input
    // Using a text node ensures the styling matches your existing setup
    newLi.textContent = itemText + " "; 

    // 4. Create the delete button inside the <li>
    const deleteBtn = document.createElement('button');
    deleteBtn.className = 'delete-btn';
    deleteBtn.textContent = 'X';

    // 5. Append the delete button to the <li>, and the <li> to the <ul>
    newLi.appendChild(deleteBtn);
    dynamicList.appendChild(newLi);

    // 6. Clear the input field for the next entry
    todoInput.value = "";
});

// 1. Select the parent <ul> container
const dynamicList1 = document.getElementById('dynamic-list');

// 2. Listen for clicks anywhere inside the <ul>
dynamicList1.addEventListener('click', function(event) {
    
    // Check if the clicked element actually has the class 'delete-btn'
    if (event.target.classList.contains('delete-btn')) {
        
        // Find the parent <li> of the clicked button
        const listItemToDelete = event.target.parentElement;
        
        // Remove the <li> element entirely from the DOM
        listItemToDelete.remove();
    }
});