const BASE_URL = 'https://swapi.dev/api/';
const planetsList = document.querySelector('.planets-list');
const personsList = document.querySelector('.persons');

let currentPage = 1;
let currentLang = "english";

const keySetting = {
    "english": {
        "planetResponseArr": "results",
        "filmResponseArr": "characters",
        "name": "name",
        "birthYear": "birth_year",
        "gender": "gender",
        "genderIMG": {
            "male": "./images/male.png",
            "female": "./images/female.png",
            "n/a": "./images/na.png"
        }
    },
    "wookiee": {
        "planetResponseArr": "rcwochuanaoc",
        "filmResponseArr": "characters",
        "name": "whrascwo",
        "birthYear": "rhahrcaoac_roworarc",
        "gender": "rrwowhwaworc",
        "genderIMG": {
            "scraanwo": "./images/male.png",
            "wwwoscraanwo": "./images/female.png",
            "wh/ra": "./images/na.png"
        }
    }
};

document.addEventListener('DOMContentLoaded', function () {
    getFilmData();
    getPlanets();
});

document.getElementById('next-page').addEventListener('click', function() {
    getPlanets(currentPage + 1);
});

document.getElementById('prev-page').addEventListener('click', function() {
    getPlanets(currentPage - 1);
});

document.getElementById('lang-select').addEventListener('change', function(e) {
    if (e.target.value !== currentLang) {
        currentLang = e.target.value;
        let filmID = document.querySelector('#film-id').value;
        getFilmData(filmID);
        getPlanets(currentPage);
    }
});

document.getElementById('hero-btn').addEventListener('click', function() {
    let filmID = document.querySelector('#film-id').value;
    getFilmData(filmID);    
});

function getPlanets(pageNum = 1) {
    let jsonKeys = keySetting[currentLang];
    let requestURL = `${BASE_URL}planets/?page=${pageNum}`;
    requestURL += (currentLang === 'wookiee') ? '&format=wookiee' : '';
    fetch(requestURL)
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        const results = data[jsonKeys.planetResponseArr];
        if (results) {
            planetsList.innerHTML = "";
            results.forEach((value) => {
                curPlanet = document.createElement("p");
                curPlanet.textContent = value[jsonKeys.name];
                planetsList.append(curPlanet);
            });
            currentPage = pageNum;
        }
    })
    .catch((error) => {
        console.log(error);
    });
}

function getFilmData(filmNum = 1) {
    let jsonKeys = keySetting[currentLang];
    let requestURL = `${BASE_URL}films/${filmNum}`;
    fetch(requestURL)
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        const results = data[jsonKeys.filmResponseArr];
        if (results) {
            personsList.innerHTML = '';
            getPersonsData(results); 
        }
    })
    .catch((error) => {
        console.log(error);
    });   
}

function getPersonsData(personsURL) {
    let format = (currentLang === 'wookiee') ? '?format=wookiee' : '';
    personsURL.map((value) => {
        fetch(`${value}${format}`)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            renderPersonCard(data);    
        });    
    });
}

function renderPersonCard(personObj) {
    let card = document.createElement('div');
    card.classList.add('person-card');
    let jsonKeys = keySetting[currentLang];
    let genderImgUrl = jsonKeys.genderIMG[personObj[jsonKeys.gender]];
    if (!genderImgUrl) {
        genderImgUrl = "./images/na.png";
    } 
    let textHTML = `
        <div class="person-img">
            <img src="${personImagesObj[personObj[jsonKeys.name]]}" alt="photo">
        </div>
        <div class="person-info">
            <p>Name:</p>
            <h3>${personObj[jsonKeys.name]}</h3>
            <p>Birth year:</p>
            <h3>${personObj[jsonKeys.birthYear]}</h3>
            <img src="${genderImgUrl}" alt="gender">
        </div>`;
    card.innerHTML = textHTML;
    personsList.append(card);
}
