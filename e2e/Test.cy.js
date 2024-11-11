/// <reference types="cypress" />

describe('Landing Page Tests', () => {
    beforeEach(() => {
        // Aller sur la page de test avant chaque cas de test
        cy.visit('http://localhost:3000') // Assurez-vous d'utiliser le bon port ou l'URL de votre page de test
    })

    it('Vérifie la présence de la navigation et du bouton de Sign Up', () => {
        cy.get('.navbar').should('be.visible')
        cy.get('.navbar-brand').should('have.text', 'Start Bootstrap')
        cy.get('.btn-primary').contains('Sign Up').should('be.visible')
    })

    it('Teste la fonctionnalité du bouton Sign Up (ancre)', () => {
        cy.get('.btn-primary').click()
        cy.url().should('include', '#signup')
        cy.get('#signup').should('be.visible')
    })

    it('Vérifie la présence et le texte du header principal', () => {
        cy.get('.masthead h1').should('have.text', 'Generate more leads with a professional landing page!')
    })

    it('Teste la validation du formulaire d\'inscription (champ email)', () => {
        // Teste le formulaire avec un email invalide
        cy.get('#emailAddress').type('emailinvalide')
        cy.get('#submitButton').click()
        cy.get('[data-sb-feedback="emailAddress:email"]').should('be.visible')
        
        // Teste le formulaire avec un email valide
        cy.get('#emailAddress').clear().type('test@example.com')
        cy.get('#submitButton').click()
        cy.get('#submitSuccessMessage').should('be.visible')
    })

    it('Vérifie les icônes de fonctionnalités de la page', () => {
        cy.get('.features-icons .col-lg-4').should('have.length', 3)
        cy.get('.features-icons .col-lg-4').each((feature, index) => {
            cy.wrap(feature).find('h3').should('be.visible')
            cy.wrap(feature).find('p').should('be.visible')
        })
    })

    it('Vérifie la section des témoignages', () => {
        cy.get('.testimonials').within(() => {
            cy.get('h2').should('contain', 'What people are saying...')
            cy.get('.testimonial-item').should('have.length', 3)
            cy.get('.testimonial-item').each((testimonial) => {
                cy.wrap(testimonial).find('h5').should('be.visible')
                cy.wrap(testimonial).find('p').should('be.visible')
            })
        })
    })

    it('Teste le formulaire d\'inscription dans la section Call to Action', () => {
        cy.get('#signup').scrollIntoView()
        cy.get('#emailAddressBelow').type('test@example.com')
        cy.get('#submitButton').click()
        cy.get('#submitSuccessMessage').should('be.visible')
    })

    it('Vérifie les liens et icônes des réseaux sociaux dans le footer', () => {
        cy.get('.footer .list-inline-item').should('have.length', 3)
        cy.get('.footer .list-inline-item').each((icon, index) => {
            cy.wrap(icon).should('be.visible').find('a').should('have.attr', 'href').and('include', '#!')
        })
    })

    it('Vérifie la présence et la fonctionnalité des liens du footer', () => {
        cy.get('.footer .list-inline').within(() => {
            cy.contains('About').should('have.attr', 'href').and('include', '#!')
            cy.contains('Contact').should('have.attr', 'href').and('include', '#!')
            cy.contains('Terms of Use').should('have.attr', 'href').and('include', '#!')
            cy.contains('Privacy Policy').should('have.attr', 'href').and('include', '#!')
        })
    })
})
/// <reference types="cypress" />

describe('Landing Page Tests', () => {
  beforeEach(() => {
      // Aller sur la page de test avant chaque cas de test
      cy.visit('http://localhost:3000') // Assurez-vous d'utiliser le bon port ou l'URL de votre page de test
  })

  it('Vérifie la présence de la navigation et du bouton de Sign Up', () => {
      cy.get('.navbar').should('be.visible')
      cy.get('.navbar-brand').should('have.text', 'Start Bootstrap')
      cy.get('.btn-primary').contains('Sign Up').should('be.visible')
  })

  it('Teste la fonctionnalité du bouton Sign Up (ancre)', () => {
      cy.get('.btn-primary').click()
      cy.url().should('include', '#signup')
      cy.get('#signup').should('be.visible')
  })

  it('Vérifie la présence et le texte du header principal', () => {
      cy.get('.masthead h1').should('have.text', 'Generate more leads with a professional landing page!')
  })

  it('Teste la validation du formulaire d\'inscription (champ email)', () => {
      // Teste le formulaire avec un email invalide
      cy.get('#emailAddress').type('emailinvalide')
      cy.get('#submitButton').click()
      cy.get('[data-sb-feedback="emailAddress:email"]').should('be.visible')
      
      // Teste le formulaire avec un email valide
      cy.get('#emailAddress').clear().type('test@example.com')
      cy.get('#submitButton').click()
      cy.get('#submitSuccessMessage').should('be.visible')
  })

  it('Vérifie les icônes de fonctionnalités de la page', () => {
      cy.get('.features-icons .col-lg-4').should('have.length', 3)
      cy.get('.features-icons .col-lg-4').each((feature, index) => {
          cy.wrap(feature).find('h3').should('be.visible')
          cy.wrap(feature).find('p').should('be.visible')
      })
  })

  it('Vérifie la section des témoignages', () => {
      cy.get('.testimonials').within(() => {
          cy.get('h2').should('contain', 'What people are saying...')
          cy.get('.testimonial-item').should('have.length', 3)
          cy.get('.testimonial-item').each((testimonial) => {
              cy.wrap(testimonial).find('h5').should('be.visible')
              cy.wrap(testimonial).find('p').should('be.visible')
          })
      })
  })

  it('Teste le formulaire d\'inscription dans la section Call to Action', () => {
      cy.get('#signup').scrollIntoView()
      cy.get('#emailAddressBelow').type('test@example.com')
      cy.get('#submitButton').click()
      cy.get('#submitSuccessMessage').should('be.visible')
  })

  it('Vérifie les liens et icônes des réseaux sociaux dans le footer', () => {
      cy.get('.footer .list-inline-item').should('have.length', 3)
      cy.get('.footer .list-inline-item').each((icon, index) => {
          cy.wrap(icon).should('be.visible').find('a').should('have.attr', 'href').and('include', '#!')
      })
  })

  it('Vérifie la présence et la fonctionnalité des liens du footer', () => {
      cy.get('.footer .list-inline').within(() => {
          cy.contains('About').should('have.attr', 'href').and('include', '#!')
          cy.contains('Contact').should('have.attr', 'href').and('include', '#!')
          cy.contains('Terms of Use').should('have.attr', 'href').and('include', '#!')
          cy.contains('Privacy Policy').should('have.attr', 'href').and('include', '#!')
      })
  })
})

