console.log("je fonctionne arharh")
// GSAP Modules
gsap.registerPlugin(ScrollTrigger,Observer,ScrollToPlugin,Draggable,MotionPathPlugin);
gsap.to('#presentation', {
    scale: 1,
    opacity: 1,
    duration: 0.5,
    stagger: 0.1
});

gsap.to("#colone1", {
    scrollTrigger: {
        trigger: "#specialites",
        start: "top 60%",
        end: "top 20%",
        scrub: 1,
        markers: true,
        id: "colone1",
        toggleActions: "play none reverse reset"
    },
    x: 0, // Position finale
    duration: 2,
});

gsap.to("#colone2", {
    scrollTrigger: {
        trigger: "#specialites",
        start: "top 60%",
        end: "top 20%",
        scrub: 1,
        markers: true,
        id: "colone2",
        toggleActions: "play none reverse reset"
    },
    x: 0, // Position finale
    duration: 2,
});
