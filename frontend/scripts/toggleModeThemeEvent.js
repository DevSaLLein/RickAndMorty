export const toggleModeThemeEvent = () => {

    const toggleButton = document.querySelector("[rel='js-toggle-button']");
    toggleButton.addEventListener('click', () => {
        toggleButton.childNodes.item(1).classList.toggle('sun')

        document.body.classList.toggle('darkModeTheme')
    })
}