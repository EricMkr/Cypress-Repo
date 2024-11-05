async function submitPost() {
   const username = document.getElementById('username').value;
   const content = document.getElementById('content').value;

   try {
       const response = await fetch('http://localhost:3000/api/posts', {
           method: 'POST',
           headers: {
               'Content-Type': 'application/json'
           },
           body: JSON.stringify({ username, content })
       });

       if (response.ok) {
           alert('Post enregistré avec succès !');
       } else {
           alert('Erreur lors de la sauvegarde du post.');
       }
   } catch (error) {
       console.error('Erreur réseau:', error);
   }
}