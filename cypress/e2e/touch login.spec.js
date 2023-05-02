describe('Authentification', () => {
    it('Remplir le formulaire de connexion avec des identifiants valides et vérifier la redirection', () => {
      cy.visit('/login')
      cy.get('#email').type('john.doe@test.com')
      cy.get('#password').type('password123')
      cy.get('[type="submit"]').click()
      cy.url().should('include', '/my-account')
    })
    it('Remplir le formulaire de connexion avec des identifiants invalid')