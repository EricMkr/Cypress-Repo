/// <reference types="cypress" />
describe('Login de mon application web.', () => {
  it('Je renseigne mes informations et je me connect', () => {
     cy.visit('http://127.0.0.1:3000/APK/index_login.html')
  })
})

// Lire le projet et compter les commentaires.

describe('Lis le projet et compte les commentaires dans le projet', () => {
  it('Devrait compter tous les commentaires dans les fichiers .js', () => {
    cy.task('countComments').then((commentCount) => {
      cy.log(`Nombre total de commentaires: ${commentCount}`);
      expect(commentCount).to.be.a,('number'); // Assure que le résultat est un nombre
    });
  });
})

// Lis, répertorie et affiche les commentaires et leur nombre.
describe('Répertorie et compte les commentaires commençant par "//".', () => {
  it('Devrait afficher uniquement les commentaires en ligne et leur nombre', () => {
    cy.task('countComments').then(({ count, comments }) => {
      const commentList = comments.join('\n'); // Liste de tous les commentaires
      const message = `Nombre total de commentaires: ${count}\n\nCommentaires:\n${commentList}`;
      
      // Affiche le message dans une boîte de dialogue
      cy.window().then((win) => {
        win.alert(message);
      });
    });
  });
})