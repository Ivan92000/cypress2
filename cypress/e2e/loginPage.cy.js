describe('Inscription au site', () => {

  beforeEach(() =>{
    cy.visit('https://preprod.backmarket.fr/register')
    cy.contains("C'est OK pour moi").click()
  })

  afterEach(() =>{
    cy.get('#signup-email').clear()
  })

  it('Inscription reussie', ()=>{
        
        cy.get('#firstName').type('ivan')
        cy.get('#lastName').type('lazarevic')
        cy.get('#signup-email').type('lionelmessi@gmail.com')
        cy.get('#signup-password').type('Lionelmessi75')
        cy.get('button[data-qa=signup-submit-button]').click()
  })   

  it('Inscription echouée', ()=>{
        
    cy.get('#firstName').type('Marie')
    cy.get('#lastName').type('Popins')
    cy.get('#signup-email').type('mariepopins@gmail.com')
    cy.get('#signup-password').type('mypassword8')
    cy.get('button[data-qa=signup-submit-button]').click()
  })   

})

describe('User authentication', () => {

  beforeEach(() =>{
    cy.visit('https://preprod.backmarket.fr/register')
    cy.contains("C'est OK pour moi").click()
  })

  it('Authenticate ivan', ()=>{
        
        cy.get('#signin-email').type('lionelmessi@gmail.com')
        cy.get('#signin-password').type('Lionelmessi75')
        cy.get('button[data-qa=signin-submit-button]').click()
  })   

})