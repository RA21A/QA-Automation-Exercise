import CartPage from '../../pages/CartPage';
import CheckoutPage from '../../pages/CheckoutPage';
import HomePage from '../../pages/HomePage';
import LoginPage from '../../pages/LoginPage';
import ProductsPage from '../../pages/ProductsPage';
import SignupPage from '../../pages/SignupPage';

import {
    createTestUser
} from '../../test-data/users';

import {
    paymentData
} from '../../test-data/payment';


describe('Checkout Tests', () => {

    // ============================================
    // Helper - Register User Through UI
    // ============================================

    const registerUserThroughUi = (user) => {
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
    };


    // ============================================
    // Helper - Add Product to Cart
    // ============================================

    const addProductAndOpenCart = () => {
        HomePage.productsMenu()
            .click();

        ProductsPage
            .addProductToCartByName(
                'Blue Top'
            )
            .click();

        ProductsPage
            .viewCartFromModal()
            .click();

        CartPage.verifyCartVisible();
    };


    // ============================================
    // Helper - Complete Order
    // ============================================

    const completeOrder = () => {
        CheckoutPage.addressDetailsTitle()
            .should('be.visible');

        CheckoutPage.reviewOrderTitle()
            .should('be.visible');

        CheckoutPage.enterOrderComment(
            paymentData.orderComment
        );

        CheckoutPage
            .placeOrderButton()
            .click();

        CheckoutPage.submitPayment(
            paymentData
        );

        CheckoutPage
            .orderConfirmedMessage()
            .should('be.visible');
    };


    // ============================================
    // TC14 - Register While Checkout
    // ============================================

    it(
        'TC14 - Place Order: Register While Checkout',
        () => {
            const user = createTestUser();

            HomePage.visit();
            HomePage.verifyHomePageVisible();

            addProductAndOpenCart();

            CartPage
                .proceedToCheckoutButton()
                .click();

            CartPage
                .registerLoginButton()
                .click();

            registerUserThroughUi(user);

            HomePage.cartMenu()
                .click();

            CartPage
                .proceedToCheckoutButton()
                .click();

            completeOrder();

            cy.deleteAccountByUi();
        }
    );


    // ============================================
    // TC15 - Register Before Checkout
    // ============================================

    it(
        'TC15 - Place Order: Register Before Checkout',
        () => {
            const user = createTestUser();

            HomePage.visit();
            HomePage.verifyHomePageVisible();

            HomePage.signupLoginMenu()
                .click();

            registerUserThroughUi(user);

            addProductAndOpenCart();

            CartPage
                .proceedToCheckoutButton()
                .click();

            completeOrder();

            cy.deleteAccountByUi();
        }
    );


    // ============================================
    // TC16 - Login Before Checkout
    // ============================================

    it(
        'TC16 - Place Order: Login Before Checkout',
        () => {
            const user = createTestUser();

            cy.createUserByApi(user);

            HomePage.visit();
            HomePage.verifyHomePageVisible();

            HomePage.signupLoginMenu()
                .click();

            LoginPage.login(
                user.email,
                user.password
            );

            HomePage.verifyLoggedInAs(
                user.name
            );

            addProductAndOpenCart();

            CartPage
                .proceedToCheckoutButton()
                .click();

            completeOrder();

            cy.deleteAccountByUi();
        }
    );


    // ============================================
    // TC23 - Verify Address
    // ============================================

    it(
        'TC23 - Verify Address Details in Checkout Page',
        () => {
            const user = createTestUser();

            HomePage.visit();
            HomePage.verifyHomePageVisible();

            HomePage.signupLoginMenu()
                .click();

            registerUserThroughUi(user);

            addProductAndOpenCart();

            CartPage
                .proceedToCheckoutButton()
                .click();

            CheckoutPage.deliveryAddress()
                .should(
                    'contain.text',
                    user.firstName
                )
                .and(
                    'contain.text',
                    user.lastName
                )
                .and(
                    'contain.text',
                    user.address1
                )
                .and(
                    'contain.text',
                    user.city
                )
                .and(
                    'contain.text',
                    user.state
                )
                .and(
                    'contain.text',
                    user.zipcode
                );

            CheckoutPage.billingAddress()
                .should(
                    'contain.text',
                    user.firstName
                )
                .and(
                    'contain.text',
                    user.lastName
                )
                .and(
                    'contain.text',
                    user.address1
                )
                .and(
                    'contain.text',
                    user.city
                )
                .and(
                    'contain.text',
                    user.state
                )
                .and(
                    'contain.text',
                    user.zipcode
                );

            cy.deleteAccountByUi();
        }
    );


    // ============================================
    // TC24 - Download Invoice
    // ============================================

    it(
        'TC24 - Download Invoice After Purchase Order',
        () => {
            const user = createTestUser();

            HomePage.visit();
            HomePage.verifyHomePageVisible();

            addProductAndOpenCart();

            CartPage
                .proceedToCheckoutButton()
                .click();

            CartPage
                .registerLoginButton()
                .click();

            registerUserThroughUi(user);

            HomePage.cartMenu()
                .click();

            CartPage
                .proceedToCheckoutButton()
                .click();

            completeOrder();

            CheckoutPage
                .downloadInvoiceButton()
                .click();

            cy.readFile(
                'cypress/downloads/invoice.txt',
                {
                    timeout: 15000
                }
            ).should('not.be.empty');

            CheckoutPage.continueButton()
                .click();

            cy.deleteAccountByUi();
        }
    );

});