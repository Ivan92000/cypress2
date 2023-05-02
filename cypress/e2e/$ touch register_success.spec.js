describe('Inscription', () => {
    it('Inscription réussie', () => {
      cy.visit('https://preprod.backmarket.fr/fr-fr/register')
      
      cy.get('#first_name').type('John')
      cy.get('#last_name').type('Doe')
      cy.get('#email').type('john.doe@example.com')
      cy.get('#password').type('Motdepasse123')
      cy.get('#password_confirmation').type('Motdepasse123')
      cy.get('#accept_terms').check()
      
      cy.get('[type="submit"]').click()
      
      cy.url().should('include', '/fr-fr')
      cy.contains('Bonjour John !')
    })
  })