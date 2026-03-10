// js/configurator.js
document.addEventListener('DOMContentLoaded', function() {
    // База данных компонентов
    const components = {
        case: [
            {
                id: 1,
                name: "JONSBO VR3 MINI ITX TYPE-C",
                price: 8990,
                image: "images/pc/JONSBO VR3 MINI ITX TYPE-C.png",
                thumb: "images/pc/JONSBO VR3 MINI ITX TYPE-C.png",
                description: "Корпус Mini-ITX"
            },
            {
                id: 2,
                name: "JONSBO C6 Handle",
                price: 7490,
                image: "images/pc/JONSBO C6 Handle.png",
                thumb: "images/pc/JONSBO C6 Handle.png",
                description: "Корпус с ручкой"
            },
            {
                id: 3,
                name: "JONSBO MOD-3 Mini White TG",
                price: 10990,
                image: "images/pc/JONSBO MOD-3 Mini White TG.png",
                thumb: "images/pc/JONSBO MOD-3 Mini White TG.png",
                description: "Корпус модификационный"
            },
            {
                id: 4,
                name: "Jonsbo U4 ATX",
                price: 8490,
                image: "images/pc/Jonsbo U4 ATX.png",
                thumb: "images/pc/Jonsbo U4 ATX.png",
                description: "Корпус ATX"
            },
            {
                id: 5,
                name: "1STPLAYER ZX8",
                price: 6990,
                image: "images/pc/1STPLAYER ZX8.png",
                thumb: "images/pc/1STPLAYER ZX8.png",
                description: "Игровой корпус"
            }
        ],
        motherboard: [
            {
                id: 1,
                name: "ASUS ROG STRIX B550-I",
                price: 18990,
                description: "Mini-ITX, AM4, Wi-Fi 6"
            },
            {
                id: 2,
                name: "MSI B550 GAMING EDGE",
                price: 15990,
                description: "ATX, AM4, 2.5G LAN"
            },
            {
                id: 3,
                name: "GIGABYTE Z690 AORUS",
                price: 24990,
                description: "ATX, LGA1700, DDR5"
            }
        ],
        cpu: [
            {
                id: 1,
                name: "AMD Ryzen 5 5600X",
                price: 18990,
                description: "6 ядер, 4.6 ГГц, AM4"
            },
            {
                id: 2,
                name: "Intel Core i5-12600K",
                price: 22990,
                description: "10 ядер, 4.9 ГГц, LGA1700"
            },
            {
                id: 3,
                name: "AMD Ryzen 7 5800X3D",
                price: 32990,
                description: "8 ядер, 4.5 ГГц, 3D V-Cache"
            }
        ],
        cooler: [  // Охлаждение процессора
            {
                id: 1,
                name: "DEEPCOOL AK620",
                price: 5490,
                description: "Башенный кулер, 260W TDP"
            },
            {
                id: 2,
                name: "ARCTIC Liquid Freezer II 240",
                price: 7990,
                description: "СЖО 240mm, RGB"
            },
            {
                id: 3,
                name: "NOCTUA NH-D15",
                price: 10990,
                description: "Топовый воздушный кулер"
            },
            {
                id: 4,
                name: "Cooler Master Hyper 212",
                price: 3490,
                description: "Бюджетный башенный кулер"
            },
            {
                id: 5,
                name: "NZXT Kraken X63",
                price: 11990,
                description: "СЖО 280mm, LCD дисплей"
            }
        ],
        gpu: [
            {
                id: 1,
                name: "NVIDIA RTX 4060 Ti",
                price: 45990,
                description: "8GB GDDR6, DLSS 3"
            },
            {
                id: 2,
                name: "AMD RX 7800 XT",
                price: 54990,
                description: "16GB GDDR6, Ray Tracing"
            },
            {
                id: 3,
                name: "NVIDIA RTX 4070 SUPER",
                price: 68990,
                description: "12GB GDDR6X, 4K gaming"
            },
            {
                id: 4,
                name: "NVIDIA RTX 4080 SUPER",
                price: 99990,
                description: "16GB GDDR6X, 4K Ultra"
            },
            {
                id: 5,
                name: "AMD RX 7900 XTX",
                price: 87990,
                description: "24GB GDDR6, 4K gaming"
            }
        ],
        psu: [  // Блок питания
            {
                id: 1,
                name: "SEASONIC FOCUS GX-750",
                price: 10990,
                description: "750W, 80+ Gold, модульный"
            },
            {
                id: 2,
                name: "CORSAIR RM850x",
                price: 14990,
                description: "850W, 80+ Gold, тихий"
            },
            {
                id: 3,
                name: "BE QUIET! Straight Power 11",
                price: 12990,
                description: "750W, 80+ Platinum"
            },
            {
                id: 4,
                name: "ASUS ROG STRIX 1000W",
                price: 18990,
                description: "1000W, 80+ Gold, RGB"
            },
            {
                id: 5,
                name: "Cooler Master V850",
                price: 11990,
                description: "850W, 80+ Gold, SFX-L"
            }
        ],
        ram: [
            {
                id: 1,
                name: "CORSAIR VENGEANCE 32GB",
                price: 8990,
                description: "DDR4 3600MHz, CL18"
            },
            {
                id: 2,
                name: "G.SKILL TRIDENT Z5 32GB",
                price: 12990,
                description: "DDR5 6000MHz, CL36"
            },
            {
                id: 3,
                name: "KINGSTON FURY BEAST 64GB",
                price: 17990,
                description: "DDR5 5600MHz, RGB"
            },
            {
                id: 4,
                name: "Team Group Delta RGB 32GB",
                price: 10990,
                description: "DDR5 6000MHz, RGB подсветка"
            },
            {
                id: 5,
                name: "Crucial Pro 32GB",
                price: 7990,
                description: "DDR5 5600MHz, без подсветки"
            }
        ],
        storage: [  // Накопитель
            {
                id: 1,
                name: "SAMSUNG 980 PRO 1TB",
                price: 8990,
                description: "NVMe M.2, 7000 МБ/с"
            },
            {
                id: 2,
                name: "WD BLACK SN850X 2TB",
                price: 14990,
                description: "NVMe M.2, 7300 МБ/с"
            },
            {
                id: 3,
                name: "CRUCIAL P3 PLUS 4TB",
                price: 21990,
                description: "NVMe M.2, 5000 МБ/с"
            },
            {
                id: 4,
                name: "Kingston KC3000 2TB",
                price: 12990,
                description: "NVMe M.2, 7000 МБ/с"
            },
            {
                id: 5,
                name: "Seagate FireCuda 530 1TB",
                price: 10990,
                description: "NVMe M.2, 7300 МБ/с"
            }
        ]
    };

    // Текущая конфигурация
    let currentConfig = {};

    // Инициализация
    initConfigurator();

    function initConfigurator() {
        setupEventListeners();
        updateTotalPrice();
    }

    function setupEventListeners() {
        // Обработчики для всех блоков компонентов
        document.querySelectorAll('.complection-item').forEach(item => {
            item.addEventListener('click', function(e) {
                // Не открываем выпадающий список если клик был по уже открытому дропдауну
                if (e.target.closest('.dropdown-content') || e.target.closest('.dropdown-item')) {
                    return;
                }
                
                const componentType = this.dataset.component;
                const isSelected = this.classList.contains('selected');
                
                // Закрываем все остальные выпадающие списки
                closeAllDropdowns();
                
                // Показываем выпадающий список для выбора или изменения
                showDropdown(this, componentType, isSelected);
            });
        });

        // Закрытие выпадающих списков при клике вне
        document.addEventListener('click', function(e) {
            if (!e.target.closest('.complection-item')) {
                closeAllDropdowns();
            }
        });
    }

    function showDropdown(item, componentType, isSelected) {
        // Получаем выпадающий список
        let dropdown = item.querySelector('.component-dropdown');
        
        // Если дропдаун не существует (для уже выбранных элементов), создаем его
        if (!dropdown && isSelected) {
            dropdown = document.createElement('div');
            dropdown.className = 'component-dropdown';
            dropdown.style.display = 'none';
            
            const section = item.querySelector('.complection-section');
            if (section) {
                section.appendChild(dropdown);
            }
        }
        
        // Если уже открыт - закрываем
        if (dropdown && dropdown.style.display === 'block') {
            dropdown.style.display = 'none';
            return;
        }
        
        // Создаем или обновляем содержимое выпадающего списка
        let dropdownContent;
        if (dropdown) {
            dropdownContent = dropdown.querySelector('.dropdown-content');
            if (!dropdownContent) {
                dropdownContent = document.createElement('div');
                dropdownContent.className = 'dropdown-content';
                dropdown.innerHTML = '';
                dropdown.appendChild(dropdownContent);
            }
        } else {
            // Для невыбранных элементов получаем существующий дропдаун
            dropdown = item.querySelector('.component-dropdown');
            if (!dropdown) return;
            
            dropdownContent = dropdown.querySelector('.dropdown-content');
            if (!dropdownContent) {
                dropdownContent = document.createElement('div');
                dropdownContent.className = 'dropdown-content';
                dropdown.innerHTML = '';
                dropdown.appendChild(dropdownContent);
            }
        }
        
        // Заполняем выпадающий список
        dropdownContent.innerHTML = '';
        
        components[componentType].forEach(component => {
            const dropdownItem = document.createElement('div');
            dropdownItem.className = 'dropdown-item';
            dropdownItem.innerHTML = `
                <div style="display: flex; justify-content: space-between; align-items: center; padding: 12px 15px;">
                    <div>
                        <div style="font-weight: 500; color: white; font-size: 16px;">${component.name}</div>
                        <div style="font-size: 14px; color: rgba(255,255,255,0.8); margin-top: 4px;">${component.description}</div>
                    </div>
                    <div style="font-weight: 600; color: white; font-size: 18px;">${component.price.toLocaleString()}₽</div>
                </div>
            `;
            
            // Подсветка текущего выбранного компонента
            if (currentConfig[componentType] && currentConfig[componentType].id === component.id) {
                dropdownItem.style.backgroundColor = 'rgba(255, 255, 255, 0.15)';
                dropdownItem.style.borderLeft = '3px solid #ffffff';
            }
            
            dropdownItem.addEventListener('click', function(e) {
                e.stopPropagation();
                selectComponent(item, componentType, component);
                dropdown.style.display = 'none';
            });
            
            dropdownContent.appendChild(dropdownItem);
        });
        
        // Показываем выпадающий список
        dropdown.style.display = 'block';
    }

    function selectComponent(item, componentType, component) {
        const isAlreadySelected = item.classList.contains('selected');
        
        if (isAlreadySelected) {
            // Если компонент уже выбран, просто обновляем данные
            updateSelectedComponent(item, componentType, component);
        } else {
            // Если компонент еще не выбран, меняем структуру блока
            const oldDiv = item.querySelector('.complection-start-image');
            if (oldDiv) {
                const newDiv = document.createElement('div');
                newDiv.className = 'complection-section';
                newDiv.innerHTML = `
                    <div style="border-bottom: 2px solid #fff; display: flex; align-items: center; padding-bottom: 5px;">
                        <p class="complection-head">${getComponentTitle(componentType)}</p>
                        <p class="complection-name">${component.description}</p>
                        <p class="complection-price">${component.price.toLocaleString()}₽</p>
                    </div>
                    <div class="component-dropdown" style="display: none;"></div>
                `;
                
                oldDiv.parentNode.replaceChild(newDiv, oldDiv);
            }
        }
        
        // Добавляем класс selected
        item.classList.add('selected');
        
        // Сохраняем в конфигурацию
        currentConfig[componentType] = component;
        
        // Обновляем главное изображение для корпуса
        if (componentType === 'case') {
            updateMainImage(component);
        }
        
        // Обновляем общую цену
        updateTotalPrice();
        
        // ========== Отправка события в Яндекс.Метрику ==========
        // Отправляем событие о выборе компонента
        if (typeof ym !== 'undefined') {
            // Рассчитываем текущую общую сумму
            const total = Object.values(currentConfig).reduce((sum, c) => sum + (c.price || 0), 0);
            
            ym(107226571, 'reachGoal', 'component_selected', {
                component_type: componentType,           // Тип компонента (case, cpu, gpu и т.д.)
                component_id: component.id,              // ID компонента
                component_name: component.name,          // Название компонента
                component_price: component.price,        // Цена компонента
                total_price: total                        // Общая цена сборки
            });
            
            // Для отладки - можно убрать после проверки
            console.log('Метрика: выбран компонент', componentType, component.name);
        }
        // ========== конец ==========
        
        // Обновляем обработчики событий для нового элемента
        setupEventListenersForItem(item);
    }

    function updateSelectedComponent(item, componentType, component) {
        // Обновляем изображение (для корпуса)
        if (componentType === 'case') {
            const img = item.querySelector('img');
            if (img) {
                img.src = component.thumb || component.image;
                img.alt = component.name;
            }
        }
        
        // Обновляем описание
        const nameElement = item.querySelector('.complection-name');
        if (nameElement) {
            nameElement.textContent = component.description;
        }
        
        // Обновляем цену
        const priceElement = item.querySelector('.complection-price');
        if (priceElement) {
            priceElement.textContent = component.price.toLocaleString() + '₽';
            // Анимация обновления цены
            priceElement.classList.add('price-updated');
            setTimeout(() => {
                priceElement.classList.remove('price-updated');
            }, 500);
        }
        
        // Обновляем конфигурацию
        currentConfig[componentType] = component;
        
        // Обновляем главное изображение для корпуса
        if (componentType === 'case') {
            updateMainImage(component);
        }
        
        // Обновляем общую цену
        updateTotalPrice();
    }

    function setupEventListenersForItem(item) {
        // Убираем старые обработчики и добавляем новые
        item.replaceWith(item.cloneNode(true));
        
        // Добавляем обработчик для нового элемента
        const newItem = document.querySelector(`[data-component="${item.dataset.component}"]`);
        if (newItem) {
            newItem.addEventListener('click', function(e) {
                if (e.target.closest('.dropdown-content') || e.target.closest('.dropdown-item')) {
                    return;
                }
                
                const componentType = this.dataset.component;
                closeAllDropdowns();
                showDropdown(this, componentType, true);
            });
        }
    }

    function getComponentTitle(type) {
        const titles = {
            case: 'Корпус:',
            cpu: 'Процессор:',
            motherboard: 'Материнская плата:',
            cooler: 'Охлаждение процессора:',
            gpu: 'Видеокарта:',
            psu: 'Блок питания:',
            ram: 'Оперативная память:',
            storage: 'Накопитель:'
        };
        return titles[type] || type + ':';
    }

    function updateMainImage(component) {
        const mainImage = document.getElementById('mainCaseImage');
        if (mainImage && component.image) {
            mainImage.src = component.image;
            mainImage.alt = component.name;
            // Плавное изменение изображения
            mainImage.style.opacity = '0.5';
            setTimeout(() => {
                mainImage.style.opacity = '1';
            }, 100);
        }
    }

    function updateTotalPrice() {
        let total = 0;
        
        // Суммируем цены всех выбранных компонентов
        Object.values(currentConfig).forEach(component => {
            if (component && component.price) {
                total += component.price;
            }
        });
        
        // Обновляем отображение
        const totalPriceElement = document.getElementById('totalPrice');
        if (totalPriceElement) {
            totalPriceElement.textContent = total.toLocaleString() + '₽';
            
            // Анимация изменения общей цены
            totalPriceElement.classList.add('total-price-updated');
            setTimeout(() => {
                totalPriceElement.classList.remove('total-price-updated');
            }, 500);
        }
    }

    function closeAllDropdowns() {
        document.querySelectorAll('.component-dropdown').forEach(dropdown => {
            dropdown.style.display = 'none';
        });
    }

});

