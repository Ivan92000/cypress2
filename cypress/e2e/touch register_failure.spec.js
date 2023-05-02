describe('Inscription échouée', () => {
    it('Remplir le formulaire avec un email déjà existant et vérifier le message d\'erreur', () => {
      cy.visit('/register')
      cy.get('#firstName').type('John')
      cy.get('#lastName').type('Doe')
      cy.get('#email').type('john.doe@test.com')
      cy.get('#password').type('password123')
      cy.get('#confirmPassword').type('password123')
      cy.get('[type="submit"]').click()
      cy.get('.alert-danger').should('contain', 'Email already exists')
    })
  })