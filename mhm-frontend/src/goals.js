const hiddenGoalForm = document.getElementById('hiddenGoalForm')
const createBtn = document.getElementById("createBtn")
const span = document.getElementsByClassName("close")[0]


function createNewGoal(e){
    e.preventDefault
    e.style.display = "block"
    console.log(e)
}

createBtn.onclick = function() {
    hiddenGoalForm.style.display = "block";
  }

  span.onclick = function() {
    hiddenGoalForm.style.display = "none";
  }



// function newGoal(){
//     fetch(`http://localhost:3000/goals`)
//     .then(resp => console.log(resp.json())
//         // resp.json()
//         )
//     .then(appendGoal)
// }




function appendGoal(goal){
    const dailyGoal = document.getElementById("newDailyGoal")
        const gl = document.createElement("article")
        gl.innerText = goal.day + " " + goal.date
        dailyGoal.append(gl)
}

