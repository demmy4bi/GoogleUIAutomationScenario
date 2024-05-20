# Task 2: UI Automation Scenarios

## CYPRESS AUTOMATION

## Scenario 1: Search Functionality Verification
Reason for Selection:
Search functionality is the core feature of Google.com. Ensuring that it works seamlessly is crucial for enhancing user experience and efficiency. Automating this scenario helps in quickly validating that the search functionality is performing as expected with different types of queries.

Implementation Steps:

Open Google homepage.
Enter a search query in the search bar.
Click the search button or press Enter.
Verify that the search results page is displayed with relevant results.

## Scenario 2: Verify "I'm Feeling Lucky" Button Functionality
Reason for Selection:
The "I'm Feeling Lucky" button is a unique feature that takes users directly to the first search result, bypassing the search results page. Automating this scenario ensures that this feature works correctly, enhancing user efficiency for those who prefer this quick access.

Implementation Steps:

Open Google homepage.
Enter a search query in the search bar.
Click the "I'm Feeling Lucky" button.
Verify that the user is redirected to the first search result page directly.


## Explanation of Implementation
### Search Functionality Verification:

Open Google homepage: Use cy.visit('/'); to navigate to the baseUrl Google homepage .
Enter a search query: Use  cy.get("#APjFqb",  and type{ timeout: 10000 }).should('be.visible').type('Buildas{enter}');
) to target the search bar and type('Buildas{enter}') to enter the query.Note: the {enter} is used to search the query as the send button is not implement.
Verify search results page: Use cy.url().should('include', '/search?q=Buildas'); to check the URL and cy.url().should('include', '/search?q=Buildas'); to ensure the search results are visible.

### Verify "I'm Feeling Lucky" Button Functionality:

Open Google homepage:  Use cy.visit('/'); to navigate to the baseUrl Google homepage .
Enter a search query: Use  cy.get("#APjFqb", and type { timeout: 10000 }).should('be.visible').type('Buildas');
Click the "I'm Feeling Lucky" button: Use cy.contains('I\'m Feeling Lucky').click() to click the button.
Verify redirection: Use  cy.origin('https://www.buildas.io', () => {
            cy.get('.px-2 > span').should('be.visible').then(($element) => {
                const text = $element.text();
                //Validating that 'Start Building' is present in the navigated URL.
                expect(text).to.equal('Start Building');
            });
        });  to check the first result page.
By automating these two scenarios, we prioritize key functionalities that directly impact user experience and efficiency on Google.com.
