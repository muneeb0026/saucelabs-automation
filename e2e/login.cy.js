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


    
})

