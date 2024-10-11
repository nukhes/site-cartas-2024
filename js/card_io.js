import * as path from './random_path.js';

// these are the I/O elements
const input = document.querySelector('#input');
const main = document.querySelector("#main");

// actual card position on the path
var actualIndex = 1;

export function addListener(e) { 
	e.addEventListener("click", () => {

		if (actualIndex > 5) {
			alert("Fim.");
			showAll(path.path, path.urlList);
		}
		else if (actualIndex == 0 || actualIndex == 5) {
			chooseCard(1);
		} 
		else {
			chooseCard(2);
		}

	});
}

export function chooseCard(n) {
	actualIndex++;
	console.log(actualIndex);
	refreshCards(n);
}

// draw N cards in screen
export function refreshCards(n = 1) {
	input.innerHTML = "";

	for (let i = 0; i < n; i++) {
		input.innerHTML += `<div style="background-color: ${getRandomColor()};" class="card stroked" src="" alt="" srcset="">?</div>`;
	}

	var divs = input.getElementsByClassName("card");

	for (var i = 0; i < divs.length; i += 1) {
		addListener(divs[i]);
	}
}

// get random color for the card bg
export function getRandomColor() {
	const getVibrantComponent = () => Math.floor(Math.random() * 128) + 128;
	const r = getVibrantComponent().toString(16).padStart(2, '0');
	const g = getVibrantComponent().toString(16).padStart(2, '0');
	const b = getVibrantComponent().toString(16).padStart(2, '0');
	return `#${r}${g}${b}`;
}

// show all choosen cards like an HQ 
export function showAll(p, url) {
	let route = p[0] + 1

	main.innerHTML = '';
	input.innerHTML = '';

	const routes = [
		url[0],
		url[route][0],
		url[route][1][p[1]],
		url[route][2][p[2]],
		url[route][3][p[3]],
		url[3]
	];
	
	routes.forEach((route) => {
		main.innerHTML += `<img class="card" src="${route}">`;
	});
	
}