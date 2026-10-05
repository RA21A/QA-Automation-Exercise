class CheckoutPage {
    // =========================
    // Address
    // =========================

    deliveryAddress() {
        return cy.get('#address_delivery');
    }

    billingAddress() {
        return cy.get('#address_invoice');
    }

    addressDetailsTitle() {
        return cy.contains('Address Details');
    }

    reviewOrderTitle() {
        return cy.contains('Review Your Order');
    }

    // =========================
    // Order Review
    // =========================

    orderTable() {
        return cy.get('#cart_info');
    }

    orderCommentInput() {
        return cy.get('textarea[name="message"]');
    }

    placeOrderButton() {
        return cy.contains('a', 'Place Order');
    }

    enterOrderComment(comment) {
        this.orderCommentInput()
            .clear()
            .type(comment);
    }

    // =========================
    // Payment
    // =========================

    nameOnCardInput() {
        return cy.get('[data-qa="name-on-card"]');
    }

    cardNumberInput() {
        return cy.get('[data-qa="card-number"]');
    }

    cvcInput() {
        return cy.get('[data-qa="cvc"]');
    }

    expiryMonthInput() {
        return cy.get('[data-qa="expiry-month"]');
    }

    expiryYearInput() {
        return cy.get('[data-qa="expiry-year"]');
    }

    payButton() {
        return cy.get('[data-qa="pay-button"]');
    }

    fillPaymentDetails(paymentData) {
        this.nameOnCardInput()
            .clear()
            .type(paymentData.nameOnCard);

        this.cardNumberInput()
            .clear()
            .type(paymentData.cardNumber);

        this.cvcInput()
            .clear()
            .type(paymentData.cvc);

        this.expiryMonthInput()
            .clear()
            .type(paymentData.expiryMonth);

        this.expiryYearInput()
            .clear()
            .type(paymentData.expiryYear);
    }

    submitPayment(paymentData) {
        this.fillPaymentDetails(paymentData);

        this.payButton()
            .click();
    }

    // =========================
    // Order Confirmation
    // =========================

    orderSuccessMessage() {
        return cy.contains(
            'Your order has been placed successfully!',
            {
                matchCase: false
            }
        );
    }

    orderConfirmedMessage() {
        return cy.contains(
            'Congratulations! Your order has been confirmed!',
            {
                matchCase: false
            }
        );
    }

    downloadInvoiceButton() {
        return cy.contains('a', 'Download Invoice');
    }

    continueButton() {
        return cy.get('[data-qa="continue-button"]');
    }
}

export default new CheckoutPage();