let mm = gsap.matchMedia();

mm.add({
    // Breakpoints pour les différentes tailles d'écran
    isDesktop: "(min-width: 1024px)",
    isTablet: "(min-width: 768px) and (max-width: 1023px)",
    isMobile: "(max-width: 767px)"
}, (context) => {
    let { isDesktop, isTablet, isMobile } = context.conditions;

    // Configuration pour Desktop
    if (isDesktop) {
        gsap.set(".carte", {
            width: "22%"
        });
    }

    // Configuration pour Tablet
    if (isTablet) {
        gsap.set(".carte", {
            width: "30%"
        });
    }

    // Configuration pour Mobile
    if (isMobile) {
        gsap.set(".carte", {
            width: "80%"
        });
        
        gsap.set("#colone1, #colone2", {
            gap: "20px"
        });
    }
}); 