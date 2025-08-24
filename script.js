 function addTask() {
      let taskInput = document.getElementById("taskInput");
      let taskText = taskInput.value.trim();

      if (taskText === "") {
        alert("Please enter a task!");
        return;
      }

      let li = document.createElement("li");
      li.innerHTML = `
        <span onclick="toggleComplete(this)">${taskText}</span>
        <button class="delete-btn" onclick="deleteTask(this)">❌</button>
      `;

      document.getElementById("taskList").appendChild(li);
      taskInput.value = "";
    }

    function toggleComplete(task) {
      task.parentElement.classList.toggle("completed");
    }

    function deleteTask(button) {
      button.parentElement.remove();
    }