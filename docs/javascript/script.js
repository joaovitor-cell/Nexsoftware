
        // 1. Encontra os elementos no HTML
        const hamburgerBtn = document.getElementById('menu-hamburger');
        const navLinks = document.getElementById('nav-links');

        // 2. Adiciona o "escutador" de clique no botão
        hamburgerBtn.addEventListener('click', () => {
            // Adiciona ou remove a classe 'active' nos dois elementos
            navLinks.classList.toggle('active');
            hamburgerBtn.classList.toggle('active');
        });

        // 3. (Bônus) Fechar o menu ao clicar em um link
        // Encontra TODOS os links 'a' dentro do menu
        const allNavLinks = navLinks.querySelectorAll('a');

        // Adiciona um "escutador" em CADA um deles
        allNavLinks.forEach(link => {
            link.addEventListener('click', () => {
                // Remove a classe 'active' para fechar o menu
                navLinks.classList.remove('active');
                hamburgerBtn.classList.remove('active');
            });
        });