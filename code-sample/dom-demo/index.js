// Inspecting DOM ------------------------------------------
// console.log(window.document)
// console.log(document.URL)
// console.log(document.head)

// Targeting DOM ------------------------------------------
const inputTodo = document.getElementById("inputTodo")
const displayTodo = document.getElementById("displayTodo")
const todos = document.getElementsByClassName("todo")

// console.log(todos)

// for (i = 0; i < todos.length; i++) {
//     console.log(todos[i])
// }

const todos1 = document.querySelector("#inputTodo")
const todo1 = document.querySelectorAll(".todo")

// console.log(todo1)

// Create DOM Element ------------------------------------------

const newDiv = document.createElement("div")
newDiv.innerHTML = "dudududu"
newDiv.style.backgroundColor = "blue"
newDiv.style.display = "block"
newDiv.style.textTransform = "uppercase"
newDiv.id = "special"
newDiv.className = "special-cuy"

// displayTodo.appendChild(newDiv)

// Event Listener ------------------------------------------

const inputButton = document.getElementById("inputButton")

inputButton.addEventListener("click", handleClick)
// inputButton.addEventListener("dblclick", handleClick)
// inputButton.addEventListener("mouseover", handleClick)
// inputTodo.addEventListener("keypress", handleKeyPress)


function handleClick(event){
    console.log(event.target.id)
    console.log(event.target.innerHTML)
    console.log(inputTodo.value)
    window.alert(inputTodo.value)
    console.log("Clicked!!!")
}

function handleKeyPress(event){
    console.log(event.key)
    console.log("Clicked!!!")
}


// Window Object ------------------------------------------

// window.location.href = "http://www.nonton.movie"
// window.open("http://www.nonton.movie","_blank")
// let name = window.prompt("Input Name")
// console.log(name)
// inputTodo.remove()





