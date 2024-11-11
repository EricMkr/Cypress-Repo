/// <reference types="cypress" />

describe('Landing Page Tests', () => {
    beforeEach(() => {
        // Aller sur la page de test avant chaque cas de test
        cy.visit('http://127.0.0.1:3000/dist/index.html') // Assurez-vous d'utiliser le bon port ou l'URL de votre page de test
    })

    it('Vérifie la présence de la navigation et du bouton de Sign Up', () => {
        cy.get('.navbar').should('be.visible')
        cy.get('.navbar-brand').should('have.text', 'Start Bootstrap')
        cy.get('.btn-primary').contains('Sign Up').should('be.visible')
    })

    it('Teste la fonctionnalité du bouton Sign Up (ancre)', () => {
        cy.get('.btn-primary').first().click(/*{ multiple: true */) //Should remove .first() in order to set { multiple : true } functional.
        cy.url().should('include', '#signup')
        cy.get('#signup').should('be.visible')
    })

    it('Vérifie la présence et le texte du header principal', () => {
        cy.get('.masthead h1').should('have.text', 'Generate more leads with a professional landing page!')
    })

    it('Teste la validation du formulaire d\'inscription (champ email)', () => {
        // Teste le formulaire avec un email invalide
        cy.get('#emailAddress').type('emailinvalide')
        cy.get('#submitButton').click({ force: true })
        cy.get('[data-sb-feedback="emailAddress:email"]').should('be.visible')

        /* it('Active le champ email et teste la soumission du formulaire', () => {
            // Assurez-vous d'abord d'effectuer toute action nécessaire pour activer le champ
            cy.get('#otherField').type('Some Value') // Remplir un champ nécessaire, par exemple
        
            cy.get('#emailAddress').should('not.be.disabled') // Vérifiez que le champ est activé
            cy.get('#emailAddress').clear().type('test@example.com')
            
            // Complétez ensuite le test comme prévu
            cy.get('#submitButton').click()
            cy.url().should('include', '/page-suivante') // Vérifiez la redirection si besoin
        }  */  
        
        // Teste le formulaire avec un email valide
        cy.get('#emailAddress').clear({ force: true }).type('test@example.com', { force: true })

        cy.get('#submitButton').click({ force: true })
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
        cy.get('#submitButton').click({ force: true })
        cy.get('#submitSuccessMessage').should('be.visible')
    })

    it('Vérifie les liens et icônes des réseaux sociaux dans le footer', () => {
        cy.get('.footer .list-inline-item').should('have.length', 10)
        cy.get('.footer .list-inline-item').each((icon, index) => {
        cy.wrap(icon).should('be.visible').find('a').should('have.attr', 'href').and('include', '#!')
        })
    })

    it('Vérifie la présence et la fonctionnalité des liens du footer', () => {
        cy.get('.footer .list-inline-item').should('have.length', 10)
        cy.get('.footer .list-inline-item').each((icon) => {
        cy.wrap(icon).should('be.visible')
    
        // Cherche l'élément <a> s'il existe
        cy.wrap(icon).find('a').then((link) => {
            if (link.length) {
            cy.wrap(link).should('have.attr', 'href').and('include', '#!')
            } else {
            cy.log('Pas de lien <a> trouvé dans cet élément .list-inline-item')
            }
    })
})

        })
    })
