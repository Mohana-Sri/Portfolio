// Import GSAP library
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault()
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    })
  })
})

// GSAP animations
gsap.registerPlugin(ScrollTrigger)

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
  })
})

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
  })
})

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
  })
})

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
})

