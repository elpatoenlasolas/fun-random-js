const btn = document.getElementById("btn");
const body = document.body;

body.height = window.innerHeight;

function newBtn() {
  let randY = Math.floor((Math.random() * body.height) * 1);
  let randX = Math.floor((Math.random() + 1));
  let rotate = randY * 10;

  const newButton = document.createElement('button');
  let newChild = body.appendChild(newButton);

  newChild.style.transform = `translate(${randX}px, ${randY}px) rotate(${rotate}deg)`;
  newChild.innerHTML = 'Click Me!';
}

btn.addEventListener("click", newBtn);

