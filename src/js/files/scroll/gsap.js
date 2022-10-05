import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger.js";
import { TextPlugin } from "gsap/TextPlugin.js";

const items = Array.from(document.querySelectorAll(".card-skill"));

gsap.registerPlugin(TextPlugin, ScrollTrigger);
let tl = gsap.timeline({});
tl.from(".main-screen__title", { opacity: 0, y: 100, duration: 1 })
  .from(".main-screen__text", { opacity: 0, y: 100, duration: 1 })
  .from(".main-screen__button", { opacity: 0, y: 100, duration: 1 });

gsap.from(".header", { y: -100, opacity: 0, delay: 1 });
// let item = -1;
// const abs = Array.from(document.querySelectorAll(".stages-block__item"));

// let counter = 0.5;
// items.forEach(item => {
//     tl.from(item, {duration: counter + 0.2, y: "-100%", opacity: 0})
// })

gsap.from(".about", {
  opacity: 0,
  delay: 0.4,
  scrollTrigger: {
    trigger: ".about",
    toggleActions: "restart pause resume pause",
  },
});
gsap.from(".order-form", {
  opacity: 0,
  delay: 1,
  scrollTrigger: {
    trigger: ".order-form",
    // toggleActions: "restart pause resume pause",
  },
});


ScrollTrigger.defaults({});
// gsap.registerPlugin(text);
ScrollTrigger.create({
  trigger: ".stages",
  // start: "top top",
  // endTrigger: "#otherID",
  // end: "bottom 50%+=100px",
  onToggle: (self) => console.log("toggled, isActive:", self.isActive),
  onUpdate: (self) => {},
  markers: true,
  pin: true,
  //   scrub: true,
});

// gsap.to(".js-text-from", {duration: 3, x: 30})
gsap.to(".js-text-from", {
  duration: 5,
  text: "заказов!",
  scrollTrigger: {
    trigger: ".js-text-from",
    toggleActions: "restart pause resume pause",
    // onEnter: () => console.log('enter'),
    // onLeave: () => console.log('finish'),
    // onEnterBack: () =>{},
    // onLeaveBack: () =>{},
    // onUpdate: (self) => {
    //   console.log("update", self.progress.toFixed(3));
    // },
    onToggle: (self) => {
      console.log("toggled", self.isActive);
    },
  },
});
