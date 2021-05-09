class Goal{

    static allDailyGoals = []

    constructor(goal) {
        this.id = goal.id
        this.date = goal.attributes.date
        this.day = goal.attributes.day
        this.set_goal = goal.attributes.set_goal
        this.goalTasks = goal.attributes.goalTasks.map(goalTask => new GoalTask(goalTask))
        Goal.allDailyGoals.push(this)
    }

    appendGoal(){
        const dailyGoal = document.getElementById("newDailyGoal")
        const gl = document.createElement("article")
        const heart = document.createElement("span")
        const currentPnts = document.createElement("article")
        let btn = document.createElement("button")
        btn.innerText = "remove goal"
        btn.value = `goalBtn-${this.id}`
        currentPnts.innerText = "0 points toward goal."
        currentPnts.id = `tracker-${this.id}`
        currentPnts.className = "goalTrackers"
        heart.innerHTML = "&#x2661"
        heart.id = `heart-${this.id}`
        heart.className = "allHearts"
        heart.addEventListener("click", likeHeart)
        btn.addEventListener('click', removeGoal)
        gl.innerText = `${this.day}. ${this.date}. Goal: ${this.set_goal} points.`
        gl.id = `goal-${this.id}`
        gl.className = "allGoals"
        currentPnts.append(btn)
        gl.append(heart, currentPnts)
        gl.appendChild(btn)
        dailyGoal.append(gl)
    }

    postGoal(e){
        debugger
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
        e.target.reset()
    
        fetch("http://localhost:3000/goals", options)
        .then(res => res.json())
        .then(goal => {
        let newGoal = new Goal(goal)
        newGoal.appendGoal()
        })
    }

    static fetchGoals(){
        fetch("http://localhost:3000/goals")
        .then(resp => resp.json())
        .then(this.eachGoal)
    }
    

    static eachGoal() {
        for (let goal of goals){
        let newGoal = new Goal(goal)
        newGoal.appendPastGoals()
        }
    }

    appendPastGoals(){
        let artGoal = document.createElement("article")
        artGoal.innerText = `${this.day}. ${this.date}. Goal: ${this.set_goal} points.`
        ulGoal.append(artGoal)
        removeChildren(pastBtn)
    }

}





//OG
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
    let btn = document.createElement("button")
    btn.innerText = "remove goal"
    btn.value = `goalBtn-${goal.id}`
    currentPnts.innerText = "0 points toward goal."
    currentPnts.id = `tracker-${goal.id}`
    currentPnts.className = "goalTrackers"
    heart.innerHTML = "&#x2661"
    heart.id = `heart-${goal.id}`
    heart.className = "allHearts"
    heart.addEventListener("click", likeHeart)
    btn.addEventListener('click', removeGoal)
    gl.innerText = `${goal.day}. ${goal.date}. Goal: ${goal.set_goal} points.`
    gl.id = `goal-${goal.id}`
    gl.className = "allGoals"
    currentPnts.append(btn)
    gl.append(heart, currentPnts)
    gl.appendChild(btn)
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
    window.goalId = parseInt(heart.id.replace(/\D/g, ""))
}

function goalTracker (points){
    let goalString = document.querySelector(`article#tracker-${goalId}`)
    let goalText = goalString.innerText
    let trackNum = parseInt(goalText.replace(/\D/g, ""))
    let total = (trackNum + points)
    goalString.innerHTML = `Current points: ${total}`
}

function removeGoal(event){
    let eventGoal = event.target.parentElement
    eventGoal.remove()
}