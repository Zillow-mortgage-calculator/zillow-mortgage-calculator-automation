describe('template spec', () => {
    it('passes', () => {
      cy.visit('https://www.zillow.com/mortgage-calculator/');


      // Clear the input field before entering data
  cy.get('#homePrice').clear().type('300000');
  // Wait for 5 seconds
  cy.wait(3000);

  cy.get('#form-1_downPaymentPercent').clear().type('3.5');
  // Wait for 5 seconds
  cy.wait(3000);

  cy.get('#form-1_term').type('30');
  // Wait for 5 seconds
  cy.wait(4000);

  //User Able to Open advanced settings
  cy.get('.gryLKd').click();
  cy.wait (4000);

  cy.get('#form-1_propertyTaxRateAnnualAmount').clear().type(2500);
  cy.wait (4000);

  //User can indicate HOA dues

  cy.get('#monthlyHOA').clear().type(100);
  cy.wait (4000);
  

      // Assert that monthly payment is correct
      cy.get('.pie-group > g:last-child text:last-child').click().should('contain', '$2,475'); // Adjust expected monthly payment value as needed
      cy.log('This step has passed');
  console.log('The payment has a match');

  // Add failed test response

  
    });
  });