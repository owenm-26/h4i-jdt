console.log("Hello world");

const projects = document.querySelector(".project");
console.log(projects);

const myName = document.getElementById("my-name");
myName.textContent = "Ethan";
myName.style.color = "blue";

let numberOfClicks = 0;
myName.addEventListener("click", function () {
  if (numberOfClicks % 2 == 0) {
    myName.style.color = "black";
  } else {
    myName.style.color = "blue";
  }
  numberOfClicks += 1;
});

const project1Btn = document.getElementById("project1Btn");
const project2Btn = document.getElementById("project2Btn");

project1Btn.addEventListener("click", function () {
  window.open("https://github.com/");
});

project2Btn.addEventListener("click", function () {
  window.open("https://github.com/");
});

hideBtn = document.getElementById("hide");
showBtn = document.getElementById("show");
const project_hidden = document.getElementsByClassName("project");

hideBtn.addEventListener("click", function () {
  for (p of project_hidden) {
    p.style.visibility = "hidden";
  }
});

showBtn.addEventListener("click", function () {
  for (p of project_hidden) {
    p.style.visibility = "visible";
  }
});
