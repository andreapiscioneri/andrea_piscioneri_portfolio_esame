document.addEventListener("DOMContentLoaded", () => {
    const apDesignText = document.getElementById("apdesign"); // elemento nella pagina contact.html

    apDesignText.addEventListener("mouseenter", () => {  
         gsap.to(apDesignText, { duration: 0.3, y: -10, ease: "power2.out" });  // anima l'elemento verso l'alto quando il mouse entra
         console.log("hover")});

    apDesignText.addEventListener("mouseleave", () => { 
        gsap.to(apDesignText, { duration: 0.3, y: 0, ease: "power2.out" }); // anima l'elemento verso il basso quando il mouse esce
        console.log("not hover")});

    apDesignText.addEventListener("click", () => {
        window.location.href = "index.html"; });
        
});
