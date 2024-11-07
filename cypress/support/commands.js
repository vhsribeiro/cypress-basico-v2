Cypress.Commands.add('fillMandatoryFieldsAndSubmit', function() {
    cy.get('#firstName').type('Victor')
    cy.get('#lastName').type('Ribeiro')
    cy.get('#email').type('victor@ribeiro.com')
    cy.get('#open-text-area').type('Teste')
    cy.contains('button', 'Enviar').click()
})