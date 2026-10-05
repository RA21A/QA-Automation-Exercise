class CartPage {
    // =========================
    // Cart Page
    // =========================

    cartTable() {
        return cy.get('#cart_info');
    }

    cartRows() {
        return cy.get('#cart_info tbody tr');
    }

    verifyCartVisible() {
        this.cartTable().should('be.visible');
    }

    // =========================
    // Product Information
    // =========================

    productNames() {
        return cy.get('.cart_description h4 a');
    }

    productPrices() {
        return cy.get('.cart_price');
    }

    productQuantities() {
        return cy.get('.cart_quantity');
    }

    productTotals() {
        return cy.get('.cart_total');
    }

    productRowByName(productName) {
        return cy
            .contains('#cart_info tbody tr', productName);
    }

    productQuantityByName(productName) {
        return this
            .productRowByName(productName)
            .find('.cart_quantity button');
    }

    // =========================
    // Remove Product
    // =========================

    removeButtons() {
        return cy.get('.cart_quantity_delete');
    }

    removeProductByName(productName) {
        return this
            .productRowByName(productName)
            .find('.cart_quantity_delete');
    }

    emptyCartMessage() {
        return cy.contains('Cart is empty!');
    }

    // =========================
    // Checkout
    // =========================

    proceedToCheckoutButton() {
        return cy.contains('a', 'Proceed To Checkout');
    }

    registerLoginButton() {
        return cy
            .get('#checkoutModal')
            .should('be.visible')
            .find('a[href="/login"]')
            .first();
    }

    // =========================
    // Subscription
    // =========================

    subscriptionTitle() {
        return cy.contains('Subscription');
    }

    subscriptionEmailInput() {
        return cy.get('#susbscribe_email');
    }

    subscriptionButton() {
        return cy.get('#subscribe');
    }

    subscriptionSuccessMessage() {
        return cy.contains(
            'You have been successfully subscribed!'
        );
    }

    subscribe(email) {
        this.subscriptionEmailInput()
            .clear()
            .type(email);

        this.subscriptionButton()
            .click();
    }
}

export default new CartPage();