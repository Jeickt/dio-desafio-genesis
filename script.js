let order = [];
let clickedOrder = [];
let score = 0;

// 0 - verde;
// 1 - vermelho;
// 2 - amarelo;
// 3 - azul;

const green = document.querySelector('.green');
const red = document.querySelector('.red');
const yellow = document.querySelector('.yellow');
const blue = document.querySelector('.blue');

const checkOrder = () => {
  for(let i in clickedOrder) {
    if(clickedOrder[i] !== order[i]) {
      lose();
      break;
    }
  }
  if (clickedOrder.length === order.length) {
    alert(`Pontuação: ${score}\nVocê acertou! Iniciando próximo nível.`);
    nextLevel();
  }
}

const lose = () => {
  alert(`Pontuação: ${score}.\nVocê perdeu o jogo.\nClique em OK para iniciar novo jogo.`);
  order = [];
  clickedOrder = [];
  playGame();
}

const lightColor = (element, i) => {
  let time = i * 500;
  setTimeout(() => {
    element.classList.add('selected');
    setTimeout(() => {
      element.classList.remove('selected');
    }, 250) 
  }, time)
}

const selectColorElement = (color) => {
  switch (color) {
    case 0: return green;
    case 1: return red;
    case 2: return yellow;
    case 3: return blue;
    default: return;
  }
}

const click = color => {
  clickedOrder.push(color);
  selectColorElement(color).classList.add('selected');
  setTimeout(() => {
    selectColorElement(color).classList.remove('selected');
    checkOrder();
  }, 250)
}

const shuffleOrder = () => {
  let colorOrder = Math.floor(Math.random() * 4);
  order.push(colorOrder);
  clickedOrder = [];
  
  for(let i in order) {
    let elementColor = selectColorElement(order[i]);
    lightColor(elementColor, Number(i) + 1);
  }
}

const nextLevel = () => {
  score++;
  shuffleOrder();
}

const playGame = () => {
  alert('Bem-vindo ao Genesis! Iniciando novo jogo.');
  score = 0;

  nextLevel();
}

// green.addEventListener('click', click(0))
// red.addEventListener('click', click(1))
// yellow.addEventListener('click', click(2))
// blue.addEventListener('click', click(3))

green.onclick = () => click(0);
red.onclick = () => click(1);
yellow.onclick = () => click(2);
blue.onclick = () => click(3);

playGame();