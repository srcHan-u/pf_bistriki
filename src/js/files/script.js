// Подключение функционала "Чертогов Фрилансера"
import { isMobile } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";

import "./scroll/gsap.js";



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



