function postDupTask(dupTask){   
    const dupCat = dupTask.category
    const dupPoints = dupTask.points
    const dupName = dupTask.name
    const taskId = dupTask.id
    const body = {
        goalTask: {
            category: dupCat, 
            points: dupPoints,
            name: dupName,
            task_id: taskId,
            goal_id: goalId
        }
    }
    const options = {
        method: "POST", 
        headers: {
            "Content-Type": "application/json"},
        body: JSON.stringify(body)
    }
    fetch("http://localhost:3000/goal_tasks", options)
    .then(res => res.json())
    .then(appendDupTask)
}

function appendDupTask(dupTask){
    let dailyGoal = document.getElementById(`goal-${goalId}`)//make dynamic`${dupTask.goal_id}`
    let inpt = document.createElement("input")
    let art = document.createElement("article")
    inpt.type = "checkbox"
    inpt.value = `${dupTask.points}`
    art.innerText = dupTask.category + ". " + dupTask.points + " points. " + dupTask.name + ". "
    // btn.innerText = "remove" 
    art.id = `dupBtn-${dupTask.task_id}`
    inpt.addEventListener('click', removeTask) //goalTasks
    dailyGoal.append(art)
    art.appendChild(inpt)
    
}

function removeTask(){

}