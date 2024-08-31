const card = document.querySelector('#input').children;
const main = document.querySelector("#main");
actualIndex = 0;

urlList = [
  "../card/01.jpg",
  "../card/02.jpg",
  "../card/03.jpg",
  "../card/04.jpg",
  "../card/05.jpg",
];

urlList = shuffleArray(urlList);
console.log(`lista embaralhada: ${urlList}`); // debug

// Adiciona o evento de clique para as cartas
for (let i = 0; i <= 1; i++) {
  addListener(card[i]);
  card[i].style.backgroundColor = getRandomColor();
}

function changeMainCard() {
  main.innerHTML += `<img class="card" src="${urlList[actualIndex]}">`
  console.log(`imagem atual: ${urlList[actualIndex]}`); // debug
  console.log(`prox imagem: ${urlList[actualIndex+1]}`); // debug

  window.scroll({
    top: 999999999999,
    behavior: "smooth"
  });

  for (let i = 0; i <= 1; i++) {
    card[i].style.backgroundColor = getRandomColor();
  }

}

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
  }
  array.unshift("../card/00.jpg");
  return array;
}

function addListener(e) {
  e.addEventListener("click", () => {
    if (urlList.length <= actualIndex+1) {
      alert("Fim da história");
    } else {
      actualIndex++;
      changeMainCard();
    }
  })
}

function getRandomColor() {
  // Generate a random color in hexadecimal format
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

