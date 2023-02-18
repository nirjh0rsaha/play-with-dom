document.getElementById("review-btn").addEventListener("click", function () {
  const myElement = document.getElementById("floatingTextarea2");
  const myElementValue = myElement.value;

    // console.log(myElementValue);

  const p = document.createElement("p");
  p.innerText = myElementValue;

  const parent = document.querySelector("#comment-container");
  parent.appendChild(p);
  document.getElementById("floatingTextarea2").value = "";
});


// using 'enter' key from keyboard
// var input = document.getElementById("floatingTextarea2");
// input.addEventListener("keyup", function (event) {
//   if (event.keyCode === 13) {
//     event.preventDefault();
//     const myElement = document.getElementById("floatingTextarea2");
//     const myElementValue = myElement.value;

//     //   console.log(myElementValue);

//     const p = document.createElement("p");
//     p.innerText = myElementValue;

//     const parent = document.querySelector("#comment-container");
//     parent.appendChild(p);
//     document.getElementById("floatingTextarea2").value = "";
//   }
// });
