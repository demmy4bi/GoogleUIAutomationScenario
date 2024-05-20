Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from failing the test
    return false
})

describe('Google "I\'m Feeling Lucky" Button Functionality', () => {
    it('should redirect to the first search result page directly', () => {
        // Step 1: Open Google homepage
        //Note: the url is already set up as baseurl in the cypress.config.js
        cy.visit('/');

        // Step 2: Enter a search query
        cy.get("#APjFqb", { timeout: 10000 }).should('be.visible').type('Buildas');

        // Step 3: Click the "I'm Feeling Lucky" button
        cy.contains('I\'m Feeling Lucky').click();

        // Step 4: Verify that the user is redirected to the first search result page directly
        // Note cy.origin() is used to interact with the new origin /https://www.buildas.io
        cy.origin('https://www.buildas.io', () => {
            cy.get('.px-2 > span').should('be.visible').then(($element) => {
                const text = $element.text();
                //Validating that 'Start Building' is present in the navigated URL.
                expect(text).to.equal('Start Building');
            });
        });
    });
});
