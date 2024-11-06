/// <reference types="cypress" />
describe('Login de mon application web.', () => {
  it('Je renseigne mes informations et je me connect', () => {
     cy.visit('http://127.0.0.1:3000/APK/index_login.html')
  })
})