console.log("je fonctionne arharh")
// GSAP Modules
gsap.registerPlugin(ScrollTrigger,Observer,ScrollToPlugin,Draggable,MotionPathPlugin);

//GSAP demo animation
gsap.to("#demo",{
    rotation : 360,
    duration : 2,
})