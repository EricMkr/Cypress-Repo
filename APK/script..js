console.log("Script chargé");
// console.log("Login Form Hidden:", loginForm.classList.contains('hidden'));
// console.log("Signup Form Hidden:", signupForm.classList.contains('hidden'));

  function toggleForm(event) {
    event.preventDefault(); // Empêche le comportement par défaut du lien

    const loginForm = document.getElementById('login-form');
    const signupForm = document.getElementById('signup-form');
    const formTitle = document.getElementById('form-title');
  

    // Basculer l'affichage des formulaires
    if (loginForm.classList.contains('hidden')) {
      loginForm.classList.remove('hidden');
      signupForm.classList.add('hidden');
      formTitle.textContent = 'Connexion';
    } else {
      loginForm.classList.add('hidden');
      signupForm.classList.remove('hidden');
      formTitle.textContent = 'Inscription';
    }
  }

  // Fonction pour afficher l'animation de chargement avant la soumission du formulaire
function reloadWithDelay(event) {
  event.preventDefault(); // Empêche la soumission immédiate du formulaire

  // Affiche l'overlay de chargement
  const overlay = document.getElementById('loadingOverlay');
  overlay.style.display = 'flex';

  // Délai avant la soumission du formulaire (ajuste le délai selon les besoins)
  setTimeout(() => {
    document.getElementById('login-form').submit();
  }, 15000); // Temps en millisecondes (2000 ms = 2 sec)
}

// Fonction pour naviguer vers la page d'inscription avec un délai
function navigateToSignup(event) {
  event.preventDefault(); // Empêche le rechargement immédiat

  // Affiche l'overlay de chargement
  const overlay = document.getElementById('loadingOverlay');
  overlay.style.display = 'flex';

  // Redirige vers la page d'inscription après un délai
  setTimeout(() => {
    window.location.href = "index_signin.html";
  }, 150000); // 1 seconde de délai
}

