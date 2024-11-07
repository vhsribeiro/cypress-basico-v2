Cypress._.times(5, function() {
  it.only('testa a página da política de privacidade de forma independente', function() {
    cy.visit('./src/privacy.html')

    cy.get('#title')
      .should('be.visible')
    
    cy.contains('Talking About Testing').should('be.visible')   
  })
})