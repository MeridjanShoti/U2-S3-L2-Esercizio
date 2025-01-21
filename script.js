const names = JSON.parse(localStorage.getItem("names")) || [];
for (element of names) {
  nameLi = document.createElement("li");
  nameLi.innerText = element;
  document.getElementById("names-list").appendChild(nameLi);
}
form.onsubmit = function (event) {
  event.preventDefault();
  names.push(document.getElementById("name").value);
  localStorage.setItem("names", JSON.stringify(names));
  document.getElementById("names-list").innerHTML = "";
  if (localStorage.getItem("names")) {
    for (element of names) {
      nameLi = document.createElement("li");
      nameLi.innerText = element;
      document.getElementById("names-list").appendChild(nameLi);
    }
  } else {
    document.getElementById("names-list").innerHTML = "";
  }
};
document.querySelector(".form-reset").addEventListener("click", () => {
  localStorage.removeItem("names");
  document.getElementById("names-list").innerHTML = "";
  names.length = 0;
});
document.querySelector(".deleteLast").addEventListener("click", () => {
  names.pop();
  document.getElementById("names-list").innerHTML = "";
  if (localStorage.getItem("names")) {
    for (element of names) {
      nameLi = document.createElement("li");
      nameLi.innerText = element;
      document.getElementById("names-list").appendChild(nameLi);
    }
  } else {
    document.getElementById("names-list").innerHTML = "";
  }
});
let time;
if (!sessionStorage.getItem("time")) {
  time = 0;
  document.querySelector(".time").innerText = 0;
} else {
  time = parseInt(sessionStorage.getItem("time"));
}
setInterval(() => {
  time += 1;
  sessionStorage.setItem("time", time);
  document.querySelector(".time").innerText = sessionStorage.getItem("time");
}, 1000);
