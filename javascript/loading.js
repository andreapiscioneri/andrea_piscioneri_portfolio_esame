window.onload = () => { // quando la finestra è completamente caricata, arrow function
  const loading = document.getElementById("loading"); 
  const content = document.getElementById("content");

  const hideLoading = () => { // arrow function per nascondere il loading
      loading.style.display = "none"; // nascondi il loading con "none"
      content.style.opacity = 1; // opacità a 1 per renderlo visibile
      console.log("Loading completed"); 
  };
  setTimeout(hideLoading, 2000);
};
