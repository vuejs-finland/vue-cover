describe('store', () => {
  it('counter is updated', () => {
    cy.visit('/')
    cy.contains('counter is 0')
    cy.get('.hello_world__button').click()
    cy.contains('counter is 1')
  })
})
