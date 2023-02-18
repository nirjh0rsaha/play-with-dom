function makeBlue() {
    document.body.style.backgroundColor = "blue";
    document.getElementById("heading").innerText = "Changed to Blue";
}
// console.log(document.body);

const myEvent = document.getElementById("blue-btn");
myEvent.addEventListener("click", function () {
    document.body.style.backgroundColor = "grey";
    document.getElementById("h2").innerText = "Clicked Grey Button";
});

document.getElementById("btn-success").addEventListener("click", function () {
    document.body.style.backgroundColor = "green";
    document.getElementById("heading").innerText = "Clicked Green Button";
});
