var a_btn = document.getElementById('add_task')
var r_btn = document.getElementById('remove_task')
var task_list = document.getElementById('task-list')
var task_input, task_label, new_task



a_btn.onclick = function() {
  var task_name = prompt("Enter new task name :")
  if (task_name !== null && task_name !== "") {
    new_task = document.createElement('li')
    task_input = document.createElement('input')
    task_label = document.createElement('label')
    task_input.type = 'checkbox'
    task_label.innerHTML = task_name
    new_task.id = task_name
    new_task.appendChild(task_input)
    new_task.appendChild(task_label)
    task_list.appendChild(new_task)


    var tasks = JSON.parse(localStorage.getItem('tasks') || '[]')
    tasks.push(task_name)
    localStorage.setItem('tasks', JSON.stringify(tasks))
  }
}

r_btn.onclick = function() {
  var task_name = prompt("Enter the task you want to delete :")
  if (task_name !== null && task_name !== "") {
    var task_to_remove = document.getElementById(task_name)
    if (task_to_remove) {
      task_list.removeChild(task_to_remove)
      var tasks = JSON.parse(localStorage.getItem('tasks') || '[]')
      var index = tasks.indexOf(task_name)
      if (index !== -1) {
        tasks.splice(index, 1)
        localStorage.setItem('tasks', JSON.stringify(tasks))
      }
    }
  }
}

var tasks = JSON.parse(localStorage.getItem('tasks') || '[]')
tasks.forEach(function(task_name) {
  var new_task = document.createElement('li')
  var task_input = document.createElement('input')
  var task_label = document.createElement('label')
  task_input.type = 'checkbox'
  task_label.innerHTML = task_name
  new_task.id = task_name
  new_task.appendChild(task_input)
  new_task.appendChild(task_label)
  task_list.appendChild(new_task)
})