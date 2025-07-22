document.addEventListener('DOMContentLoaded', function() {
    // Filtro do portfólio
    const filtroBtns = document.querySelectorAll('.filtro-btn');
    const portfolioItems = document.querySelectorAll('.portfolio-item');
    
    filtroBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // Remove active de todos os botões
            filtroBtns.forEach(b => b.classList.remove('active'));
            // Adiciona active no botão clicado
            this.classList.add('active');
            
            const categoria = this.dataset.categoria;
            
            // Filtra os itens
            portfolioItems.forEach(item => {
                if (categoria === 'todos' || item.dataset.categoria === categoria) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });
    
    // Smooth scroll para links do menu
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 100,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Efeito de scroll no header
    window.addEventListener('scroll', function() {
        const header = document.querySelector('header');
        if (window.scrollY > 100) {
            header.style.boxShadow = '0 4px 10px rgba(0,0,0,0.1)';
        } else {
            header.style.boxShadow = 'none';
        }
    });
    
    // Atualiza o ano no footer
    const yearSpan = document.querySelector('#current-year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }
});