function myFunction(event) {
  alert("the button is clicked " + event.target.innerHTML)
}

const btn = document.getElementsByClassName("btn btn-primary btn-lg")
for (let index = 0; index < btn.length; index++) {
  const element = btn[index];
  element.addEventListener("click", myFunction)
}