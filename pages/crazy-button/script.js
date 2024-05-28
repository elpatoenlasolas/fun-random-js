const btn = document.getElementById("btn");
const body = document.body;

body.height = window.innerHeight;
body.width = window.innerWidth;

btn.addEventListener("mouseover", () => {
  let randY = Math.floor((Math.random() * body.height) * 1);
  let randX = Math.floor((Math.random() * -body.width) * .5);
  btn.style.transform = `translate(${randX}px, ${randY}px)`;
  });


function alrt() {
  alert('YOU WIN!');
}
btn.addEventListener("click", alrt);