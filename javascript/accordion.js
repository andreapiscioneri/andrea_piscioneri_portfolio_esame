document.querySelectorAll('.accordion-item h2').forEach((accordionToggle) => {
  accordionToggle.addEventListener('click', () => {

      // ottenimento dell'elemento genitore (accordion-item) e del contenuto successivo (accordion-content)
      const accordionItem = accordionToggle.parentNode;
      const accordionContent = accordionToggle.nextElementSibling;

      // se il maxheight dello stile è impostato, lo rimuove e rimuove anche la classe 'active'
      if (accordionContent.style.maxHeight) {
          accordionContent.style.maxHeight = null;
          accordionItem.classList.remove('active'), 
          console.log("disactive");} 
          
       else { // altrimenti, imposta il maxheight al valore dello scrollheight del contenuto
          accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px'; /* altezza massima del contenuto con aggiunta dell'unità di misura */
          accordionItem.classList.add('active'), 
          console.log("active");}
  });
});
