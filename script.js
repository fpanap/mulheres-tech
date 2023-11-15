// Wrap every letter in a span
var textWrapper = document.querySelector('.text-span');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='text-span'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.text-span',
    translateY: ["1.1em", 0],
    translateZ: 0,
    duration: 750,
    delay: (el, i) => 50 * i
  }).add({
    targets: '.text-span',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });