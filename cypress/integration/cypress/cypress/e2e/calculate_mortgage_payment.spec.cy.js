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

  

    // Click on the calculate button
   // cy.get('[data-testid="mortgage-calculate-button"]').click();

    // Assert that monthly payment is correct
    cy.get('.pie-group > g:last-child text:last-child').should('contain', '$2,362'); // Adjust expected monthly payment value as needed
    cy.log('This step has passed');
console.log('The payment has a match');
  });
});