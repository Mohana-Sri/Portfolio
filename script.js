document.addEventListener("DOMContentLoaded", function () {
  gsap.registerPlugin(ScrollTrigger);

  // Hero Content Animations
  gsap.from(".hero h2", {
    y: -50, // Moves from top
    opacity: 0,
    duration: 1,
    ease: "power3.out",
  });

  gsap.from(".hero h1", {
    y: -50, // Moves from top
    opacity: 0,
    duration: 1.2,
    ease: "power3.out",
    delay: 0.3, // Slight delay after h2
  });

  gsap.from(".hero p", {
    y: 50, // Moves from bottom
    opacity: 0,
    duration: 1.5,
    ease: "power3.out",
    delay: 0.6, // Delayed after h1
  });

  // Animate skill items
  gsap.utils.toArray(".skill-item").forEach((item) => {
    gsap.from(item, {
      opacity: 0,
      y: 50,
      duration: 1,
      scrollTrigger: {
        trigger: item,
        start: "top 80%",
      },
    });
  });

  // Animate timeline items
  gsap.utils.toArray(".timeline-item").forEach((item) => {
    gsap.from(item, {
      opacity: 0,
      x: -50,
      duration: 1,
      scrollTrigger: {
        trigger: item,
        start: "top 80%",
      },
    });
  });

  // Animate project cards
  gsap.utils.toArray(".project-card").forEach((card) => {
    gsap.from(card, {
      opacity: 0,
      scale: 0.8,
      duration: 0.5,
      scrollTrigger: {
        trigger: card,
        start: "top 80%",
      },
    });
  });

  // Parallax effect for hero section
  gsap.to(".hero", {
    backgroundPosition: "50% 100%",
    ease: "none",
    scrollTrigger: {
      trigger: ".hero",
      start: "top top",
      end: "bottom top",
      scrub: true,
    },
  });
});
