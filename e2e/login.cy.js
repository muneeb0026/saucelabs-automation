import LoginPage from '../support/pages/LoginPage'


const loginPage = new LoginPage()

describe ('Login test',()=>{

    it('login success',()=>{
        loginPage.visit();
        loginPage.enterEmail("standard_user");
        loginPage.enterPassword("secret_sauce");
        loginPage.clickLogin();
    })


    
})

