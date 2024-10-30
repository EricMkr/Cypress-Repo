const { defineConfig } = require("cypress");
const fs = require('fs');
const path = require('path');

module.exports = defineConfig({
  projectId: '6nf6ro',
  projectID : 'cypadw ',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here

      // Définir une tâche pour compter les commentaires
      on('task', {
        countComments() {
          const projectDir = path.join(__dirname, '..');
          let comments = [];

          function readFilesRecursively(directory) {
            fs.readdirSync(directory).forEach((file) => {
              const fullPath = path.join(directory, file);

              if (fs.statSync(fullPath).isDirectory()) {
                readFilesRecursively(fullPath);
              } else if (fullPath.endsWith('.js')) {
                const fileContent = fs.readFileSync(fullPath, 'utf8');
                
                // Utilise une regex qui capture uniquement les lignes commençant par "//"
                const fileComments = fileContent.match(/^\/\/.*/g) || [];
                fileComments.forEach(comment => comments.push(`${file}: ${comment.trim()}`)); // Ajoute le commentaire et son fichier
                
                // Utilise une regex pour capturer les blocs de commentaires multi-lignes commençant par "/* et se terminant par */"
                const fileBlockComments = fileContent.match(/\/\*[\s\S]*?\*\//g) || [];
                fileBlockComments.forEach(comment => blockComments.push(`${file}: ${comment.trim()}`));
              }
            });
              
            
          }

          readFilesRecursively(projectDir);
          return { count: comments.length, comments }; // Retourne le nombre total et les commentaires
        }
      });
    },
    baseUrl: 'http://127.0.0.1:3000/APK/index_login.html#', // Remplace par ton URL de base
  },
});
