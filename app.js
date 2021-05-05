const aphp = document.querySelector('.aphp');
const slider = document.querySelector('.slider');
const logo = document.querySelector('#logo');
const caducee = document.querySelector('.caducee');
const headline = document.querySelector('.headline');
const submit = document.querySelector('input[type="submit"]');

const t1 = new TimelineMax();

t1.fromTo(aphp,1,{height: "0%"},{height: "100%", ease: Power2.easeInOut})
.fromTo(aphp,1.2, {width: "100%"}, {width: "80%", ease: Power2.easeInOut})
.fromTo(slider, 1.2, {x: "-100%"}, {x: "0%", ease: Power2.easeInOut}, "-=1.2")
.fromTo(logo, 0.5, {opacity: 0, x: 30}, {opacity:1, x:0}, "-=0.5")
.fromTo(headline, 0.5, {opacity: 0, x: 30}, {opacity:1, x:0}, "-=0.5")
.fromTo(caducee, 0.5, {opacity: 0, x: 30}, {opacity:1, x:0}, "-=0.5")
.fromTo(submit, 0.1, {opacity: -10, x: 100}, {opacity:1, x:0}, "-=0.5", "=1");

