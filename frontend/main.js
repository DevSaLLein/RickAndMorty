import { createElement } from "./helper/createElement.js";
import { formatId } from "./helper/formatId.js";
import { navbarScroll } from "./scripts/navbar.js";
import { scrollEventToTop } from "./scripts/scrollToTopEvent.js";
import { toggleModeThemeEvent } from "./scripts/toggleModeThemeEvent.js";
import { findCharacter } from "./helper/findCharacterByName.js";

window.addEventListener('DOMContentLoaded', async () => {

    const sectionContainerFather = document.querySelector('section');

    const input = document.querySelector("[rel='js-find-characteres']");
    input.addEventListener('input', (event) => {
        console.log(event.target.value);
        const teste = findCharacter(event.target.value, characteresData.results);
        console.log(teste);
    })

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const characteresData = await fetch('http://localhost:3001/api/characters', { method: 'GET', headers: myHeaders })
        .then(response => response.json())
    ;

    const characteres = [];

    for(const objectCharacter of characteresData.results) {

        const {
            episode, image,name, origin, status, species
        } = objectCharacter;

        const id = formatId(episode[0]);
        
        const firstEpisodeData = await fetch(`http://localhost:3001/api/episode/${id}`);

        characteres.push({
            name,
            status,
            species,
            firstEpisodeTitle: firstEpisodeData.name,
            image,
            originName: origin.name
        });
    }    

    characteres.forEach(character => {
        const sectionElement = createElement(character);
        sectionContainerFather.appendChild(sectionElement);
    })

    toggleModeThemeEvent();
    scrollEventToTop();
    navbarScroll();
})