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
    // Верхняя строка
    createMarquee('marqueeContent', 'Добро пожаловать', 25);
    
    // Нижняя строка в футере
    createMarquee('marqueeContent2', 'Добро пожаловать', 25);

// Функция для загрузки счётчика
function loadYandexMetrica() {
    (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
    m[i].l=1*new Date();k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
    (window, document,'script','https://mc.yandex.ru/metrika/tag.js', 'ym');

    ym(107226571, 'init', {});
    console.log('Счётчик загружен по согласию пользователя');
}

// Проверяем, давал ли пользователь согласие раньше
if (localStorage.getItem('metrika_agreed') === 'yes') {
    loadYandexMetrica();
} else {
    // Показываем баннер
    const notification = document.getElementById('cookie-notification');
    if (notification) {
        notification.style.display = 'block';
    }
}

// Обработчик кнопки согласия
const agreeButton = document.getElementById('agree-button');
if (agreeButton) {
    agreeButton.addEventListener('click', function() {
        // Загружаем счётчик
        loadYandexMetrica();
        // Сохраняем согласие
        localStorage.setItem('metrika_agreed', 'yes');
        // Прячем баннер
        const notification = document.getElementById('cookie-notification');
        if (notification) {
            notification.style.display = 'none';
        }
    });
}


