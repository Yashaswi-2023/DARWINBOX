function myFunction() {
  alert("button clicked")
  if(img1.src == "http://127.0.0.1:5500/image.jpg"){
    img1.src="image1.jpg";
  }
  else{
    img1.src="image.jpg";
  }
}

const btn = document.getElementById("btn")
btn.addEventListener("click", myFunction)
const img1 = document.getElementById("image")