describe('router', () => {
  it('Visit home page', () => {
    cy.visit('localhost:3000')
    cy.contains('Hello Vue 3')
  })

  it('Visit about page', () => {
    cy.visit('localhost:3000/about')
    cy.contains('About')
  })
})
