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
