export var path = [1, 1, 1, 1];

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
    "./card/10.jpg",
    [
      "./card/11.jpg",
      "./card/12.jpg",
    ],
    [
      "./card/13.jpg",
      "./card/14.jpg",
    ],
    [
      "./card/15.jpg",
      "./card/16.jpg",
    ],
  ],
  "./card/99.jpg"
];


export function randomPath() {
  switch (getRandom()) {

  }
}

function getRandom() {
  return Math.round(Math.random());
}
