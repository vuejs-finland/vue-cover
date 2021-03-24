describe('My First Test', () => {
  it('Does not do much!', () => {
    cy.visit('localhost:3000')
    cy.contains('Hello Vue 3')
  })
})
