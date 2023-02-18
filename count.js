let value = 0;

document.getElementById("plus-btn").addEventListener("click", function () {
  value += 1;
  document.getElementById("counter").innerText = value;
});

document.getElementById("minus-btn").addEventListener("click", function () {
  value -= 1;
  document.getElementById("counter").innerText = value;
});
