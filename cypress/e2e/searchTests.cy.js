describe('Search Functionality Tests', () => {
  beforeEach(() => {
    cy.visit('../../src/index.html')
  })

  it('Should search by typing and pressing Enter', () => {
    cy.get('[data-test="search-input"]').type('Kendrick Lamar{enter}')

    cy.get('[data-test="item-content-kendrick"]')
      .should('be.visible')
    cy.get('[data-test="item-content-tupac"]')
      .should('not.visible')
    cy.get('[data-test="item-content-doom"]')
      .should('not.visible')
  })

  it('Should search by typing and clicking the search icon', () => {
    cy.get('[data-test="search-input"]').type('MF DOOM')
    cy.get('[data-test="search-icon"]').click()

    cy.get('[data-test="item-content-doom"]')
      .should('be.visible')
    cy.get('[data-test="item-content-tupac"]')
      .should('not.visible')
    cy.get('[data-test="item-content-kendrick"]')
      .should('not.visible')
   
  })

  it('Should display an error for an invalid search', () => {
    cy.get('[data-test="search-input"]').type('TwoPaqui{enter}')

    cy.contains('[data-test="no-results"]', 'No results found')
      .should('be.visible')
  })
})
