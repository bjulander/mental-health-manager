function postDupTask(e){
    console.log(e.target)
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