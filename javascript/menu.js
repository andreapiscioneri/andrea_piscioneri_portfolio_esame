document.addEventListener('DOMContentLoaded', function() {
  const menu = document.getElementById('menu');
  const toggle = document.getElementById('toggle');

  // funzione per attivare/disattivare il menu
  function toggleMenu() {
      menu.classList.toggle('active'); // aggiungi o rimuovi la classe 'active' al menu

      // effetto aggiuntivo: animazione del menu
      if (menu.classList.contains('active')) // contiene la classe 'active'
      {
          menu.style.clipPath = 'circle(100% at 50% 50%)'; // applica un taglio circolare al menu
          menu.style.transform = 'scale(1)'; // scala il menu a dimensione normale
          console.log("click active")} 
      else 
      { // non contiene la classe 'active'
          menu.style.clipPath = 'circle(0% at 50% 50%)'; // nascondi il menu con un taglio circolare a raggio zero
          console.log("click disactive")}
  }

  // aggiungi un event listener al click del toggle
  toggle.addEventListener('click', toggleMenu);
});
