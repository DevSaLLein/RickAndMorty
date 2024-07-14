export const navbarScroll = () => {

    window.addEventListener('scroll', () => {
        const nav = document.querySelector('nav');

        if((window.scrollY + 350) > window.innerHeight) nav.classList.add('navbar-active');
        else nav.classList.remove('navbar-active');
    })

    const sections = document.querySelectorAll('.section');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            const li = document.querySelector(`.${entry.target.id}`);

            if (entry.isIntersecting) li.classList.add('active');
            else li.classList.remove('active');
        });
    }, {
        threshold: 0
    });

    sections.forEach(section => {
        observer.observe(section);
    });
};