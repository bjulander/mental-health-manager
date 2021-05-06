

function allTasks(){
    fetch("http://localhost:3000/tasks")
    .then(resp => resp.json())
    .then(results => {
        tasks = results
        listAllTasks(tasks)
        taskLibraryFilterListener()
    })
}

function listAllTasks(tasks) {
    let ul = document.querySelector('#taskList');
    removeChildren(ul);
    tasks.forEach(task => addTask(task));
  }

  function removeChildren(element) {
    let child = element.lastElementChild;
    while (child) {
      element.removeChild(child);
      child = element.lastElementChild;
    }
  }

  function addTask(task) {
    let ul = document.querySelector('#taskList');
    let li = document.createElement('article');
    let btn = document.createElement('button');
    li.innerText = task.category + ". " + task.value + " points. " + task.name + ". "
    btn.innerText = "add" 
    ul.appendChild(li);
    li.appendChild(btn);
  }

  function taskLibraryFilterListener() {
    let catDropdown = document.querySelector('#categoryDropdown');
    catDropdown.addEventListener('change', function (event) {
      filterTaskLibrary(event.target.value);
    });
  }

  function filterTaskLibrary(categoryType) {
    listAllTasks(tasks.filter(task => task.category === categoryType))
}

function clickableButton(){
    let btn = document.querySelectorAll("button")
    console.log(btn)
    // btn.addEventListener('click', function(event){
    //     console.log(event) 
    // })
}





