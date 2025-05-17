Cypress.Commands.add('login', (username, password) => {
  cy.visit('https://www.demoblaze.com');
  cy.get('#login2').click()
  cy.get('#loginusername').type(username);
  cy.get('#loginpassword').type(password);
  cy.get('button[onclick="logIn()"]').click();
  //cy.get('#logout2', { timeout: 10000 }).should('be.visible');
});
