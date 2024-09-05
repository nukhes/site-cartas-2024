const input = document.querySelector('#input');
const main = document.querySelector("#main");
var actualIndex = 0;

const urlList = [
  "./card/00.jpg",
  ["./card/01.jpg", "./card/02.jpg"],
  ["./card/03.jpg", "./card/04.jpg", "./card/05.jpg"],
  ["./card/06.jpg", "./card/07.jpg", "./card/08.jpg", "./card/09.jpg"],
  ["./card/10.jpg", "./card/11.jpg", "./card/12.jpg"],
  ["./card/13.jpg", "./card/14.jpg"],
  "./card/99.jpg"
];

var path = [1, 1, 1, 1, 1];

// Adiciona o evento de clique para as cartas
refreshCards(1);


function addListener(e) { 
  e.addEventListener("click", a = () => {
    if (actualIndex == urlList.length) {
      alert("Fim da história");
      showAll();
    } else {
      console.log(actualIndex)
      if (actualIndex == 0 || actualIndex == 6) {
        chooseCard(1);
      } else if (actualIndex == 1 || actualIndex == 5) {
        chooseCard(2);
      }
      else if (actualIndex == 3) {
        chooseCard(4);
      }
      else if (actualIndex == 2 || actualIndex == 4) {
        chooseCard(3);
      }
      else if (actualIndex == 4) {
        chooseCard(4);
      }
    }
  })
}

function chooseCard(n) {
  actualIndex++;
  refreshCards(n);
}

function refreshCards(n) {
  input.innerHTML = "";
  for (let i = 0; i < n; i++) {
    input.innerHTML += `<div style="background-color: ${getRandomColor()};" class="card stroked" src="" alt="" srcset="">?</div>`;
    addListener(input.lastElementChild);
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
  main.innerHTML += `<img class="card" src="${urlList[actualIndex]}">`
}