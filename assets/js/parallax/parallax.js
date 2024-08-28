// gsap.registerPlugin(ScrollTrigger);
gsap.to(".wp-block-zolo-container", {
    backgroundPositionY: "-50%", // Adjust this value for the desired parallax depth
    ease: "none",
    scrollTrigger: {
        trigger: ".wp-block-zolo-container",
        start: "top top",
        end: "bottom top",
        scrub: true, // Syncs the animation with the scroll position
    }
});