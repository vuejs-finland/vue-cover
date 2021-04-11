describe('router', () => {
  it('Visit home page', () => {
    cy.visit('/')
    cy.contains('home page')
  })

  it('Visit about page', () => {
    cy.visit('/about')
    cy.contains('About')
  })
})
