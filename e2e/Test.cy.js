/// <reference types="cypress" />
describe('Login de mon application web.', () => {
  it('Je renseigne mes informations et je me connect', () => {
     cy.visit('http://localhost:3000')
  })
})

// Test sur champ email 1
describe('Vérification du champ email dans le formulaire de contact', () => {
  beforeEach(() => {
      /* Charger la page contenant le formulaire
      cy.visit('URL_DE_TA_PAGE'); // Remplace 'URL_DE_TA_PAGE' par l'URL réelle de la page
  }); */

  it('Vérifie qu’une adresse email est entrée dans le champ de texte', () => {
      // Cible le champ email dans le formulaire
      cy.get('#contactForm input[type="email"]').as('emailInput');

      // Entrez une adresse email de test
      cy.get('@emailInput').type('test@example.com');

      // Vérifie que le champ contient bien une adresse email
      cy.get('@emailInput').should('have.value', 'test@example.com');

      // Vérifie que le format de l'email est valide
      cy.get('@emailInput').invoke('val').then((email) => {
          // Expression régulière pour vérifier le format de l'email
          const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          expect(email).to.match(emailPattern, 'Le champ doit contenir une adresse email valide');
      });
  });
})
})
