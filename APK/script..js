console.log("Script chargé");
console.log("Login Form Hidden:", loginForm.classList.contains('hidden'));
console.log("Signup Form Hidden:", signupForm.classList.contains('hidden'));

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

  // Fonction de rechargement avec délai
  function reloadWithDelay(delay = 5000000) {
    // Affiche l'overlay
    const overlay = document.getElementById('loadingOverlay');
    overlay.style.display = 'flex';

    // Délai avant rechargement de la page
    setTimeout(  => {
      location.reload();
    }, delay); // Temps en millisecondes
  }

  // script.js from CODEGPT
document.getElementById('btn-se-connecter').addEventListener('click', function() {
  var loadingOverlay = document.getElementById('loadingOverlay');
  loadingOverlay.style.display = 'block';

  // Simulate a network request
  setTimeout(function() {
      loadingOverlay.style.display = 'none';
      alert('Login successful!');
  }, 15000); // Simulate a 3-second delay for the login process
});