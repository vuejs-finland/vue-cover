describe('router', () => {
  it('Visit home page', () => {
    cy.visit('/')
    cy.contains('Hello Vue 3')
  })

  it('Visit about page', () => {
    cy.visit('/about')
    cy.contains('About')
  })
})
