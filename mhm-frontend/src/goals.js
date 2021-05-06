const hiddenGoalForm = document.getElementById('hiddenGoalForm')
const createBtn = document.getElementById("createBtn")
const span = document.getElementsByClassName("close")[0]
const newGoalForm = document.getElementById("newGoalForm")

function openModal(){
    hiddenGoalForm.style.display = "block"
}

function closeModal(){
    hiddenGoalForm.style.display = "none"
}

function postGoal(e){
    hiddenGoalForm.style.display = "none"
    e.preventDefault()
    const inputDate = e.target.children[2].value
    const inputDay = e.target.children[3].value
    const inputGoal = e.target.children[5].value
    const body = {
        goal: {
            day: inputDay, 
            date: inputDate,
            set_goal: inputGoal
        }
    }
    const options = {
        method: "POST", 
        headers: {
            "Content-Type": "application/json"},
        body: JSON.stringify(body)
    }
    fetch("http://localhost:3000/goals", options)
    .then(res => res.json())
    .then(appendGoal)
}

function appendGoal(goal){
    debugger
    const dailyGoal = document.getElementById("newDailyGoal")
        const gl = document.createElement("article")
        gl.innerText = goal.day + " " + goal.date + " " + goal.current_total + "/" + goal.set_goal + " of goal!"
        gl.id = `new-${goal.id}`
        dailyGoal.append(gl)
}

