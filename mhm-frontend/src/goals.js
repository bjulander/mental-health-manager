const hiddenGoalForm = document.getElementById('hiddenGoalForm')
const createBtn = document.getElementById("createBtn")
const span = document.getElementsByClassName("close")[0]
const newGoalForm = document.getElementById("newGoalForm")
const ulGoal = document.querySelector('#goalList')
const pastBtn = document.getElementById("pastBtn")

let glyphStates = {
    "♡": "♥",
    "♥": "♡"
}
  
  let colorStates = {
    "red" : "",
    "": "red"
}

function allGoals(){
    fetch("http://localhost:3000/goals")
    .then(resp => resp.json())
    .then(eachGoal)
    .catch(error => alert(error))
}

function eachGoal(goals) {
  goals.forEach(goal => listGoals(goal))
}

function listGoals(goal){
let artGoal = document.createElement("article")
artGoal.innerText = `${goal.day}. ${goal.date}. Goal: ${goal.set_goal} points.`
ulGoal.append(artGoal)
removeChildren(pastBtn)
}


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
    .catch(error => alert(error))
}

function appendGoal(goal){
    const dailyGoal = document.getElementById("newDailyGoal")
    const gl = document.createElement("article")
    const heart = document.createElement("span")
    const currentPnts = document.createElement("article")
    currentPnts.innerText = "Meeting 0 of goal."
    currentPnts.id = `tracker-${goal.id}`
    currentPnts.className = "goalTrackers"
    heart.innerHTML = "&#x2661"
    heart.id = `heart-${goal.id}`
    heart.className = "allHearts"
    heart.addEventListener("click", likeHeart)
    gl.innerText = `${goal.day}. ${goal.date}. Goal: ${goal.set_goal} points.`
    gl.id = `goal-${goal.id}`
    gl.className = "allGoals"
    gl.append(heart, currentPnts)
    dailyGoal.append(gl)
}

function likeHeart(e){
    let heart = e.target
    let hearts = document.querySelectorAll(".allHearts")
    hearts.forEach(h => {
        h.style.color = colorStates["red"]
        h.innerText = glyphStates["♥"]
    })
    heart.innerText = glyphStates[heart.innerText];
    heart.style.color = colorStates[heart.style.color]
    window.goalId = heart.id.replace(/\D/g, "")
}

function goalTracker (points){
    let goalString = document.querySelector(`article#tracker-${goalId}`)
    let goalText = goalString.innerText
    let trackNum = parseInt(goalText.replace(/\D/g, ""))
    let total = (trackNum + points)
    goalString.innerHTML = `Current points: ${total}`
}
