console.log('Hello World!');
window.onscroll = function() {myfunction()};
var navbar = document.getElementById('navbar');
var sticky = navbar.offsetTop;
var load = document.getElementById('load');
console.log(sticky)
function myfunction(){
  console.log(sticky);
  if(window.pageYOffset>2){
    navbar.classList.add("sticky");
  }else {
    navbar.classList.remove("sticky");
  }
}
const link = document.getElementById('links');
console.log(link);
var btn = document.getElementById('button');
btn.addEventListener("click", disp);
function disp(){
  if(btn.textContent=="+"){
    link.style.display = "block";
    btn.textContent = '×';
  }
  else{
    link.style.display = 'none';
    btn.textContent = '+';
  }
} 
