// Функция для создания бегущей строки
function createMarquee(containerId, text, repeatCount = 25) {
    const container = document.getElementById(containerId);
    if (!container) return;
    
    let html = '';
    for (let i = 0; i < repeatCount; i++) {
        html += `<span class="text-item">${text}</span>`;
        if (i < repeatCount - 1) {
            html += `<span class="plus-item"> + </span>`;
        }
    }
    
    container.innerHTML = html;
}

// Создаем обе бегущие строки при загрузке страницы
document.addEventListener('DOMContentLoaded', function() {
    // Верхняя строка
    createMarquee('marqueeContent', 'Добро пожаловать', 25);
    
    // Нижняя строка в футере
    createMarquee('marqueeContent2', 'Добро пожаловать', 25);
});



// burger.js
document.addEventListener('DOMContentLoaded', function() {
    const burgerBtn = document.querySelector('.burger-btn');
    const closeBtn = document.querySelector('.close-btn');
    const mobileMenu = document.querySelector('.mobile-menu');
    const body = document.body;
    const mobileLinks = document.querySelectorAll('.mobile-nav a, .mobile-contacts a');
    
    // Открытие меню
    burgerBtn.addEventListener('click', function() {
        mobileMenu.classList.add('active');
        burgerBtn.classList.add('active');
        body.classList.add('menu-open');
    });
    
    // Закрытие меню
    function closeMenu() {
        mobileMenu.classList.remove('active');
        burgerBtn.classList.remove('active');
        body.classList.remove('menu-open');
    }
    
    closeBtn.addEventListener('click', closeMenu);
    
    // Закрытие при клике на ссылку
    mobileLinks.forEach(link => {
        link.addEventListener('click', closeMenu);
    });
    
    // Закрытие при клике вне меню
    mobileMenu.addEventListener('click', function(e) {
        if (e.target === mobileMenu) {
            closeMenu();
        }
    });
    
    // Закрытие по ESC
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeMenu();
        }
    });
});