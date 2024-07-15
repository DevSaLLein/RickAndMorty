const convertStringToArray = (string) => {
    return string.split('');
}

export const findCharacter = (string, array) => {

    const characteresFound = [];

    array.forEach(character => {
        const characterConverted = convertStringToArray(character.name.toLowerCase());
        const stringConverted = convertStringToArray(string.toLowerCase());


        if(characterConverted.includes(stringConverted.join(''))) {
            characteresFound.push(character)
        }
    });

    return characteresFound;
}