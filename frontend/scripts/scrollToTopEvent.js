export const scrollEventToTop = () => {
    const button = document.querySelector("[rel='js-scroll-to-top-button']");

    button.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

    window.addEventListener('scroll', () => {
        if (window.scrollY > window.innerHeight) button.parentNode.classList.add('activeScrollToTop');
        else button.parentNode.classList.remove('activeScrollToTop');
    });
};