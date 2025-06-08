(function () {
    "use strict";

    var karla = {
        init: function () {
            this.initKarlaSlider();
            this.initTestimonialsSlider();
        },
       
        initKarlaSlider: function (selector) {
            this.swiper = new Swiper('.karla-slider', {
                loop: true,
                autoplay: {
                  delay: 4000,
                  disableOnInteraction: false,
                },
                pagination: {
                  el: '.swiper-pagination',
                  clickable: true,
                },
                navigation: {
                  nextEl: '.swiper-button-next',
                  prevEl: '.swiper-button-prev',
                },
                speed: 600,
                slidesPerView: 1,
                spaceBetween: 10,

                breakpoints: {
                  768: {
                    slidesPerView: 2,
                    spaceBetween: 15,
                  },
                  992: {
                    slidesPerView: 3,
                    spaceBetween: 20,
                  }
                }
            });
        },
        initTestimonialsSlider: function(selector) {
            this.swiper = new Swiper('.testimonials-swiper', {
                loop: true,
                autoplay: {
                    delay: 4000,
                    disableOnInteraction: false,
                },
                pagination: {
                    el: '.testimonials-swiper .swiper-pagination',
                    clickable: true,
                },
                speed: 600,
                slidesPerView: 1,
                spaceBetween: 10,
            });
        }

    };


    document.querySelectorAll('.bg-img, section').forEach(function(section) {
        var bg = section.getAttribute('data-background');
        if (bg) {
            section.style.backgroundImage = 'url(' + bg + ')';
        }
    });

    document.addEventListener('DOMContentLoaded', function() {
        karla.init();
    
        // Аккордеон
        const titles = document.querySelectorAll('.faqs-accordion .accordion .title');

        titles.forEach(title => {
            title.addEventListener('click', () => {
            const item = title.parentElement; // .item
            const info = item.querySelector('.accordion-info');

            // Проверяем, открыт ли уже этот блок
            const isActive = info.style.display === 'block';

            // Сначала закрываем все открытые
            document.querySelectorAll('.faqs-accordion .accordion .accordion-info').forEach(el => {
                el.style.display = 'none';
            });
            document.querySelectorAll('.faqs-accordion .accordion .item').forEach(el => {
                el.classList.remove('active');
            });

            // Если блок не был открыт, открываем его
            if (!isActive) {
                info.style.display = 'block';
                item.classList.add('active');
            }
            });
        });

        // Фильтрация
        const filterItems = document.querySelectorAll('.karla-toolbar-item');
        const galleryItems = document.querySelectorAll('.karla-gallery-item');

        filterItems.forEach(filter => {
            filter.addEventListener('click', e => {
            e.preventDefault();

            // Убираем active со всех фильтров
            filterItems.forEach(i => i.classList.remove('active'));

            // Добавляем active к выбранному
            filter.classList.add('active');

            const filterValue = filter.getAttribute('data-filter');

            galleryItems.forEach(item => {
                if (filterValue === 'all') {
                item.style.display = 'block'; // Показываем все
                } else {
                // Показываем только элементы с нужным классом
                if (item.classList.contains(filterValue)) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
                }
            });
            });
        });
    });

})();