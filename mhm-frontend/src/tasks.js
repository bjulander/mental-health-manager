class Task {

  constructor(newTask) {
    this.id = newTask.id
    this.category = newTask.category
    this.name = newTask.name
    this.points = newTask.points
  }

  appendTask(){
    let btn = document.createElement('button')
    let ul = document.querySelector('#taskList')
    let art = document.createElement("article")
    art.innerText = `${this.category}. ${this.points} points. ${this.name} `
    btn.innerText = "add" 
    btn.id = `btn-${this.id}`
    debugger
    btn.addEventListener('click', this.getTask.bind(this)) //goalTasks
    ul.append(art)
    art.appendChild(btn)
  }

  static postTask(){
    event.preventDefault()
    let inputCat = this.children[1].value
    let inputPoints = this.children[2].value
    let inputText = this.children[4].value
    let body = {
        task: {
            category: inputCat, 
            points: inputPoints,
            name: inputText
        }
    }
    let options = {
        method: "POST", 
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"},
        body: JSON.stringify(body)
    }
    fetch("http://localhost:3000/tasks", options)
    .then(res => res.json())
    .then(taskObj => {
      let newTask = new Task(taskObj)
      newTask.appendTask()
    })
    .catch(error => alert(error))
  }

  static allTasks(){
    fetch("http://localhost:3000/tasks")
    .then(res => res.json())
    .then(data => data.map(task => new Task(task)))
    .then((tasks => {tasks.forEach(task => {task.appendTask()})}))
  }

  getTask(){
    let cloneTask = this.id
    fetch(`http://localhost:3000/tasks/${cloneTask}`)
    .then(res => res.json())
    .then(idTask => {
      let cloneTask = new GoalTask(idTask)
      cloneTask.postDupTask()
    })
    .catch(error => alert(error))
  }
}

function taskLibraryFilterListener(event) {
    let search = event.target.value
    updateTaskList(everyTask.filter(task => task.category === search))
  }















// //OG
// const customTask = document.getElementById("customTask")
// const ul = document.querySelector('#taskList')
// const libraryFilter = document.getElementById("categoryDropdown")

// function allTasks(){
//   fetch("http://localhost:3000/tasks")
//   .then(resp => resp.json())
//   .then(shuffleAllTasks)
//   .catch(error => alert(error))
// }

// function shuffleAllTasks(tasks) {
//   let currentIndex = tasks.length, temporaryValue, randomIndex;
//   while (0 !== currentIndex) {
//     randomIndex = Math.floor(Math.random() * currentIndex)
//     currentIndex -= 1
//     temporaryValue = tasks[currentIndex]
//     tasks[currentIndex] = tasks[randomIndex]
//     tasks[randomIndex] = temporaryValue
//   }
//   tasks.forEach(task => appendTask(task))
//   window.everyTask = tasks
// }


// function appendTask(task){
//   let btn = document.createElement('button')
//   let art = document.createElement("article")
//   art.innerText = `${task.category}. ${task.points} points. ${task.name} `
//   btn.innerText = "add" 
//   btn.id = `btn-${task.id}`
//   btn.addEventListener('click', getTask) //goalTasks
//   ul.append(art)
//   art.appendChild(btn)
// }

// function postTask(e){
//   e.preventDefault()
//   const inputCat = e.target.children[1].value
//   const inputPoints = e.target.children[2].value
//   const inputText = e.target.children[4].value
//   const body = {
//       task: {
//           category: inputCat, 
//           points: inputPoints,
//           name: inputText
//       }
//   }
//   const options = {
//       method: "POST", 
//       headers: {
//           "Content-Type": "application/json"},
//       body: JSON.stringify(body)
//   }
//   fetch("http://localhost:3000/tasks", options)
//   .then(res => res.json())
//   .then(appendTask)
//   .catch(error => alert(error))
// }

//   function getTask(e){
//     let dupTask = e.target.id
//     let dupInt = dupTask.replace(/\D/g, "")
//     fetch(`http://localhost:3000/tasks/${dupInt}`)
//     .then(res => res.json())
//     .then(postDupTask)
//     .catch(error => alert(error))
// }

// function taskLibraryFilterListener(event) {
//   let search = event.target.value
//   updateTaskList(everyTask.filter(task => task.category === search))
// }

//   function updateTaskList(selectedTasks){
//     removeChildren(ul)
//     selectedTasks.forEach(task => appendTask(task))
// }
    
