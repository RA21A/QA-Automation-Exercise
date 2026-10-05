import CartPage from '../../pages/CartPage';
import HomePage from '../../pages/HomePage';
import LoginPage from '../../pages/LoginPage';
import ProductDetailPage from '../../pages/ProductDetailPage';
import ProductsPage from '../../pages/ProductsPage';

import {
    createTestUser
} from '../../test-data/users';

import {
    generateUniqueEmail
} from '../../utils/dataGenerator';


describe('Cart Tests', () => {

    // ============================================
    // TC10 - Subscription Home
    // ============================================

    it(
        'TC10 - Verify Subscription in Home Page',
        () => {
            const email =
                generateUniqueEmail();

            HomePage.visit();

            HomePage.scrollToBottom();

            HomePage.subscriptionTitle()
                .should('be.visible');

            HomePage.subscribe(email);

            HomePage
                .subscriptionSuccessMessage()
                .should('be.visible');
        }
    );


    // ============================================
    // TC11 - Subscription Cart
    // ============================================

    it(
        'TC11 - Verify Subscription in Cart Page',
        () => {
            const email =
                generateUniqueEmail();

            HomePage.visit();

            HomePage.cartMenu()
                .click();

            CartPage.subscriptionTitle()
                .scrollIntoView()
                .should('be.visible');

            CartPage.subscribe(email);

            CartPage
                .subscriptionSuccessMessage()
                .should('be.visible');
        }
    );


    // ============================================
    // TC12 - Add Products
    // ============================================

    it('TC12 - Add Products in Cart', () => {
        HomePage.visit();

        HomePage.productsMenu()
            .click();

        ProductsPage
            .addProductToCartByName(
                'Blue Top'
            )
            .click();

        ProductsPage
            .continueShoppingButton()
            .click();

        ProductsPage
            .addProductToCartByName(
                'Men Tshirt'
            )
            .click();

        ProductsPage
            .viewCartFromModal()
            .click();

        CartPage.verifyCartVisible();

        CartPage.productNames()
            .should(
                'contain.text',
                'Blue Top'
            )
            .and(
                'contain.text',
                'Men Tshirt'
            );

        CartPage
            .productRowByName('Blue Top')
            .within(() => {
                cy.get('.cart_price')
                    .should('be.visible');

                cy.get('.cart_quantity')
                    .should('contain.text', '1');

                cy.get('.cart_total')
                    .should('be.visible');
            });

        CartPage
            .productRowByName('Men Tshirt')
            .within(() => {
                cy.get('.cart_price')
                    .should('be.visible');

                cy.get('.cart_quantity')
                    .should('contain.text', '1');

                cy.get('.cart_total')
                    .should('be.visible');
            });
    });


    // ============================================
    // TC13 - Product Quantity
    // ============================================

    it(
        'TC13 - Verify Product Quantity in Cart',
        () => {
            HomePage.visit();

            ProductsPage
                .firstViewProductButton()
                .click();

            cy.url()
                .should(
                    'include',
                    '/product_details/'
                );

            ProductDetailPage.addToCart(4);

            ProductDetailPage
                .viewCartFromModal()
                .click();

            CartPage
                .productQuantities()
                .first()
                .should(
                    'contain.text',
                    '4'
                );
        }
    );


    // ============================================
    // TC17 - Remove Product
    // ============================================

    it(
        'TC17 - Remove Products From Cart',
        () => {
            HomePage.visit();

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

            CartPage
                .productRowByName('Blue Top')
                .should('exist');

            CartPage
                .removeProductByName('Blue Top')
                .click();

            cy.contains(
                '#cart_info tbody tr',
                'Blue Top'
            ).should('not.exist');
        }
    );


    // ============================================
    // TC20 - Search + Cart After Login
    // ============================================

    it(
        'TC20 - Search Products and Verify Cart After Login',
        () => {
            const user = createTestUser();

            cy.createUserByApi(user);

            HomePage.visit();

            HomePage.productsMenu()
                .click();

            ProductsPage.searchProduct(
                'Blue Top'
            );

            ProductsPage.searchedProductsTitle()
                .should('be.visible');

            ProductsPage.productNames()
                .should(
                    'contain.text',
                    'Blue Top'
                );

            ProductsPage
                .addProductToCartByName(
                    'Blue Top'
                )
                .click();

            ProductsPage
                .viewCartFromModal()
                .click();

            CartPage.productNames()
                .should(
                    'contain.text',
                    'Blue Top'
                );

            HomePage.signupLoginMenu()
                .click();

            LoginPage.login(
                user.email,
                user.password
            );

            HomePage.verifyLoggedInAs(
                user.name
            );

            HomePage.cartMenu()
                .click();

            CartPage.productNames()
                .should(
                    'contain.text',
                    'Blue Top'
                );

            cy.deleteUserByApi(
                user.email,
                user.password
            );
        }
    );

});