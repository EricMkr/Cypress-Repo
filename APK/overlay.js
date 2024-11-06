// script.js

// Fonction pour montrer l'overlay de chargement et recharger après un délai
function reloadWithDelay(event) {
   event.preventDefault(); // Empêche le formulaire de soumettre immédiatement
   const overlay = document.getElementById("loadingOverlay");
   overlay.style.display = "block"; // Affiche l'overlay
 
   // Simule un délai de chargement de 2 secondes
   setTimeout(() => {
     overlay.style.display = "none"; // Cache l'overlay après le délai
     document.getElementById("login-form").submit(); // Soumet le formulaire
   }, 2000); // Délai de 2 secondes (2000 ms)
 }
 
 // Fonction pour naviguer vers la page d'inscription
 function navigateToSignup(event) {
   event.preventDefault();
   window.location.href = "index_signin.html";
 }
 