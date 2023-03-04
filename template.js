function renderPokemonHtml() {
  return `<div class="pokemonCards" id="${currentPokemonNumber}" onclick="openCard('${currentPokemonNumber}')">
      <h2>#${currentPokemonNumber}</h2>
      <img src="${currentPokemon['sprites']['other']['official-artwork']['front_shiny']}"/>
      <h3>${currentPokemon['name']}</h3>
    </div>`;
}

function openCardHtml(openedPokemon, id) {
  return` <div id="${openedPokemon["name"]}">
    <div class="close-btn">
        <img src="img/close-arrow.png" onclick="closeStats()">
    </div>

    <div class="headline me-2">
      <h3 class="ms-2 mt-1">${openedPokemon["name"]}</h3>
      <h3>#${id}</h3>
    </div>

      <div class="pokemon-image">
        <h3 onclick="lastPokemon('${id}')"><</h3>
        <img src="${openedPokemon["sprites"]["other"]["official-artwork"]["front_default"]}">
        <h3 onclick="nextPokemon('${id}')">></h3>
      </div>

    <div class="pokemon-stats">
    <div class="buttons">
      <button id="statsBtn" class="active-button" onclick="openCard('${id}')">Stats</button>
      <button id="infosBtn" onclick="openInfos('${id}')">Infos</button>
    </div>
      <div id='stats'>
        
      </div>
  </div>
`;
  
}

function openInfosHtml(openInfos) {
   return `
    <table class="info-container">
      <tbody>
      <tr class="pb-5">
        <td>Weight:</td> 
        <td>${openInfos["weight"]}</td>
      </tr>

      <tr class="pb-5">
        <td>Types:</td> 
        <td id="type1"></td>
        <td id="type2"></td>
      </tr>

      <tr class="pb-5">
        <td>Abilities:</td> 
        <td>${openInfos["abilities"][0]["ability"]["name"]}</td>
        <td>${openInfos["abilities"][1]["ability"]["name"]}</td>
      </tr>

      <tr class="pb-5">
        <td>Moves:</td> 
        <td>${openInfos["moves"][0]["move"]["name"]}</td>
        <td>${openInfos["moves"][1]["move"]["name"]}</td>
      </tr>
</tbody>
</table>
  `;
}

function renderStatsHtml(
  progressAtt,
  progressSpecDef,
  progressHp,
  progressSpecAtt,
  progressDef,
  progressSpeed,
  openedPokemon,
  id
) {
 return `
    <table class="mt-3 ms-2">
      <tbody>
      <tr class="mb-2">
        <td>Health: ${progressHp}</td>
        <td>
          <div class="progress" role="progressbar " aria-valuemax="300%" aria-valuemin="15px">
              <div class="progress-bar bg-danger" style="width: ${progressHp}px"></div> 
          </div>
        </td>
      </tr>

      <tr>
        <td>Attack: ${progressAtt}</td>
        <td>
          <div class="progress" role="progressbar " aria-valuemax="300%" aria-valuemin="15px">
              <div class="progress-bar bg-danger" style="width: ${progressAtt}px"></div> 
            </div>
        </td>
      </tr>

      <tr>
        <td>Defense: ${progressAtt}</td> 
        <td>
          <div class="progress" role="progressbar " aria-valuemax="300%" aria-valuemin="15px">
              <div class="progress-bar bg-danger" style="width: ${progressDef}px"></div> 
            </div>
        </td>
      </tr>

      <tr>
        <td>Sp. Att: ${progressSpecAtt}</td> 
        <td>
          <div class="progress" role="progressbar " aria-valuemax="300%" aria-valuemin="15px">
              <div class="progress-bar bg-danger" style="width: ${progressSpecAtt}px"></div> 
            </div>
        </td>
      </tr>

      <tr>
        <td>Sp. Def: ${progressSpecDef}</td> 
        <td>
          <div class="progress" role="progressbar " aria-valuemax="300%" aria-valuemin="15px">
              <div class="progress-bar bg-danger" style="width: ${progressSpecDef}px"></div> 
            </div>
        </td>
      </tr>

      <tr>
        <td>Speed: ${progressSpeed}</td> 
        <td>
          <div class="progress" role="progressbar " aria-valuemax="300%" aria-valuemin="15px">
              <div class="progress-bar bg-danger" style="width: ${progressSpeed}px"></div> 
            </div>
        </td>
      </tr>
      </tbody>
    </table>  
`;
}