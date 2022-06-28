describe('cypress test', () => {
  it('should login and click some things', () => {
    cy.visit('http://localhost:8080')
    cy.contains('Login').click()
    cy.url().should('include', '/root/plans/list')
    
    cy.contains(' Keywords').click()
    cy.url().should('include', '/root/functions')

    cy.contains(' Parameters').click()
    cy.url().should('include', '/root/parameters')

    cy.contains(' Grid').click()
    cy.url().should('include', '/root/grid/agents')

  })
})