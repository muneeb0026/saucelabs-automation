class LoginPage {

visit(){
    cy.visit("https://www.saucedemo.com/");
}

enterEmail(email){
    cy.get("#user-name").type(email);
}

enterPassword(password){
    cy.get("#password").type(password); 
}

clickLogin(){
    cy.get("#login-button").click();
}



}

export default LoginPage;