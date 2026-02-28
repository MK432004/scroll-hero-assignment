gsap.registerPlugin(ScrollTrigger);

// Headline fade + move
gsap.to(".headline", {
  opacity: 1,
  y: -20,
  duration: 1,
  ease: "power3.out"
});

// Stats stagger animation
gsap.to(".stat", {
  opacity: 1,
  y: -20,
  duration: 1,
  delay: 0.5,
  stagger: 0.3,
  ease: "power3.out"
});
gsap.to(".hero", {
  scrollTrigger: {
    trigger: ".hero",
    start: "top top",
    end: "bottom top",
    scrub: true
  },
  scale: 0.8,
  opacity: 0.3
});
gsap.to(".headline", {
  scrollTrigger: {
    trigger: ".hero",
    start: "top top",
    end: "bottom top",
    scrub: true
  },
  y: -100
});
function animateCounter(element, target) {
  let obj = { val: 0 };

  gsap.to(obj, {
    val: target,
    duration: 2,
    onUpdate: function () {
      element.innerText = Math.floor(obj.val) + "%";
    }
  });
}

animateCounter(document.querySelector(".stat h2"), 95);
document.addEventListener("mousemove", (e) => {
  gsap.to(".headline", {
    x: (e.clientX - window.innerWidth/2) * 0.02,
    y: (e.clientY - window.innerHeight/2) * 0.02
  });
});
gsap.to(".progress-bar", {
  width: "100%",
  scrollTrigger: {
    scrub: true
  }
});