// Espera o carregamento completo do DOM antes de executar o código
document.addEventListener('DOMContentLoaded', () => {

    // Seleciona o ícone do menu (hambúrguer ou similar)
    let menuIcone = document.querySelector('#menu-icon');
    // Seleciona a barra de navegação
    let navbar = document.querySelector('.navbar');

    // Ao clicar no ícone do menu:
    menuIcone.onclick = () => {
        // Alterna a classe 'fa-xmark' no ícone (troca entre ícone de menu e "X")
        menuIcone.classList.toggle('fa-xmark');
        // Alterna a classe 'active' na navbar (mostra/esconde menu)
        navbar.classList.toggle('active');
    }

    // Seleciona todas as seções da página
    let sections = document.querySelectorAll('section');
    // Seleciona todos os links dentro do nav do header
    let navLinks = document.querySelectorAll('header nav a');

    // Executa quando a página é rolada
    window.onscroll = () => {
        // Para cada seção da página
        sections.forEach(sec => {
            let top = window.scrollY; // Pega a posição atual do scroll
            let offset = sec.offsetTop - 150; // Define o ponto de ativação da seção
            let height = sec.offsetHeight; // Pega a altura da seção
            let id = sec.getAttribute('id'); // Obtém o ID da seção

            // Verifica se o scroll está dentro da área da seção
            if (top > offset && top < offset + height) { 
                // Remove a classe 'active' de todos os links
                navLinks.forEach(link => {
                    link.classList.remove('active');
                });

                // Adiciona a classe 'active' apenas ao link correspondente à seção atual
                let activeLink = document.querySelector(`header nav a[href*="${id}"]`);
                if (activeLink) activeLink.classList.add('active');
            }
        });

        // Torna o cabeçalho "sticky" (fixo no topo) quando rolar mais de 100px
        let header = document.querySelector('header');
        header.classList.toggle('sticky', window.scrollY > 100);
    };

    // Fecha o menu automaticamente ao clicar em um link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            menuIcone.classList.remove('fa-xmark');
            navbar.classList.remove('active');
        });
    });

    // Configuração do ScrollReveal (biblioteca de animações de rolagem)
    ScrollReveal({
        distance: '80px',  // Distância que o elemento se move ao aparecer
        duration: 200,     // Duração da animação em ms
        delay: 200,        // Atraso antes de iniciar a animação
    });

    ScrollReveal({
        distance: '50px',
        duration: 1000,
        delay: 200,
        reset: true // Faz a animação se repetir ao rolar novamente
    });
    
    // Elementos revelados de cima para baixo
    ScrollReveal().reveal('.home-content, .cabecalho', { origin: 'top' });
    
    // Elementos revelados de baixo para cima
    ScrollReveal().reveal('.home-img, .projetos, .contato form', { origin: 'bottom' });
    
    // Elementos revelados da esquerda para direita
    ScrollReveal().reveal('.home-content h1, .sobre img', { origin: 'left' });
    
    // Elementos revelados da direita para esquerda
    ScrollReveal().reveal('.home p, .sobre-content', { origin: 'right' });
    
});
