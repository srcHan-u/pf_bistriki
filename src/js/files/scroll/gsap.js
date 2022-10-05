import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger.js";
import {TextPlugin} from "gsap/TextPlugin.js";

gsap.registerPlugin(TextPlugin, ScrollTrigger);
// gsap.registerPlugin(text);


// gsap.to(".js-text-from", {duration: 3, x: 30})
gsap.to(".js-text-from", {duration: 5, text: "заказов!"})