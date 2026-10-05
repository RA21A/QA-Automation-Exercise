import HomePage from '../../pages/HomePage';
import LoginPage from '../../pages/LoginPage';
import SignupPage from '../../pages/SignupPage';

import {
    createTestUser
} from '../../test-data/users';


describe('Authentication Tests', () => {

    // ============================================
    // TC01 - Register User
    // ============================================

    it('TC01 - Register User', () => {
        const user = createTestUser();

        HomePage.visit();
        HomePage.verifyHomePageVisible();

        HomePage.signupLoginMenu()
            .click();

        LoginPage.signupTitle()
            .should('be.visible');

        LoginPage.startSignup(
            user.name,
            user.email
        );

        SignupPage.accountInformationTitle()
            .should('be.visible');

        SignupPage.createAccount(user);

        SignupPage.accountCreatedTitle()
            .should('be.visible');

        SignupPage.continueButton()
            .click();

        HomePage.verifyLoggedInAs(
            user.name
        );

        cy.deleteAccountByUi();
    });


    // ============================================
    // TC02 - Login Correct
    // ============================================

    it(
        'TC02 - Login User with correct email and password',
        () => {
            const user = createTestUser();

            cy.createUserByApi(user);

            HomePage.visit();
            HomePage.verifyHomePageVisible();

            HomePage.signupLoginMenu()
                .click();

            LoginPage.loginTitle()
                .should('be.visible');

            LoginPage.login(
                user.email,
                user.password
            );

            HomePage.verifyLoggedInAs(
                user.name
            );

            cy.deleteAccountByUi();
        }
    );


    // ============================================
    // TC03 - Login Incorrect
    // ============================================

    it(
        'TC03 - Login User with incorrect email and password',
        () => {
            HomePage.visit();
            HomePage.verifyHomePageVisible();

            HomePage.signupLoginMenu()
                .click();

            LoginPage.loginTitle()
                .should('be.visible');

            LoginPage.login(
                'invalid_user@example.com',
                'WrongPassword123!'
            );

            LoginPage.verifyInvalidLoginMessage();
        }
    );


    // ============================================
    // TC04 - Logout User
    // ============================================

    it('TC04 - Logout User', () => {
        const user = createTestUser();

        cy.createUserByApi(user);

        HomePage.visit();

        HomePage.signupLoginMenu()
            .click();

        LoginPage.login(
            user.email,
            user.password
        );

        HomePage.verifyLoggedInAs(
            user.name
        );

        HomePage.logoutMenu()
            .click();

        cy.url()
            .should('include', '/login');

        LoginPage.loginTitle()
            .should('be.visible');

        cy.deleteUserByApi(
            user.email,
            user.password
        );
    });


    // ============================================
    // TC05 - Register Existing Email
    // ============================================

    it(
        'TC05 - Register User with existing email',
        () => {
            const user = createTestUser();

            cy.createUserByApi(user);

            HomePage.visit();

            HomePage.signupLoginMenu()
                .click();

            LoginPage.signupTitle()
                .should('be.visible');

            LoginPage.startSignup(
                user.name,
                user.email
            );

            LoginPage.verifyExistingEmailMessage();

            cy.deleteUserByApi(
                user.email,
                user.password
            );
        }
    );

});