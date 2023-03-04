let pokedex = [];

let currentPokemonNumber;
let currentPokemon;

async function loadPokemon() {
  for (let i = 1; i <= 100; i++) {
    await getUrl(i);
  }
}

async function getUrl(i) {
  currentPokemonNumber = i;
  let url = `https://pokeapi.co/api/v2/pokemon/${i}/`;
  let response = await fetch(url);
  currentPokemon = await response.json();
  pokedex.push(currentPokemon);
  renderPokemon();
}

function renderPokemon() {
  document.getElementById("allPokemons").innerHTML += renderPokemonHtml();
  getType();
}

function openCard(id) {
  document.getElementById("pokedexBg").classList.remove("d-none");
  let openedPokemon = pokedex[id - 1];
  document.getElementById("pokedexCard").innerHTML = openCardHtml(
    openedPokemon,
    id
  );
  checkType(openedPokemon);
  renderStats(openedPokemon, id);
}

function openInfos(id) {
  document.getElementById("statsBtn").classList.remove("active-button");
  document.getElementById("infosBtn").classList.add("active-button");
  let openInfos = pokedex[id - 1];
  document.getElementById("stats").innerHTML = openInfosHtml(openInfos);
  checkSecondType(openInfos);
}

function renderStats(openedPokemon, id) {
  let progressHp = openedPokemon["stats"][0]["base_stat"];
  let progressAtt = openedPokemon["stats"][1]["base_stat"];
  let progressDef = openedPokemon["stats"][2]["base_stat"];
  let progressSpecAtt = openedPokemon["stats"][3]["base_stat"];
  let progressSpecDef = openedPokemon["stats"][4]["base_stat"];
  let progressSpeed = openedPokemon["stats"][5]["base_stat"];
  document.getElementById("stats").innerHTML = renderStatsHtml(
    progressAtt,
    progressSpecDef,
    progressHp,
    progressSpecAtt,
    progressDef,
    progressSpeed,
    openedPokemon,
    id
  );
}

function nextPokemon(id) {
  let nextNumber = 1;
  let nextPokemon = Number(id) + nextNumber;
  if (nextPokemon <= pokedex.length) {
    openCard(nextPokemon);
  } else {
    nextPokemon = 1;
    openCard(nextPokemon);
  }
}

function lastPokemon(id) {
  let nextNumber = 1;
  let lastPokemon = Number(id) - nextNumber;
  if (lastPokemon >= 1) {
    openCard(lastPokemon);
  } else {
    lastPokemon = pokedex.length;
    openCard(lastPokemon);
  }
}

function checkSecondType(openInfos) {
  let types = openInfos["types"];
  if(types.length == 2){
    document.getElementById('type1').innerHTML = `${types[0]['type']['name']}`;
    document.getElementById('type2').innerHTML = `${types[1]['type']['name']}`;
  }else{
    document.getElementById('type1').innerHTML = `${types[0]['type']['name']}`;
  }
}

function getType() {
  document
    .getElementById(`${currentPokemonNumber}`)
    .classList.add(`type-${currentPokemon["types"][0]["type"]["name"]}`);
}

function checkType(openedPokemon) {
  document
    .getElementById(`${openedPokemon["name"]}`)
    .classList.add(`type-${openedPokemon["types"][0]["type"]["name"]}`);
}

function closeStats() {
  document.getElementById("pokedexBg").classList.add("d-none");
}
