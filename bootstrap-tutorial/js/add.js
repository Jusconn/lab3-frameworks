// Get the task form element by its ID
var taskForm = document.getElementById('taskForm');

// Get the task list element by its ID
var taskList = document.getElementById('taskList');

// Initialize the task ID counter
let taskId = 1;


// Function to mark a task as complete
function complete_task(button) {
    // Find the closest table row to the button
    const row = button.closest('tr');

    // Apply a line-through style to the row
    row.style.textDecoration = 'line-through';

    // Disable the complete button
    button.disabled = true;
}


// Function to delete a task
function delete_task(button) {
    // Find the closest table row to the button
    const row = button.closest('tr');

    // Remove the row from the table
    row.remove();
}


// Add an event listener to the task form for the submit event
taskForm.addEventListener('submit', (e) => {
    // Prevent the default form submission behavior
    e.preventDefault();

    // Get form values
    var taskName = document.getElementById('taskName').value;
    var taskDescription = document.getElementById('taskDescription').value;

    // Add task to the table
    var row = document.createElement('tr');
    row.innerHTML = "<th scope='row'>" + (taskId++) + "</th>";
    row.innerHTML += "<td>" + taskName + "</td>";
    row.innerHTML += "<td>" + taskDescription + "</td>";
    row.innerHTML += "<td><button class='btn btn-success btn-sm me-2' onclick='complete_task(this)'>Complete</button><button class='btn btn-danger btn-sm' onclick='delete_task(this)'>Delete</button></td>";

    // Append the row to the task list
    taskList.appendChild(row);

    // Reset the form fields
    taskForm.reset();
});
