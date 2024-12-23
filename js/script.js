
$(document).ready(function(){
    if(!$('.services-slid-2')) {
        return 0
    } else {
        $('.services-slid-2').slick({
            slidesToShow: 3,
            slidesToScroll: 2,
            infinite: true,
            speed: 1000,
            dots: true,
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        dots: true,
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        dots: true,
                    }
                },
                {
                    breakpoint: 575,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        dots: false,
                    }
                }
            ]
        });        
    }
    if(!$('#servicesSlid-1')) {
        return 0
    } else {
        $('#servicesSlid-1').slick({
            slidesToShow: 3,
            slidesToScroll: 2,
            infinite: true,
            speed: 1000,
            dots: true,
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        dots: true,
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        dots: true,
                    }
                },
                {
                    breakpoint: 575,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        dots: false,
                    }
                }
            ]
        });        
    }


    if($('.precentetion-slider')) {
        $('.precentetion-slider').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            speed: 1000,
            dots: true,
            fade: true,
            cssEase: 'linear'
        })
    }
    $('.slick-next.slick-arrow').addClass('btn-arrow').html(`
            <span class="arrows">
                 <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                     <path d="M10.064 0.0528181L6.77181 0.119196C6.69281 0.120871 6.61413 0.138175 6.54031 0.170109C6.46649 0.202044 6.399 0.247977 6.34171 0.30526C6.28443 0.362542 6.2385 0.430039 6.20656 0.503859C6.17463 0.577678 6.15732 0.656358 6.15565 0.735359C6.15212 0.893464 6.21131 1.04338 6.32028 1.15235C6.42926 1.26133 6.57917 1.32052 6.73728 1.31699L9.76291 1.25313L0.915324 10.1007C0.800242 10.2158 0.733333 10.3696 0.729317 10.5284C0.7253 10.6871 0.784506 10.8377 0.893908 10.9471C1.00331 11.0565 1.15395 11.1157 1.31268 11.1117C1.47142 11.1077 1.62525 11.0408 1.74033 10.9257L10.614 2.05209L10.5323 5.11201C10.53 5.19103 10.5433 5.26893 10.5716 5.34123C10.5998 5.41353 10.6424 5.47879 10.6968 5.53324C10.7513 5.5877 10.8165 5.63027 10.8888 5.65851C10.9611 5.68675 11.039 5.70009 11.1181 5.69777C11.1971 5.69609 11.2757 5.67879 11.3496 5.64685C11.4234 5.61492 11.4909 5.56898 11.5482 5.5117C11.6054 5.45442 11.6514 5.38692 11.6833 5.3131C11.7152 5.23928 11.7325 5.1606 11.7342 5.0816L11.813 1.80183C11.8247 1.32602 11.6471 0.874563 11.3192 0.546622C10.9912 0.218681 10.5398 0.0410755 10.064 0.0528181Z" fill="#0F0F0F" style="fill:#0F0F0F;fill:color(display-p3 0.0588 0.0588 0.0588);fill-opacity:1;"/>
                 </svg>      
             </span>  
    `)
    $('.slick-prev.slick-arrow').addClass('btn-arrow').html(`
        <span class="arrows">
            <svg width="14" height="12" viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0.324085 3.13866L0.92537 6.43567C0.939887 6.51478 0.971109 6.59136 1.01723 6.661C1.06336 6.73064 1.12348 6.79196 1.19411 6.84142C1.26475 6.89088 1.34452 6.92751 1.4288 6.94918C1.51309 6.97086 1.60024 6.97716 1.68521 6.96771C1.85529 6.94899 2.00649 6.86844 2.10578 6.74364C2.20507 6.61884 2.24439 6.45995 2.21514 6.30166L1.65947 3.27196L12.5701 10.9117C12.712 11.011 12.8877 11.0566 13.0585 11.0382C13.2294 11.0199 13.3813 10.9392 13.481 10.814C13.5807 10.6887 13.6199 10.529 13.5901 10.3702C13.5602 10.2113 13.4637 10.0663 13.3218 9.9669L2.37905 2.30472L5.67288 1.95577C5.75798 1.94697 5.83935 1.9226 5.91232 1.88406C5.98528 1.84552 6.0484 1.79357 6.09801 1.73121C6.14763 1.66885 6.18276 1.59731 6.2014 1.52073C6.22003 1.44414 6.22179 1.36402 6.20658 1.28499C6.19206 1.20588 6.16084 1.1293 6.11471 1.05966C6.06859 0.99002 6.00847 0.9287 5.93783 0.879238C5.86719 0.829776 5.78743 0.793151 5.70314 0.771475C5.61886 0.749799 5.53171 0.743501 5.44674 0.752945L1.91765 1.13577C1.40562 1.19099 0.950192 1.43294 0.651397 1.80849C0.352602 2.18403 0.234878 2.66245 0.324085 3.13866Z" fill="#0F0F0F" style="fill:#0F0F0F;fill:color(display-p3 0.0588 0.0588 0.0588);fill-opacity:1;"/>
            </svg> 
         </span>  
    `)

    var scene = document.getElementById('scene');
    if (scene) {
        var parallaxInstance = new Parallax(scene);
    } else {
        console.log("Элемент с ID 'scene' не найден.");
    }

    var scene2 = document.getElementById('scene2');
    if (scene2) {
        var parallaxInstance2 = new Parallax(scene2);
    } else {
        console.log("Элемент с ID 'scene2' не найден.");
    }
});


function activateButton(selectedRadio) {
    const allOptions = document.querySelectorAll('.radio-option');
    allOptions.forEach(option => {
      option.classList.remove('active');
    });
  
    const parentOption = selectedRadio.closest('.radio-option');
    parentOption.classList.add('active');
  }

  let lastScrollTop = 0; // Переменная для отслеживания предыдущей позиции прокрутки

// Функция, которая проверяет, виден ли элемент
function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Функция для добавления/удаления класса видимости в зависимости от направления прокрутки
function toggleVisibility() {
    const boxes = document.querySelectorAll('.box');
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    boxes.forEach((box) => {
        if (isElementInViewport(box)) {
            if (scrollTop > lastScrollTop) {
                // Прокрутка вниз
                box.classList.add('visible', 'from-bottom');
                box.classList.remove('from-top');
            } else {
                // Прокрутка вверх
                box.classList.add('visible', 'from-top');
                box.classList.remove('from-bottom');
            }
        } else {
            box.classList.remove('visible', 'from-top', 'from-bottom');
        }
    });

    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // Обновляем значение последней позиции прокрутки
}

// Запуск проверки при загрузке и прокрутке страницы
window.addEventListener('scroll', toggleVisibility);
window.addEventListener('load', toggleVisibility);


var headerWidth = $('.header').height()
$('.main').css({'margin-top': Math.round(headerWidth) + 'px'})

$('#burgerMenu').on('click', function() {
    $('.mobile-menu').toggleClass('active')
    $('.burger-menu').toggleClass('active')
    $('body').toggleClass('dont-scrolle')
})

$('.callback').on('click', function() {
    $('.modal-window').toggleClass('active')
    $('body').toggleClass('dont-scrolle')
})
// $('.modal-window__close').on('click', function() {
//     $('.modal-window').toggleClass('active')
//     $('body').toggleClass('dont-scrolle')
// })
$('.modal-window').on('click', function() {
    $('.modal-window').toggleClass('active')
    $('body').toggleClass('dont-scrolle')
})
$('.modal-window__body').on('click', function(e) {
    e.stopPropagation();
})


document.addEventListener("DOMContentLoaded", () => {
    const roadmap = document.querySelector(".roadmap");

    if (!roadmap) {
        console.log("Элемент с классом 'roadmap' не найден.");
        return;
    }

    const roadmapItems = document.querySelectorAll(".roadmap-item");
    const roadmapLine = document.createElement("style");

    function updateRoadmapLine() {
        if (roadmapItems.length === 0) return; // Проверяем, что элементы существуют

        let totalHeight = 0;
        roadmapItems.forEach((item) => {
            totalHeight += item.offsetHeight;
        });

        const gapHeight = 70 * (roadmapItems.length - 1);
        const finalHeight = totalHeight + gapHeight;

        const firstCircle = roadmapItems[0].querySelector(".circle");
        const startY = firstCircle.offsetTop + firstCircle.offsetHeight / 2;

        roadmapLine.innerHTML = `
            .roadmap::after {
                height: ${finalHeight - 40}px;
                top: ${startY}px;
            }
        `;
    }

    document.head.appendChild(roadmapLine);
    updateRoadmapLine();

    new MutationObserver(updateRoadmapLine).observe(roadmap, { childList: true });
});

  document.addEventListener("DOMContentLoaded", () => {
    // Получаем все кнопки с классом services-filter__btn
    const buttons = document.querySelectorAll(".services-filter__btn");
  
    // Добавляем обработчик события для каждой кнопки
    buttons.forEach((button) => {
      button.addEventListener("click", () => {
        // Убираем класс active у всех кнопок
        buttons.forEach((btn) => btn.classList.remove("active"));
  
        // Добавляем класс active на нажатую кнопку
        button.classList.add("active");
      });
    });
  });

// Для карточек с вопросами
const queshionBlocks = document.querySelectorAll('.vacancy__card')
const questionButton = document.querySelectorAll('.queshion-btn')


for(let i = 0; i < queshionBlocks.length; i ++) {
    queshionBlocks[i].addEventListener('click', () => {
        
        if(!queshionBlocks[i].childNodes[1].childNodes[3].classList.contains('active')) {
            queshionBlocks[i].childNodes[1].childNodes[3].classList.add('active')
            queshionBlocks[i].childNodes[3].classList.add('active')
        } else {
            queshionBlocks[i].childNodes[1].childNodes[3].classList.remove('active')
            queshionBlocks[i].childNodes[3].classList.remove('active')
        }
        
    })
}