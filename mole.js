let currMoleTile; 
let currPlantTile;
let star;
let score = 0;
let gameOver = false;

window.onload = function() {
  setGame();
}

function setGame() {
  for (let i = 0; i < 9; i++) {
    let tile = document.createElement("div");
    tile.id = i.toString();
    tile.addEventListener("click", selectTile)
    document.getElementById("board").appendChild(tile);
  }

  setInterval( setMole, 1000);
  setInterval( setPlant, 2000);
  setInterval(setStar, 300);
}

function getRandomtile() {
  let num = Math.floor(Math.random() * 9);
  return num.toString();
}

function setMole () {
  if (gameOver) {
    return;
  }

  if (currMoleTile) {
    currMoleTile.innerHTML = "";
  }

  let mole = document.createElement("img");
  mole.src = "./jigglypuff.png";

  let num = getRandomtile();
  if ( currPlantTile && currPlantTile.id == num) {
    return;
  }
  if ( star && star.id == num) {
    return;
  }
  currMoleTile = document.getElementById(num);
  currMoleTile.appendChild(mole);
}

function setPlant() { 
  if (gameOver) {
    return;
  }

  if (currPlantTile) {
    currPlantTile.innerHTML = "";
  }

  let plant = document.createElement("img");
  plant.src = "./bellsprout.png";

  let num = getRandomtile();
  if ( currMoleTile && currMoleTile.id == num) {
    return;
  }
  if ( star && star.id == num) {
    return;
  }
  currPlantTile = document.getElementById(num);
  currPlantTile.appendChild(plant);
}

function setStar() { 
  if (gameOver) {
    return;
  }

  if (star) {
    star.innerHTML = "";
  }

  let lol = document.createElement("img");
  lol.src = "./star.png";

  let num = getRandomtile();
  if ( currMoleTile && currMoleTile.id == num) {
    return;
  }
  if ( currPlantTile && currPlantTile.id == num) {
    return;
  }
  star = document.getElementById(num);
  star.appendChild(lol);
}

function selectTile() {
  if (gameOver ) {
    return;
  }
  if (this == currMoleTile) {
    score += 10;
    document.getElementById("score").innerText = score.toString();
  }
  else if ( this == currPlantTile) {
    document.getElementById("score").innerText = "Game Over: " + score.toString();
    gameOver = true;
  }
  else if (this == star) {
    score += 50;
    document.getElementById("score").innerText = score.toString();
  }
}