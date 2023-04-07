const lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
});

function raf(time) {
    lenis.raf(time);
    ScrollTrigger.update();
    requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

const section_1 = document.getElementById("vertical");
const col_left = document.querySelector(".col_left");
const timeln = gsap.timeline({ paused: true });

timeln.fromTo(col_left, {y: 0}, {y: '170vh', duration: 1, ease: 'none'}, 0);

const scroll_1 = ScrollTrigger.create({
    trigger: section_1,
    start: 'bottom 60%',
    end : 'bottom -100%',
    animation: timeln,
    scrub: 1,
});


//horizontal scroll

const section_100 = document.getElementById("horizontal");
let panel_100 = gsap.utils.toArray(".horizontal__item");

gsap.to(panel_100, {
  xPercent: -100 * (panel_100.length - 1),
  ease: "sine.out",
  scrollTrigger: {
    trigger: section_100,
    pin: true,
    scrub: 3,
    snap: 1 / (panel_100.length - 1),
    end: "+=" + section_100.offsetWidth
  }
});

const section_101 = document.getElementById("horizontal_101");
let box_items101 = gsap.utils.toArray(".horizontal__item_101");

gsap.to(box_items101, {
  xPercent: -100 * (box_items101.length - 1),
  ease: "sine.out",
  scrollTrigger: {
    trigger: section_101,
    pin: true,
    scrub: 3,
    snap: 1 / (box_items101.length - 1),
    end: "+=" + section_101.offsetWidth
  }
});


const section_3 = document.getElementById("horizontal-2");
let box_items2 = gsap.utils.toArray(".horizontal__item2");

gsap.to(box_items2, {
  xPercent: 100 * (box_items2.length - 1),
  ease: "sine.out",
  scrollTrigger: {
    trigger: section_3,
    pin: true,
    scrub: 3,
    snap: 1 / (box_items2.length - 1),
    end: "+=" + section_3.offsetWidth
  }
});

const section_4 = document.getElementById("horizontal-3");
let box_items3 = gsap.utils.toArray(".horizontal__item3");

gsap.to(box_items3, {
  xPercent: -100 * (box_items3.length - 1),
  ease: "sine.out",
  scrollTrigger: {
    trigger: section_4,
    pin: true,
    scrub: 3,
    snap: 1 / (box_items3.length - 1),
    end: "+=" + section_3.offsetWidth
  }
});

