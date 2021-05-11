const newGoalForm = document.getElementById("newGoalForm")
const libraryFilter = document.getElementById("categoryDropdown")
const customTask = document.getElementById("customTask")

const once = {
    once : true
  };

Task.allTasks()
createBtn.addEventListener('click', openModal)
span.addEventListener('click', closeModal)
pastBtn.addEventListener("click", Goal.fetchGoals, once)
newGoalForm.addEventListener("submit", Goal.postGoal)
customTask.addEventListener("submit", Task.postTask)






//OG code
// newGoalForm.addEventListener("submit", postGoal)
// customTask.addEventListener("submit", postTask)
// libraryFilter.addEventListener("change", taskLibraryFilterListener)
// pastBtn.addEventListener("click", allGoals, once)