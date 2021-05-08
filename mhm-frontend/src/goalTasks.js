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
    .catch(error => alert(error))
}

function appendDupTask(dupTask){
    let dailyGoal = document.getElementById(`goal-${goalId}`)
    let inpt = document.createElement("input")
    let art = document.createElement("article")
    let btn = document.createElement("button")
    inpt.type = "checkbox"
    inpt.value = `${dupTask.points}`
    art.innerText = `${dupTask.category}. ${dupTask.points} points. ${dupTask.name}. Complete:`
    btn.innerText = "remove"
    btn.value = `dupBtn-${dupTask.task_id}`
    art.id = `dupBtn-${dupTask.task_id}`
    inpt.addEventListener('click', completeTask)
    btn.addEventListener('click', removeTask)
    dailyGoal.append(art)
    art.append(inpt, btn)
}

function completeTask(event){
    let points = parseInt(event.target.value)
    goalTracker(points)
}

function removeTask(event){
    let eventTarget = event.target.value
    let element = document.getElementById(`${eventTarget}`)
    element.parentNode.removeChild(element)
}