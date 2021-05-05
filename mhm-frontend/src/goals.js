function newGoal(){
    fetch("http://localhost:3000/goals")
    .then(resp => resp.json())
    .then(appendGoal)
}

function appendGoal(goal){
    const dailyGoal = document.getElementById("newDailyGoal")
        const gl = document.createElement("li")
        gl.innerText = goal.date + " " + goal.name
        dailyGoal.append(gl)
}

