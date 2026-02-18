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
      this.ensureInventoryLoaded();
      cy.xpath("//button[@id='add-to-cart-sauce-labs-backpack']", { timeout: 10000 })
        .should('be.visible')
        .click();
    }

    openCart() {
      cy.xpath("//a[@class='shopping_cart_link']").click();
      cy.xpath("//button[@id='checkout']").click();
    }

    checkOut() {
        cy.xpath("//a[@class='shopping_cart_link']").click();
      cy.xpath("//button[@id='checkout']").click();
          
    }

    firstName(){
        cy.xpath("//input[@id='first-name']").type(faker.person.firstName())
    }

    lastName(){
        cy.xpath("//input[@id='last-name']").type(faker.person.lastName())
    }

    postalCode(){
        cy.xpath("//input[@id='postal-code']").type(faker.location.zipCode())
    }

    continueToCheckOut(){
        cy.xpath("//input[@id='continue']").click();
        cy.xpath("//button[@id='finish']").click();

    }
    backToAllProducts(){
        cy.xpath("//button[@id='back-to-products']").click();
    }

    addAllProductsToCart() {
      this.ensureInventoryLoaded();
      cy.get("button[id*='add-to-cart']").each(($el) => {
        cy.wrap($el).should('be.visible').click();
      });
    }

    ensureInventoryLoaded() {
      cy.get('.inventory_list', { timeout: 10000 }).should('be.visible');
    }

}


  export default HomePage;
