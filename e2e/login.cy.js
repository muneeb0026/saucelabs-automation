import LoginPage from '../support/pages/LoginPage'


const loginPage = new LoginPage()

describe ('Login test',()=>{

    it('login success',()=>{
        loginPage.visit();
        cy.fixture('example').then((user) => {
            loginPage.enterEmail(user.email);
            loginPage.enterPassword(user.password);
        })
        loginPage.clickLogin();
    })

    it('login with invalid email',()=>{
        loginPage.visit();
        cy.fixture('example').then((user) =>{
            loginPage.enterEmail(user.invalid_email);
            loginPage.enterPassword(user.password);
        })
        loginPage.clickLogin();
    })

    it('login with invalid password',()=>{
        loginPage.visit();
        cy.fixture('example').then((user) =>{
            loginPage.enterEmail(user.email);
            loginPage.enterPassword(user.invalid_password);
        })
        loginPage.clickLogin();
    })
})

