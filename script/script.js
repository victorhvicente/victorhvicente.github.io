document.addEventListener('DOMContentLoaded', () => {
    let menuIcone = document.querySelector('#menu-icon');
    let navbar = document.querySelector('.navbar');

    menuIcone.onclick = () => {
        menuIcone.classList.toggle('fa-xmark');
        navbar.classList.toggle('active');
    }

    let sections = document.querySelectorAll('section');
    let navLinks = document.querySelectorAll('header nav a');

    window.onscroll = () => {
        sections.forEach(sec => {
            let top = window.scrollY;
            let offset = sec.offsetTop - 150;
            let height = sec.offsetHeight;
            let id = sec.getAttribute('id');

            if (top > offset && top < offset + height) { 
                navLinks.forEach(link => {
                    link.classList.remove('active');
                });

                let activeLink = document.querySelector(`header nav a[href*="${id}"]`);
                if (activeLink) activeLink.classList.add('active');
            }
        });

        // Sticky navbar
        let header = document.querySelector('header');
        header.classList.toggle('sticky', window.scrollY > 100);
    };

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            menuIcone.classList.remove('fa-xmark');
            navbar.classList.remove('active');
        });
    });

    //Scroll Reveal
    ScrollReveal({
        distance: '80px',
        duration: 200,
        delay: 200,
    });

    ScrollReveal({
        distance: '50px',
        duration: 1000,
        delay: 200,
        reset: true // Permite que a animação ocorra novamente ao rolar a página
    });
    
    // Elementos revelados do topo
    ScrollReveal().reveal('.home-content, .cabecalho', { origin: 'top' });
    
    // Elementos revelados de baixo
    ScrollReveal().reveal('.home-img, .projetos, .contato form', { origin: 'bottom' });
    
    // Elementos revelados da esquerda
    ScrollReveal().reveal('.home-content h1, .sobre img', { origin: 'left' });
    
    // Elementos revelados da direita
    ScrollReveal().reveal('.home p, .sobre-content', { origin: 'right' });
    
    
    
});


