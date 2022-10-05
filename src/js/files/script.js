// Подключение функционала "Чертогов Фрилансера"
import { isMobile } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";

import "./scroll/gsap.js";

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

// class Section{
//     constructor(element){
//         this.element = document.querySelector(`.${element}`) ? document.querySelector(`.${element}`) : null;
//     }
//     get position(){
//         return !this.isNull() ? this.element.getBoundingClientRect() : false;
//     }
//     set coordinates(coor){
//         this.coordinates = this.coor;
//     }
//     isNull(){
//         return this.element === null ? true : false;
//     }
// }

class Element {
  attribures = [];
  constructor(tag) {
    this.element = document.createElement(tag);
  }
  createStyle(...args) {
    if (isEmpty(args)) {
      return (this.styles = undefined);
    } else if (args.length === 1) {
      return (this.styles = args[0]);
    } else {
      const styles = {};

      for (const iterator of args) {
        const arr = iterator.replace(/\:|\;/gi, "").split(" ");
        let key = arr[0];
        let value = arr[1];
        styles[key] = value;
      }

      return (this.styles = styles);
    }
  }
  setStyle() {
    if (!isEmpty(this.styles)) {
      for (const key in this.styles) {
        this.element.style[`${key}`] = `${this.styles[key]}`;
      }
    }
  }

  insertElement(parent) {
    const block = document.querySelector(parent)
      ? document.querySelector(parent)
      : null;

    if (block !== null) {
      block.appendChild(this.element);
    } else {
      console.log(new Error("parent element isn't found"));
    }
  }
}

function isEmpty(e) {
  return e === undefined || e === null || e.length === 0 ? true : false;
}
const BLOCKS = {
  // stages: new Section('stages'),
};

const section = document.querySelector(".stages");
window.addEventListener("DOMContentLoaded", () => {
  const backgroundWrapper = new Element("div");
  backgroundWrapper.createStyle(
    "position: absolute;",
    "top: 0;",
    "left: 0;",
    "width: 100%;",
    "height: 100%;",
    "backgroundColor: red;",
    "display: none"
  );
  backgroundWrapper.setStyle();
  backgroundWrapper.insertElement(".stages__container");

  backgroundWrapper.element.classList.add("js-background-wrapper");
  const porm = new Promise((resolve, reject) => {
    resolve();
  });
  window.addEventListener("scroll", () => {
    if (section.getBoundingClientRect().y <= 50) {
      porm.then(() => {
        backgroundWrapper.element.style.display = "block";
        // document.querySelector("html").classList.add("lock");
      });
    } else {
      porm.then(() => {
        backgroundWrapper.element.style.display = "none";
      });
    }
  });
});

const input = new Promise((resolve, reject) => {
  const input = document.querySelector(".submission-form__field");
//   console.log(input);
  resolve(input.value);
}).then((value) => {
//   console.log(value);
});
