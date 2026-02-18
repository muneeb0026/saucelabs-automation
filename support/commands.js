// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

// Login once per session and cache it using cy.session
Cypress.Commands.add('loginSession', () => {
	cy.session('saucedemo-login', () => {
		cy.visit('https://www.saucedemo.com/');
		cy.fixture('example').then((user) => {
			cy.get('#user-name').clear().type(user.email);
			cy.get('#password').clear().type(user.password);
			cy.get('#login-button').click();
		});
		cy.get('.inventory_list', { timeout: 10000 }).should('be.visible');
	}, {
		validate() {
			cy.visit('https://www.saucedemo.com/inventory.html');
			cy.get('.inventory_list', { timeout: 10000 }).should('be.visible');
		}
	})
});