let characters = [
  {
    id: 1,
    name: "Luke Skywalker",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/2/20/LukeTLJ.jpg",
    homeworld: "tatooine",
  },
  {
    id: 2,
    name: "C-3PO",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/3/3f/C-3PO_TLJ_Card_Trader_Award_Card.png",
    homeworld: "tatooine",
  },
  {
    id: 3,
    name: "R2-D2",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/e/eb/ArtooTFA2-Fathead.png",
    homeworld: "naboo",
  },
  {
    id: 4,
    name: "Darth Vader",
    pic: "https://vignette.wikia.nocookie.net/fr.starwars/images/3/32/Dark_Vador.jpg",
    homeworld: "tatooine",
  },
  {
    id: 5,
    name: "Leia Organa",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/f/fc/Leia_Organa_TLJ.png",
    homeworld: "alderaan",
  },
  {
    id: 6,
    name: "Owen Lars",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/e/eb/OwenCardTrader.png",
    homeworld: "tatooine",
  },
  {
    id: 7,
    name: "Beru Whitesun lars",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/c/cc/BeruCardTrader.png",
    homeworld: "tatooine",
  },
  {
    id: 8,
    name: "R5-D4",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/c/cb/R5-D4_Sideshow.png",
    homeworld: "tatooine",
  },
  {
    id: 9,
    name: "Biggs Darklighter",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/0/00/BiggsHS-ANH.png",
    homeworld: "tatooine",
  },
  {
    id: 10,
    name: "Obi-Wan Kenobi",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/4/4e/ObiWanHS-SWE.jpg",
    homeworld: "stewjon",
  },
  {
    id: 11,
    name: "Anakin Skywalker",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/6/6f/Anakin_Skywalker_RotS.png",
    homeworld: "tatooine",
  },
  {
    id: 12,
    name: "Wilhuff Tarkin",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/c/c1/Tarkininfobox.jpg",
    homeworld: "eriadu",
  },
  {
    id: 13,
    name: "Chewbacca",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/4/48/Chewbacca_TLJ.png",
    homeworld: "kashyyyk",
  },
  {
    id: 14,
    name: "Han Solo",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/e/e2/TFAHanSolo.png",
    homeworld: "corellia",
  },
  {
    id: 15,
    name: "Greedo",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/c/c6/Greedo.jpg",
    homeworld: "Rodia",
  },
  {
    id: 16,
    name: "Jabba Desilijic Tiure",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/7/7f/Jabba_SWSB.png",
    homeworld: "tatooine",
  },
  {
    id: 18,
    name: "Wedge Antilles",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/6/60/WedgeHelmetless-ROTJHD.jpg",
    homeworld: "corellia",
  },
  {
    id: 19,
    name: "Jek Tono Porkins",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/e/eb/JekPorkins-DB.png",
    homeworld: "bestine",
  },
  {
    id: 20,
    name: "Yoda",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/d/d6/Yoda_SWSB.png",
  },
  {
    id: 21,
    name: "Palpatine",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/d/d8/Emperor_Sidious.png",
    homeworld: "naboo",
  },
];

const button = document.getElementById("render-button");
let newDiv;
let radioDiv;

// FILTER CHARACTERS FOR THEIR HOMEWORLD

const homeworldsRaw = characters.map(
  (character) => character.homeworld ?? "Other"
);
console.log(homeworldsRaw);

// REMOVE DUPLICATE VALUES FROM ARRAY

const homeworldsUnique = [...new Set(homeworldsRaw)];
console.log(homeworldsUnique);

// TO MAKE LOWERCASE

const homeworlds = homeworldsUnique.map((homeworld) => homeworld.toLowerCase());

console.log(homeworlds);

function renderCharacters() {
  // CREATE RADIO INPUTS

  if (radioDiv && radioDiv.innerHTML !== "") {
    radioDiv.remove();
    radioDiv = null;
  } else {
    radioDiv = document.createElement("div");
    radioDiv.id = "homeworlds-filter-container";
    radioDiv.classList.add("d-flex", "justify-content-around", "mb-4");
    document.body.appendChild(radioDiv);
    for (let homeworld of homeworlds) {
      const radio = `<div class="form-check">
  <input class="form-check-input" type="radio" name="homeworld" id="homeworld-${homeworld}" onclick="filterClick()"  value="${homeworld}">
  <label class="form-check-label" for="homeworld-${homeworld}">
    ${homeworld}
  </label>
  </div>`;
      radioDiv.innerHTML += radio;
    }
  }

  // CHECK DIV ELEMENT EXIST and CREATE DIV

  if (newDiv && newDiv.innerHTML !== "") {
    newDiv.remove();
    newDiv = null;
    button.textContent = "Show Characters";
    button.classList.remove("btn-danger");
    button.classList.add("btn-success");
  } else {
    newDiv = document.createElement("div");
    newDiv.classList.add("row", "justify-content-center");
    document.body.appendChild(newDiv);

    // CREATE CARDS

    for (let character of characters) {
      const card = `<div class="col-lg-2 col-md-3 col-sm-4 card mb-4 mx-4">
      <img src="${character.pic}" class="card-img-top" height="300" alt="...">
      <div class="card-body">
        <h5 class="card-title">Name: ${character.name}</h5>
        <p class="card-text">Homeworld: ${character.homeworld}</p>
      </div>
    </div>`;
      newDiv.innerHTML += card;
    }

    button.textContent = "Remove Characters";
    button.classList.remove("btn-success");
    button.classList.add("btn-danger");
  }
}

// FILTER CHARACTERS WITH RADIO INPUTS

function filterClick() {
  const filteredHomeworld = document.querySelector(
    'input[name="homeworld"]:checked'
  );

  const characterCards = document.querySelectorAll(".card");

  characterCards.forEach((card) => {
    const cardHomeworldText = card
      .querySelector(".card-text")
      .textContent.split(": ")[1];
    const cardHomeworld = cardHomeworldText
      ? cardHomeworldText.toLowerCase()
      : "other";

    if (
      cardHomeworld === filteredHomeworld.value ||
      (filteredHomeworld.value === "other" &&
        (!cardHomeworldText || cardHomeworldText.toLowerCase() === "undefined"))
    ) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
}
