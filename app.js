const taskForm = document.getElementById ("task-form")
const taskList = document.getElementById ("task-list")

//console.log(taskForm, taskList);

taskForm.addEventListener("submit",function (event){
  event.preventDefault(); 
  
  const taskInput = document.getElementById("task-input")
  const taskText = taskInput.ariaValueMax.trim();

  console.log(taskText);
})