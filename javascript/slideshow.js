var slideIndex = 0; 
showSlides(); // avvio funzione

function showSlides() {
  var slides = document.getElementsByClassName("slide");
  slides[slideIndex].style.display = "none"; // nasconde l'immagine corrente
  slideIndex++;
  if (slideIndex >= slides.length) 
  { slideIndex = 0;
    console.log("reset")
  } // resetta l'indice se supera o uguaglia il numero di slide
  
  slides[slideIndex].style.display = "block"; // mostra l'immagine successiva
  setTimeout(showSlides, 3000);
  console.log("next")
}
