function renderPokemonHtml() {
  return `<div class="pokemonCards" id="${currentPokemonNumber}" onclick="openCard('${currentPokemonNumber}')">
        <div class="pokomon-headline">
          <h3 class="name">${currentPokemon['name']}</h3>
          <h2>#${currentPokemonNumber}</h2>
        </div>
        <div class="types">         
        <div><img src="${currentPokemon['sprites']['other']['official-artwork']['front_shiny']}"/></div>
        <div class="icons" id="types${currentPokemonNumber}"></div>
        </div>
    </div>`;
}

function openCardHtml(openedPokemon, id) {
  return` <div id="${openedPokemon["name"]}">
    <div class="close-btn">
        <img src="img/back.png" onclick="closeStats()">
        <h3>#${id}</h3>
    </div>

    <div class="headline me-2">
      <h3 class="ms-2 mt-1">${openedPokemon["name"]}</h3>
    </div>

      <div class="pokemon-image">
        <h3 onclick="lastPokemon('${id}')"><</h3>
        <img src="${openedPokemon["sprites"]["other"]["official-artwork"]["front_default"]}">
        <h3 onclick="nextPokemon('${id}')">></h3>
      </div>

    <div class="pokemon-stats">
    <div class="buttons">
      <button id="statsBtn" class="active-button pb-3" onclick="openCard('${id}')">Stats</button>
      <button id="infosBtn" class="pb-3" onclick="openInfos('${id}')">Infos</button>
    </div>
      <div id='stats'>
        
      </div>
  </div>
`;
}

function openInfosHtml(openInfos) {
   return `
    <table class="info-container ms-2">
      <tbody>
      <tr class="pb-5">
        <td><b>Weight:</b></td> 
        <td>${openInfos["weight"]}</td>
      </tr>

      <tr class="pb-5">
        <td><b>Types:</b></td> 
        <td id="type1"></td>
        <td id="type2"></td>
      </tr>

      <tr class="pb-5">
        <td><b>Abilities:</b></td> 
        <td id=ability1></td>
        <td id=ability2></td>
      </tr>

      <tr class="pb-5">
        <td><b>Moves:</b></td> 
        <td>${openInfos["moves"][0]["move"]["name"]},</td>
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
        <td><b>Health:</b> ${progressHp}</td>
        <td>
          <div class="progress" role="progressbar " aria-valuemax="300%" aria-valuemin="15px">
              <div class="progress-bar bg-danger" style="width: ${progressHp}px"></div> 
          </div>
        </td>
      </tr>

      <tr>
        <td><b>Attack:</b> ${progressAtt}</td>
        <td>
          <div class="progress" role="progressbar " aria-valuemax="300%" aria-valuemin="15px">
              <div class="progress-bar bg-danger" style="width: ${progressAtt}px"></div> 
            </div>
        </td>
      </tr>

      <tr>
        <td><b>Defense:</b> ${progressAtt}</td> 
        <td>
          <div class="progress" role="progressbar " aria-valuemax="300%" aria-valuemin="15px">
              <div class="progress-bar bg-danger" style="width: ${progressDef}px"></div> 
            </div>
        </td>
      </tr>

      <tr>
        <td><b>Sp. Att:</b> ${progressSpecAtt}</td> 
        <td>
          <div class="progress" role="progressbar " aria-valuemax="300%" aria-valuemin="15px">
              <div class="progress-bar bg-danger" style="width: ${progressSpecAtt}px"></div> 
            </div>
        </td>
      </tr>

      <tr>
        <td><b>Sp. Def:</b> ${progressSpecDef}</td> 
        <td>
          <div class="progress" role="progressbar " aria-valuemax="300%" aria-valuemin="15px">
              <div class="progress-bar bg-danger" style="width: ${progressSpecDef}px"></div> 
            </div>
        </td>
      </tr>

      <tr>
        <td><b>Speed:</b> ${progressSpeed}</td> 
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