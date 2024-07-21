var a_btn = document.getElementById('add_task')
var r_btn = document.getElementById('remove_task')
var task_list = document.getElementById('task-list')

a_btn.onclick = function() {
    var task_name = prompt("Enter new task name :")
    if (task_name !== null && task_name !== "") {
      var new_task = document.createElement('li')
      var task_input = document.createElement('input')
      var task_label = document.createElement('label')
      task_input.type = 'checkbox'
      task_label.innerHTML = task_name
      new_task.appendChild(task_input)
      new_task.appendChild(task_label)
      task_list.appendChild(new_task)
    }
}