import HomePage from "../support/pages/HomePage";

const homePage = new HomePage();

describe("Home page test", () => {
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
  });
}); 