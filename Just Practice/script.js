//1st now we are going to call the img tag 
let images = document.querySelector("img")
let para = document.querySelector("p")
//next going do write a function for images changes when u mouseover and mouseout 
// next at the same imgs to changing the text also so we need give innertext 
//using the addeventListener we can able to call the same function multiple times this is the main advantage of addeventlstner

images.addEventListener("mouseover", function (){
images.src = "img2.jpeg"
para.innerHTML = "this is a butterfly"
})
images.addEventListener("mouseout", function (){
images.src = "img3.jpg"
para.innerHTML = "this is a leaf"
})