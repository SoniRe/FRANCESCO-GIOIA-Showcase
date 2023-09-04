var tl = gsap.timeline();

tl.from("#nav h3", {
  y: -50,
  duration: 1,
  delay: 0.5,
  opacity: 0,
  stagger: 0.25,
})

  .from("#text span", {
    x: -300,
    opacity: 0,
    stagger: 0.35,
  })

  .from("img", {
    x: 700,
    opacity: 0,
    stagger: 0.7,
    rotate: 45,
    y: 100,
  });

var cursor = document.querySelector("#cursor");
var main = document.querySelector("#main");

main.addEventListener("mousemove", function (dets) {
  console.log(dets.x, dets.y);

  cursor.style.left = `${dets.x + 30}px`;
  cursor.style.top = `${dets.y}px`;
});
