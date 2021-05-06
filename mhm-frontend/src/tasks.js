const customTask = document.getElementById("customTask")
const ul = document.querySelector('#taskList')
const libraryFilter = document.getElementById("categoryDropdown")

function allTasks(){
    fetch("http://localhost:3000/tasks")
    .then(resp => resp.json())
    .then(listAllTasks)
}

function listAllTasks(tasks) {
  tasks.forEach(task => appendTask(task))
}

function appendTask(task){
      let btn = document.createElement('button');
      let ct = document.createElement("article")
      ct.innerText = task.category + ". " + task.points + " points. " + task.name + ". "
      ul.append(ct)
      btn.innerText = "add" 
      btn.addEventListener('click', postDupTask) //goalTasks
      ct.appendChild(btn)
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
  }

  function taskLibraryFilterListener(event) {
    let search = event.target.value
      filterTaskLibrary(search)
    }

  function filterTaskLibrary(search) {
    debugger
    listAllTasks(tasks.filter(task => task.category === search))
}




