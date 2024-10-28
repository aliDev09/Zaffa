gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

gsap.to('.ellipse1', {
    duration: 10,
    repeat: -1,
    delay: 3,
    keyframes: {
        "25%": { x: -200, y: -200, rotate: 90 },
        "50%": { x: 0, y: -400, rotate: 180 },
        "75%": { x: 200, y: -200, rotate: 270 },
        "100%": { x: 0, y: - 0, rotate: 360 }
    }
})

gsap.to('.ellipse3', {
    repeat: -1,
    y: 300,
    yoyo: true,
    duration: 3
})



gsap.to('.ellipse4', {
    duration: 2,
    width: 80,
    height: 80
})

gsap.to('.ellipse5', {
    x: 50,
    y: 450,
    stagger: .5,
    duration: 2,
})


gsap.to('.header__line', {
    x: 150,
    repeat: 1,
    duration: 2,
    yoyo: true,
    delay: 4
})

gsap.to('.header__line1', {
    y: -150,
    repeat: 1,
    duration: 2,
    yoyo: true,
    delay: 4
})

const tl = gsap.timeline({ defaults: { duration: 0.6 } })
tl.from('.zaffa__logo', { opacity: 0, y: -50 })
.from('.dropdown', { opacity: 0, y: -50 })
.from('.title1', { opacity: 0, x: -50 })
.from('.header__text', { opacity: 0, x: -50 })
.from('.header__block', { opacity: 0, x: 50 })

gsap.utils.toArray(".animation-up").forEach((el, index) => {
    let fade = gsap.timeline({
        scrollTrigger: {
            trigger: el,
            start: "top bottom",
            toggleActions: "play none none reverse"
        }
    })

    fade
        .set(el, {transformOrigin: "center center"})
        .fromTo(el, {opacity: 0, scale: 0.8, y: '+=200'}, {opacity: 1, scale: 1, y: 0, duration: 0.5 ,imadateRender: false})
});

"use strict";

function openAlert() {
  const button = document.getElementById("alert");
  button.classList.add("active");
  button.style.display = "block";

  setTimeout(() => {
    button.classList.remove("active");
    button.classList.add("hide");
    setTimeout(() => {
      button.style.display = "none";
      button.classList.remove("hide");
    }, 500);
  }, 5000);
}
