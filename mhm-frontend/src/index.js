// document.addEventListener('DOMContentLoaded', function () {
//     loadQuote();
//     loadTasks();
//   });

allTasks()

createBtn.addEventListener('click', openModal)
span.addEventListener('click', closeModal)

newGoalForm.addEventListener("submit", postGoal)
customTask.addEventListener("submit", postTask)

libraryFilter.addEventListener("change", taskLibraryFilterListener)
