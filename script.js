
// GSAP Animations
gsap.to(".hero-title", {
    duration: 1.5,
    y: 0,
    opacity: 1,
    ease: "power4.out"
});

gsap.to(".hero-subtitle", {
    duration: 1,
    y: 0,
    opacity: 1,
    delay: 0.3,
    ease: "power4.out"
});

gsap.to(".cta-button", {
    duration: 0.8,
    y: 0,
    opacity: 1,
    delay: 0.6,
    ease: "power4.out"
});

// Mouse Follow Effect
const cursor = document.querySelector('.cursor');
document.addEventListener('mousemove', (e) => {
    gsap.to(cursor, {
        x: e.clientX - 20,
        y: e.clientY - 20,
        duration: 0.5,
        ease: "power2.out"
    });
});

       // Hover Effect
       document.querySelectorAll('.cta-button').forEach(element => {
    element.addEventListener('mouseenter', () => {
        gsap.to(cursor, {
            scale: 1.5,
            backgroundColor: "rgba(255,255,255,0.2)"
        });
    });
    element.addEventListener('mouseleave', () => {
        gsap.to(cursor, {
            scale: 1,
            backgroundColor: "transparent"
        });
    });
});

// Parallax Effect
document.addEventListener('mousemove', (e) => {
    const x = (window.innerWidth - e.pageX) / 50;
    const y = (window.innerHeight - e.pageY) / 50;
    gsap.to(".background-pattern", {
        duration: 1.5,
        x: x,
        y: y,
        ease: "power2.out"
    });
});