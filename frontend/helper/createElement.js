export const createElement = (object) => {
    const containerContainer = createContainer();
    const informationsContainer = createInformationsContainer(object);
    const figureContainer = createFigureContainer(object);

    containerContainer.append(
        figureContainer,
        informationsContainer
    );

    return containerContainer;
}

const createFigureContainer = ({ image, name }) => {
    const figure = document.createElement('figure');
    const imageElement = document.createElement('img');

    imageElement.setAttribute('src', image);
    imageElement.setAttribute('alt', `${name} photo`);

    figure.appendChild(imageElement);

    return figure
}

const createContainer = () => document.createElement('section');

const createInformationsContainer = ({ name, status, species, originName, firstEpisodeTitle }) => {
    const div = document.createElement('div');

    const header = createHeaderInformationsContainer(name, status, species);
    const main = createMainInformationsContainer(originName);
    const footer = createFooterInformationsContainer(firstEpisodeTitle);

    div.append(
        header, main, footer
    );

    return div;
}

const createHeaderInformationsContainer = (nameCharactere, status, species) => {
    const header = document.createElement('header'); 
    const span = document.createElement('span');
    const paragraph = document.createElement('p');
    const spanBall = document.createElement('span');
    const paragraphStatus = document.createElement('p');

    const divChildFirst = document.createElement('div');
    const divChildSecond = document.createElement('div');

    status == 'Alive' ? 
        spanBall.classList.add('alive') : spanBall.classList.add('dead')
    ;

    span.appendChild(
        document.createTextNode(nameCharactere)
    );

    paragraphStatus.appendChild(
        document.createTextNode(status)
    )
    divChildFirst.append(
        spanBall,
        paragraphStatus
    );

    divChildSecond.appendChild(
        document.createTextNode(species)
    );

    paragraph.append(divChildFirst, "-", divChildSecond);

    header.append(span, paragraph);

    return header;
}

const createMainInformationsContainer = (originName) => {
    const main = document.createElement('main');
    const paragraphFirst = document.createElement('p');
    const paragraphSecond = document.createElement('p');

    paragraphFirst.appendChild(
        document.createTextNode('Last known location')
    );

    paragraphSecond.appendChild(
        document.createTextNode(originName)
    );

    main.append(paragraphFirst, paragraphSecond);

    return main;
}

const createFooterInformationsContainer = (episodeTitle) => {
    const footer = document.createElement('footer');
    const paragraphFirst = document.createElement('p');
    const paragraphSecond = document.createElement('p');

    paragraphFirst.appendChild(
        document.createTextNode('First seen in:')
    );

    paragraphSecond.appendChild(
        document.createTextNode(episodeTitle)
    );

    footer.append(paragraphFirst, paragraphSecond);

    return footer;
}