// Challenge 1
// Add click eventListener to the button. Alert `It is 18 degrees`

// Challenge 2
// When the button is clicked, replace button label by ‘18 degrees’
function clicked() {
  let btn = document.querySelector("button");
  //alert("It is 18 degrees");
  btn.innerHTML = "18 degrees";
}

let btn = document.querySelector("button");
btn.addEventListener("click", clicked);
console.log(btn);
