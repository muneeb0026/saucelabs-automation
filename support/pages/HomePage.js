import 'cypress-xpath';
import {faker} from '@faker-js/faker';

  class HomePage {

    login() {
      cy.visit('https://www.saucedemo.com/');
      cy.fixture('example').then((user) => {
        cy.get('#user-name').clear().type(user.email);
        cy.get('#password').clear().type(user.password);
        cy.get('#login-button').click();
      });
      cy.get('.inventory_list', { timeout: 10000 }).should('be.visible');
    }

    addToCart() {
        cy.xpath("//button[@id='add-to-cart-sauce-labs-backpack']").click();
    }

    openCart() {
      cy.xpath("//a[@class='shopping_cart_link']").click();
      cy.xpath("//button[@id='checkout']").click();
    }

    checkOut() {
        cy.xpath("//a[@class='shopping_cart_link']").click();
      cy.xpath("//button[@id='checkout']").click();
          
    }

    firstName(firstname){
        cy.xpath("//input[@id='first-name']").type(firstname)
    }

    lastName(lastname){
        cy.xpath("//input[@id='last-name']").type(lastname )
    }

}


  export default HomePage;
