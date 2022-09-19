/*
Документация по работе в шаблоне: 
Документация слайдера: https://swiperjs.com/
Сниппет(HTML): swiper
*/

// Подключаем слайдер Swiper из node_modules
// При необходимости подключаем дополнительные модули слайдера, указывая их в {} через запятую
// Пример: { Navigation, Autoplay }
import Swiper, { Navigation, EffectCoverflow, Pagination } from "swiper";
/*
Основниые модули слайдера:
Navigation, Pagination, Autoplay, 
EffectFade, Lazy, Manipulation
Подробнее смотри https://swiperjs.com/
*/

// Стили Swiper
// Базовые стили
import "../../scss/base/swiper.scss";
// Полный набор стилей из scss/libs/swiper.scss
// import "../../scss/libs/swiper.scss";
// Полный набор стилей из node_modules
// import 'swiper/css';

// Инициализация слайдеров

function initSliders() {
  // Перечень слайдеров
  // Проверяем, есть ли слайдер на стронице
  if (document.querySelector(".slider-case")) {
    // Указываем скласс нужного слайдера
    // Создаем слайдер
    new Swiper(".slider-case", {
      // Указываем скласс нужного слайдера
      // Подключаем модули слайдера
      // для конкретного случая
      modules: [Navigation],
      observer: true,
      observeParents: true,
      slidesPerView: 4,
      spaceBetween: 24,
      grabCursor: true,
      autoHeight: false,
      speed: 800,

      touchRatio: 0.5,
      simulateTouch: true,
      //loop: true,
      //preloadImages: false,
      lazy: true,

      /*
			// Эффекты
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
			},
			*/

      // Пагинация
      /*
			pagination: {
				el: '.swiper-pagination',
				clickable: true,
			},
			*/

      // Скроллбар
      /*
			scrollbar: {
				el: '.swiper-scrollbar',
				draggable: true,
			},
			*/

      // Кнопки "влево/вправо"
      navigation: {
        prevEl: ".slider-case__button-prev",
        nextEl: ".slider-case__button-next",
      },

      // Брейкпоинты
      breakpoints: {
        320: {
          slidesPerView: 1.25,
          spaceBetween: 17,
          // autoHeight: true,
        },
        768: {
          slidesPerView: 2.5,
          spaceBetween: 20,
        },
        1268: {
          slidesPerView: 4,
          spaceBetween: 30,
        },
      },
      // События
      on: {},
    });
  }
  if (document.querySelector(".reviews-slider")) {
    // Указываем скласс нужного слайдера
    // Создаем слайдер
    new Swiper(".reviews-slider", {
      // Указываем скласс нужного слайдера
      // Подключаем модули слайдера
      // для конкретного случая
      modules: [Navigation, EffectCoverflow, Pagination],
      observer: true,
      observeParents: true,
      slidesPerView: 1.5,
      spaceBetween: 30,
      autoHeight: false,
      speed: 800,
      grabCursor: false,
      allowTouchMove: false,
      // touchRatio: 0.5,
      // simulateTouch: true,
      //loop: true,
      //preloadImages: false,
      lazy: false,
      // effect: 'coverflow',
      coverflowEffect: {
        //   rotate: 70,
        //   slideShadows: false,
        //   depth: 10,
      },
      /*
			// Эффекты
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
			},
			*/

      // Пагинация
      pagination: {
        // el: ".swiper-pagination",
        type: "fraction",
        el: ".slider-controls__pagination",
        clickable: true,
      },
      /*
       */

      // Скроллбар
      /*
			scrollbar: {
				el: '.swiper-scrollbar',
				draggable: true,
			},
			*/

      // Кнопки "влево/вправо"
      navigation: {
        prevEl: ".slider-controls__button-prev",
        nextEl: ".slider-controls__button-next",
      },

      breakpoints: {
      	320: {
              slidesPerView: 1,
              autoHeight: true,
      		spaceBetween: 30,
      	},
      	768: {
      		slidesPerView: 1,
      		spaceBetween: 50,

      	},
      	1268: {
      		slidesPerView: 1.5,
      		spaceBetween: 50,
      	},
      },
      // Брейкпоинты
      // События
      on: {
        init: function () {
            
            const elementReview = document.querySelector('.text-box-reviews');
            const reviewBody = document.querySelector('.reviews__body')
            const clone = elementReview.cloneNode(true)
            clone.classList.add('active');
            reviewBody.appendChild(clone)
            
            // console.log(reviewBody)
            // console.log(elementSlideActive)

        },
        slideChange: function (e) {
            // console.log(e.activeIndex)
            // console.log(e)
            // console.log(e.slides[e.activeIndex])
            // console.log(e.slides[e.activeIndex].firstElementChild)
            const textView = 
            e.slides[e.activeIndex].firstElementChild.classList.value === "reviews__text-box text-box-reviews" ? 
            e.slides[e.activeIndex].firstElementChild : 
            null;

            const reviewBody = document.querySelector('.reviews__body')
            // console.log(textView)
            if(textView !== null){
                const clone = textView.cloneNode(true);
                clone.classList.toggle('active')
                reviewBody.firstElementChild.classList.toggle('active')
                reviewBody.replaceChild(clone, reviewBody.lastElementChild)
            }else{
                const alertElement = document.createElement('p');
                alertElement.classList.add('text-box-reviews__text')
                alertElement.innerText = 'Извините, отзыв не загрузился (('
                reviewBody.replaceChild(alertElement, reviewBody.lastElementChild)
            }
        },
      },
    });
  }
}
// Скролл на базе слайдера (по классу swiper_scroll для оболочки слайдера)
function initSlidersScroll() {
  let sliderScrollItems = document.querySelectorAll(".swiper_scroll");
  if (sliderScrollItems.length > 0) {
    for (let index = 0; index < sliderScrollItems.length; index++) {
      const sliderScrollItem = sliderScrollItems[index];
      const sliderScrollBar =
        sliderScrollItem.querySelector(".swiper-scrollbar");
      const sliderScroll = new Swiper(sliderScrollItem, {
        observer: true,
        observeParents: true,
        direction: "vertical",
        slidesPerView: "auto",
        freeMode: {
          enabled: true,
        },
        scrollbar: {
          el: sliderScrollBar,
          draggable: true,
          snapOnRelease: false,
        },
        mousewheel: {
          releaseOnEdges: true,
        },
      });
      sliderScroll.scrollbar.updateSize();
    }
  }
}

window.addEventListener("load", function (e) {
  // Запуск инициализации слайдеров
  initSliders();
  // Запуск инициализации скролла на базе слайдера (по классу swiper_scroll)
  //initSlidersScroll();
});
