function randomColors() {
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
  }

let body = document.body;

let btn = document.getElementById('click');

let colorize = () => { body.style.backgroundColor = randomColors(); }

btn.onclick = colorize;