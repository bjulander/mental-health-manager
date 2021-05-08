const customTask = document.getElementById("customTask")
const ul = document.querySelector('#taskList')
const libraryFilter = document.getElementById("categoryDropdown")

function allTasks(){
  fetch("http://localhost:3000/tasks")
  .then(resp => resp.json())
  .then(shuffleAllTasks)
  .catch(error => alert(error))
}

function shuffleAllTasks(tasks) {
  let currentIndex = tasks.length, temporaryValue, randomIndex;
  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex)
    currentIndex -= 1
    temporaryValue = tasks[currentIndex]
    tasks[currentIndex] = tasks[randomIndex]
    tasks[randomIndex] = temporaryValue
  }
  tasks.forEach(task => appendTask(task))
  window.everyTask = tasks
}


function appendTask(task){
  let btn = document.createElement('button')
  let art = document.createElement("article")
  art.innerText = `${task.category}. ${task.points} points. ${task.name}`
  btn.innerText = "add" 
  btn.id = `btn-${task.id}`
  btn.addEventListener('click', getTask) //goalTasks
  ul.append(art)
  art.appendChild(btn)
}

function postTask(e){
  e.preventDefault()
  const inputCat = e.target.children[1].value
  const inputPoints = e.target.children[2].value
  const inputText = e.target.children[4].value
  const body = {
      task: {
          category: inputCat, 
          points: inputPoints,
          name: inputText
      }
  }
  const options = {
      method: "POST", 
      headers: {
          "Content-Type": "application/json"},
      body: JSON.stringify(body)
  }
  fetch("http://localhost:3000/tasks", options)
  .then(res => res.json())
  .then(appendTask)
  .catch(error => alert(error))
}

  function getTask(e){
    let dupTask = e.target.id
    let dupInt = dupTask.replace(/\D/g, "")
    fetch(`http://localhost:3000/tasks/${dupInt}`)
    .then(res => res.json())
    .then(postDupTask)
    .catch(error => alert(error))
}

function taskLibraryFilterListener(event) {
  let search = event.target.value
  updateTaskList(everyTask.filter(task => task.category === search))
}

  function updateTaskList(selectedTasks){
    removeChildren(ul)
    selectedTasks.forEach(task => appendTask(task))
}

function removeChildren(element) {
  let child = element.lastElementChild;
  while (child) {
    element.removeChild(child);
    child = element.lastElementChild;
  }
}
    



