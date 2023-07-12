import { gsap } from "gsap";

    // create a reusable effect that swaps text
gsap.registerEffect({
    name: "swapText",
    effect: (targets, config) => {
      let tl = gsap.timeline({delay: config.delay});
      tl.to(targets, {opacity: 0, duration: config.duration / 2});
      tl.add(() => targets[0].innerText = config.text);
      tl.to(targets, {opacity: 1, duration: config.duration});
      return tl;
    },
    defaults: {duration: 1}, 
    extendTimeline: true
});


var tl = gsap.timeline({repeat: 0});
tl.swapText(".subtext", {text: "THE SECOND INFO TEXT 1 IS THIS ONE", delay: 2})


export default TextSwap