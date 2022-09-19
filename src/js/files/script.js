// Подключение функционала "Чертогов Фрилансера"
import { isMobile } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";

// import * as ScrollMagic from "../../../node_modules/scrollmagic/scrollmagic/uncompressed/ScrollMagic.js";

// window.addEventListener("load", () => {
//   const controller = new ScrollMagic.Controller({});

//   const tween = new TimelineMax().add([
//     TweenMax.to(".stages .order-form", 1, {
//       backgroundPosition: "-40% 0",
//       ease: Linear.easeNone,
//     }),
//   ]);
//   new ScrollMagic.Scene({
//     triggerElement: ".stages",
//     duration: 2000,
//     offset: 450,
//   })
//     .setTween(tween)
//     .setPin(".stages")
//     .addIndicators() // add indicators (requires plugin)
//     .addTo(controller);
// });

window.addEventListener(
  "load",
  () => {
    const section = document.querySelector(".stages");
    const item = Array.from(document.querySelectorAll(".stages-block__item"));
    const checkElement = Array.from(
      document.querySelectorAll(".pagination-stages-block__item")
    );
    let counter = 0;
    window.addEventListener("scroll", (e) => {
      // console.log(section.clientHeight)
      // console.log(window.pageYOffset)
      if (window.pageYOffset >= section.clientHeight) {
        // window.pageYOffset = window.innerHeight + section.clientHeight;
        window.scrollTo(0, section.clientHeight);
        document.documentElement.classList.add("lock");
        section.addEventListener("wheel", () => {
        //   item[counter].classList.add("active");
        //   counter++;
        //   console.log(counter)
        });

        console.log(section.clientHeight);
      }
      // console.log(e)
    });
  },
  true
);
