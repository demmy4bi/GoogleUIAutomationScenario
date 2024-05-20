Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from failing the test
    return false
})

describe('Google Search Functionality', () => {
    it('should display relevant results for a given search query', () => {
        // Step 1: Open Google homepage
        //Note: the url is already set up as baseurl in the cypress.config.js
        cy.visit('/');

        // Step 2: Enter a search query
        cy.get("#APjFqb", { timeout: 10000 }).should('be.visible').type('Buildas{enter}');


        // Step 3: Verify that the search results page is displayed with relevant results

        //Validating new Url contains the search query as expected
        cy.url().should('include', '/search?q=Buildas');

        //Validating that 'Buildas AI' is visible to the user as part of the search results.
        cy.get('.hlcw0c:nth-child(1) .LC20lb:nth-child(2)').should('be.visible').then(($element) => {
            const text = $element.text();
            expect(text).to.equal('Buildas AI');
        });
    });
});