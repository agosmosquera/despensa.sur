// const boton = document.getElementById("btnPrincipal");
// const respuestaClick = () => alert("Añadiste este producto al carrito");
// boton.addEventListener("click", respuestaClick)
// let usuario;
// let usuarioEnLS = JSON.stringify(localStorage.getItem("usuario"))


// // Si había algo almacenado, lo recupero. Si no le pido un ingreso
// if (usuarioEnLS) {
//     usuario = usuarioEnLS
// } else {
//     usuario = prompt("Ingrese su nombre de usuario")
// }

let tasks = []
let tasksList = document.getElementById("tasksList")
let addButton = document.getElementById("addButton")
let taskInput = document.getElementById("taskInput")

let updateTasks = () => {
    tasksList.innerHTML = ""
    tasks.forEach ( task => {
        let newTask = document.createElement("ul")
        newTask.innerText = task
        tasksList.appendChild(newTask)
    })
    localStorage.setItem("tasks", tasks)
}

addButton.addEventListener ( "click", () => {
    if ( taskInput.value !== "") {
        tasks.push (taskInput.value)
        taskInput.value = ""
        updateTasks()
    }
    console.log(tasks)
})

let tasksInStorage = localStorage.getItem("tasks")
if (tasksInStorage) {
    tasksInStorage.split(",").forEach (t => {
        tasks.push(t)
    })
    updateTasks()
}