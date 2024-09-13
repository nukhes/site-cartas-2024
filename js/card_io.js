// these are the I/O elements
const input = document.querySelector('#input');
const main = document.querySelector("#main");

// actual card position on the path
var actualIndex = 0;

export function addListener(e) { 
    e.addEventListener("click", () => {
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
  
export function chooseCard(n) {
	console.log(actualIndex);
	refreshCards(n);
	actualIndex++;
}

export function refreshCards(n) {
	input.innerHTML = "";

	for (let i = 0; i < n; i++) {
		input.innerHTML += `<div style="background-color: ${getRandomColor()};" class="card stroked" src="" alt="" srcset="">?</div>`;
	}

	var divs = input.getElementsByClassName("card");

	for (var i = 0; i < divs.length; i += 1) {
		addListener(divs[i]);
	}
}

export function getRandomColor() {
	const getVibrantComponent = () => Math.floor(Math.random() * 128) + 128;
	const r = getVibrantComponent().toString(16).padStart(2, '0');
	const g = getVibrantComponent().toString(16).padStart(2, '0');
	const b = getVibrantComponent().toString(16).padStart(2, '0');
	return `#${r}${g}${b}`;
}

export function showAll() {
	main.innerHTML = '';
	input.innerHTML = '';
	main.innerHTML += `<img class="card" src="">`
}