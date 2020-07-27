const hero = document.querySelector('.hero');
const slider = document.querySelector('.slider')
const logo = document.querySelector('#logo');
const hamburger = document.querySelector('.hamburger');
const headline = document.querySelector('.headline')
const dropdown = document.querySelector('.dropdown')

const tl = new TimelineMax();

//start with dropdown and logo disbaled
logo.style.setProperty("pointer-events", "none")
dropdown.style.setProperty("pointer-events", "none")


function enablePointers() {
    logo.style.setProperty("pointer-events", "all")
    dropdown.style.setProperty("pointer-events", "all")
  }

tl.fromTo(hero, 2.5, { height: '.25%' }, { height: '100%', ease: Power2.easeInOut }, "+= 1")
    .fromTo(logo, 5, { opacity: 0, x: 0 }, { opacity: 1, x: 0, ease: Bounce.easeInOut }, "-= 2.5")
    .fromTo(hamburger, 2, { opacity: 0, x: -200 }, { opacity: 1, x: 0, ease: Power2.easeOut }, "-= 2.75")
    .addCallback(enablePointers, "5") //enable header pointers once animations are complete
    .fromTo(headline, 2.5, { opacity: 1, x: 0 }, { opacity: 0, x: -950, ease: Power2.easeInOut }, "-= 5")



