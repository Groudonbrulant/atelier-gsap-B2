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
gsap.to("#img3", {
    duration: 5,
    scrollTrigger: {
        trigger: "",
        start: "top 100%",
        end: "top 0%",
        scrub: 1,
        markers: true,
    },
    motionPath: {
    path: "M167.22.2c-65.17,147.93-156.4,535.29,0,901.26,156.4,365.97,65.17,779.06,0,939.85-75.67,202.56-181.6,684.08,0,989.72,181.6,305.64,75.67,912.64,0,1177.93-76.29,267.47-333.6,879.41,0,1340.61",
    autoRotate: true
    }
});