/// <reference types="cypress" />
describe('Login de mon application web.', () => {
  it('Je renseigne mes informations et je me connect', () => {
     cy.visit('http://127.0.0.1:3000/APK/index_login.html')
  })
})

// auth.test.js
import { login } from './auth';

describe("Tests de la fonction de connexion", () => {
  test("Connexion réussie avec les identifiants corrects", () => {
    const result = login("user", "password123");
    expect(result.success).toBe(true);
    expect(result.message).toBe("Connexion réussie");
  });

  test("Échec de la connexion avec un mot de passe incorrect", () => {
    const result = login("user", "wrongpassword");
    expect(result.success).toBe(false);
    expect(result.message).toBe("Nom d'utilisateur ou mot de passe incorrect");
  });

  test("Échec de la connexion avec des champs vides", () => {
    const result = login("", "");
    expect(result.success).toBe(false);
    expect(result.message).toBe("Les champs ne peuvent pas être vides");
  });
});
