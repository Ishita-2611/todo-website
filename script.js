let inputbox = document.getElementById("input_box");
let list_container = document.getElementById("list_container");
let button = document.getElementsByTagName("button");
function AddTask() {
  if (inputbox.value === '') {
    alert("Please mention the task");
  }
  else {
    let li = document.createElement("li");
    li.innerHTML = inputbox.value;
    list_container.append(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);

  }
  inputbox.value = '';
  savedata();
}
list_container.addEventListener("click", function(e) {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("checked");
  }
  else if (e.target.tagName === "SPAN") {
    e.target.parentElement.remove();
    savedata();
  }
}, false);
function savedata() {
  localStorage.setItem("data", list_container.innerHTML);
}
function showtask() {
  list_container.innerHTML = localStorage.getItem("data");
}
showtask();









