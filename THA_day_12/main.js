// LocalStorage
const localStorage = window.localStorage;
var tasks = JSON.parse(localStorage.getItem("tasks") || "[]");
console.log(tasks);

const updateLocalStorage = () =>
  localStorage.setItem("tasks", JSON.stringify(tasks));

{
  /* DOM to be created for each Task
<div class="task">
  <div class="status incomplete">Incomplete</div>
  <div class="title">Day 16th THA</div>
  <div class="actions">
    <img class="done-btn" src="./assets/check-square.svg" />
    <img class="del-btn" src="./assets/trash.svg" />
  </div>
</div>; 
*/
}

const createTaskDiv = (task, ind) => {
  let taskDiv = document.createElement("div");
  taskDiv.setAttribute("id", ind);
  taskDiv.setAttribute(
    "class",
    `task ${task.done ? "complete" : "incomplete"}`
  );

  let taskDetailDiv = document.createElement("div");
  taskDetailDiv.setAttribute("class", "details");

  let status = document.createElement("div");
  status.setAttribute("class", `status`);
  status.innerText = task.done ? "Completed" : "Incomplete";

  let title = document.createElement("div");
  title.setAttribute("class", `title ${task.done ? "strike" : ""}`);
  title.innerText = task.title;

  let actionsDiv = document.createElement("div");
  actionsDiv.setAttribute("class", "actions");

  if (!task.done) {
    let doneBtn = document.createElement("img");
    doneBtn.setAttribute("src", "./assets/check-square.svg");
    doneBtn.setAttribute("class", "done-btn");
    doneBtn.addEventListener("click", (e) => updateStatus(e, taskDiv, ind));
    actionsDiv.appendChild(doneBtn);
  }

  let delBtn = document.createElement("img");
  delBtn.setAttribute("src", "./assets/trash.svg");
  delBtn.setAttribute("class", "del-btn");
  delBtn.addEventListener("click", () => delTask(ind));
  actionsDiv.appendChild(delBtn);

  taskDetailDiv.appendChild(status);
  taskDetailDiv.appendChild(title);
  taskDiv.appendChild(taskDetailDiv);
  taskDiv.appendChild(actionsDiv);

  return taskDiv;
};

const welcomeText = () => {
  let welcomemsg = document.createElement("div");
  welcomemsg.innerHTML = "<h2>Welcome, add your task now to get started!</h2>";
  return welcomemsg;
};

const tasksDiv = document.querySelector(".tasks");
tasks.length === 0
  ? tasksDiv.appendChild(welcomeText())
  : tasks.map((task, ind) => tasksDiv.appendChild(createTaskDiv(task, ind)));

function addTask() {
  let titleInput = document.getElementById("newTaskTitle");
  if (titleInput.value === "") {
    alert("Please enter the task first!");
    return;
  }
  let newTask = {
    id: Date.now(),
    title: titleInput.value,
    done: false,
  };

  if (tasks.length === 0) {
    tasksDiv.firstElementChild.remove();
  }

  tasksDiv.appendChild(createTaskDiv(newTask, tasks.push(newTask) - 1));
  updateLocalStorage();
  titleInput.value = "";
}

function updateStatus(e, taskDiv, ind) {
  tasks[ind].done = true;
  updateLocalStorage();
  e.target.remove();
  taskDiv.firstChild.firstChild.innerText = "Completed";
  taskDiv.classList.remove("incomplete");
  taskDiv.classList.add("complete");
  taskDiv.firstChild.lastChild.classList.add("strike");
}

function delTask(ind) {
  tasks.splice(ind, 1);
  updateLocalStorage();
  document.getElementById(ind).remove();
  if (tasks.length === 0) {
    tasksDiv.appendChild(welcomeText());
  }
}
