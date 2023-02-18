
const tagList = document.getElementsByTagName("h1");
for (const tag of tagList) {
  tag.style.color = "red";
}

for (let i = 0; i < tagList.length; i++) {
//   console.log(tagList[i].innerText);
}


const classList = document.getElementsByClassName("test");
for (const value of classList) {
  value.style.backgroundColor = "blue";
}

const myHEading = document.getElementById("heading");
myHEading.style.textAlign = "center";
myHEading.style.color = "red";
// console.log(myHEading.innerText);

document.getElementById("heading").style.color = "yellow";
document.getElementById("heading").style.backgroundColor = "tomato";

const myTestElement = document.querySelectorAll(".test");
for (const value of myTestElement) {
  //   console.log(value.innerText);
}

const myElement = document.getElementById("first-heading");
myElement.style.color = "red";
myElement.style.backgroundColor = "blue";
myElement.style.padding = "20px";
myElement.style.margin = "10";

const myElement1 = document.querySelector("#first-heading");
// add css class
myElement1.className = "myclass";
// add class
myElement1.classList.add("hello");
// remove class
myElement1.classList.remove("myclass");

// create new element
const parentContainer = document.getElementById("container-details");
const myLi = document.createElement("li");
myLi.innerText = "fourth - added by js";
parentContainer.appendChild(myLi);

const container = document.getElementById("sectionContainer");
// create a div
const div = document.createElement("div");
// make a h1 tag
const h1 = document.createElement("h1");
h1.innerText = "Exploring dynamic js";
// console.log(h1);
// put h1 inside div
div.appendChild(h1);
container.appendChild(div);



document.getElementById("att-container").setAttribute("class", "myclass");
document.getElementById("att-container").setAttribute("value", "myvalue");

const myAttibute = document
  .getElementById("att-container")
  .getAttribute("value");
// console.log(myAttibute);

const value = document.getElementById("htmlcontaioner");
// console.log(value.textContent);
