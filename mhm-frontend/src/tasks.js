

function allTasks(){
    fetch("http://localhost:3000/tasks")
    .then(resp => resp.json())
    .then(appendTasks)
}

function appendTasks(tasks){
    const taskLib = document.getElementById("taskLibrary")
    for (let task of tasks){
        const tsk = document.createElement("li")
        tsk.innerText = task.category_type + ": " + task.name + ". " + task.value + " points"
        taskLib.append(tsk)
    }
}






