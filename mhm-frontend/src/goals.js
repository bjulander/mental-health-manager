const hiddenGoalForm = document.getElementById('hiddenGoalForm')
const createBtn = document.getElementById("createBtn")
const newGoalForm = document.getElementById("newGoalForm")

function openModal(){
    hiddenGoalForm.style.display = "block"
}

function postGoal(e){
    hiddenGoalForm.style.display = "none"
    e.preventDefault()
    const inputDate = e.target.children[2].value
    const inputDay = e.target.children[3].value
    const body = {
        goal: {
            day: inputDay, 
            date: inputDate
        }
    }
    const options = {
        method: "POST", 
        headers: {
            "Content-Type": "application/json"},
        body: JSON.stringify(body)
    }
    e.target.reset()
    fetch("http://localhost:3000/goals", options)
    .then(res => res.json())
    .then(appendGoal)
}

function appendGoal(goal){
    const dailyGoal = document.getElementById("newDailyGoal")
        const gl = document.createElement("article")
        gl.innerText = goal.day + " " + goal.date
        dailyGoal.append(gl)
}

