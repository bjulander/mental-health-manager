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
            task_id: taskId
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
    console.log(dupTask)
}