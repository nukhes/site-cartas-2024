card = document.querySelector('#input').children;
urlList = [
  "https://1.bp.blogspot.com/-dlUjCozhYmI/YIrzHBwiMHI/AAAAAAACJeU/cDyzvoOwR3sM8JSk4arjNzLZ2fJEF0mxwCPcBGAsYHg/s1920/Ijiranaide%252C%2BNagatoro-san%2B-%2BEpisode%2B3%2B-%2BNagatoro%2BTowels%2BHair.jpg",
  "https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=85,width=480,height=720/catalog/crunchyroll/3cdd3ac7e5d8be3bb97c9e39bc1114d4.jpe",
  "https://upload.wikimedia.org/wikipedia/pt/thumb/0/00/Capa_do_primeiro_volume_do_mang%C3%A1_Ijiranaide%2C_Nagatoro-san.jpg/250px-Capa_do_primeiro_volume_do_mang%C3%A1_Ijiranaide%2C_Nagatoro-san.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUYiYnI4Uiyr0D4uomBGy1_rML_EypNn0kgQ&s",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkHbFdhDWB8snzqJ24THfeqrDUfBhn7bZpLg&s"
];
urlListRandom = shuffleArray(urlList);

function changeMainCard(url) {
  document.querySelector("#main").src = url;

  next = urlListRandom[urlListRandom.indexOf(url)+1];

  if (urlListRandom.length <= next) {
    alert("Fim da história");
  } else {
    addListener(card[0], next);
    addListener(card[1], next);
  }
}

function addListener(e, url) {
  e.addEventListener("click", () => {
    changeMainCard(url);
  })
}

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

addListener(card[0], 0);
addListener(card[1], 0);
