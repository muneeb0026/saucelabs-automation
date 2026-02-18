import HomePage from "../support/pages/HomePage";


const homePage = new HomePage();

describe("Home page test", () => {
  // perform login per test (restored previous behavior)

  it("add to cart", () => {
    homePage.login();
    homePage.addToCart();
    homePage.openCart();
  });

  it("check out", () => {
    homePage.login();
    homePage.checkOut();
    homePage.firstName();
    homePage.lastName();
    homePage.postalCode();
    homePage.continueToCheckOut();
    homePage.backToAllProducts();
  });

  it("add all products to cart", () => {
    homePage.login();
    homePage.addAllProductsToCart();
    homePage.openCart();
    homePage.firstName();
    homePage.lastName();
    homePage.postalCode();
    homePage.continueToCheckOut();


  });

}); 