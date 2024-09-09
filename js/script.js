const input = document.querySelector('#input');
const main = document.querySelector("#main");
var actualIndex = 0;

const urlList = [
  "./card/-1.jpg",
  [
    "./card/00.jpg",
    [
      "./card/01.jpg",
      "./card/02.jpg",
    ],
    [
      "./card/03.jpg",
      "./card/04.jpg",
    ],
    [
      "./card/05.jpg",
      "./card/06.jpg",
    ],
  ],
  [
    "./card/00.jpg",
    [
      "./card/10.jpg",
      "./card/02.jpg",
    ],
    [
      "./card/03.jpg",
      "./card/04.jpg",
    ],
    [
      "./card/05.jpg",
      "./card/06.jpg",
    ],
  ],
  "./card/99.jpg"
];


var path = [1, 1, 1, 1];

// Adiciona o evento de clique para as cartas
refreshCards(1);


function addListener(e) { 
  e.addEventListener("click", a = () => {
    if (actualIndex > 5) {
      alert("Fim.");
      showAll();
    } else {
      if (actualIndex == 0 || actualIndex == 5) {
        chooseCard(1);
      } else {
        chooseCard(2);
      }
    }
    
  });
}

function chooseCard(n) {
  console.log(actualIndex);
  refreshCards(n);
  actualIndex++;
}

function refreshCards(n) {
  input.innerHTML = "";
  for (let i = 0; i < n; i++) {
    input.innerHTML += `<div style="background-color: ${getRandomColor()};" class="card stroked" src="" alt="" srcset="">?</div>`;
  }
  
  var divs = input.getElementsByClassName("card");
  for (var i = 0; i < divs.length; i += 1) {
    addListener(divs[i]);
  }
}

function getRandomColor() {
  const getVibrantComponent = () => Math.floor(Math.random() * 128) + 128;
  const r = getVibrantComponent().toString(16).padStart(2, '0');
  const g = getVibrantComponent().toString(16).padStart(2, '0');
  const b = getVibrantComponent().toString(16).padStart(2, '0');
  return `#${r}${g}${b}`;
}

function showAll() {
  main.innerHTML = '';
  input.innerHTML = '';
  main.innerHTML += `<img class="card" src="${urlList[actualIndex]}">`
}