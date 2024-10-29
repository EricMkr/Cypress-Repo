console.log("Script chargé");
  function toggleForm() {
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
console.log("Login Form Hidden:", loginForm.classList.contains('hidden'));
console.log("Signup Form Hidden:", signupForm.classList.contains('hidden'));
