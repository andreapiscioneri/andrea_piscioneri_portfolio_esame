const anim = () => {
    const message1 = document.getElementById("message1"); 
    const tl2 = gsap.timeline({ 
        scrollTrigger: {
            trigger: "#headline", 
            pin: true, 
            start: "top 120px", 
            scrub: true, 
            onEnter: () => console.log("enter"), // richiamo per gli eventi di entrata
            onLeave: () => console.log("leave") // richiamo per gli eventi di uscita
        }
    });
    // aggiunta delle animazioni
    tl2.from(message1, { duration: 1 }) // in entrata
       .to(message1, { duration: 1, scale: 2.5, delay: 0.5 }); // in uscita

    message1.addEventListener("click", () => window.location.href = "index.html"); 
};

document.addEventListener("DOMContentLoaded", anim);
