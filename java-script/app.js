const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');

    const navLinks = document.querySelectorAll('.nav-links li')



    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');

        // burger animation
        burger.classList.toggle('toggle');


        navLinks.forEach((link, i) => {
            if (link.style.animation) {
                link.style.animation = ''
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${i/5 +.3}s`
            }
        })
    })
}



navSlide()