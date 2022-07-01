class Page {
    open() {
        cy.visit('http://localhost:8080')
    }

    login() {
        cy.contains('Login').click()
    }

    check(keyword) {
        cy.url().should('include', '/root' + keyword)
    }

    clickOn(keyword) {
        cy.contains(' ' + keyword).click()
    }
}

export default new Page();