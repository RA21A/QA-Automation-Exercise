class ProductDetailPage {
    // =========================
    // Product Information
    // =========================

    productInformation() {
        return cy.get('.product-information');
    }

    productName() {
        return cy.get('.product-information h2');
    }

    productCategory() {
        return cy
            .get('.product-information')
            .contains('Category:');
    }

    productPrice() {
        return cy.get('.product-information span span');
    }

    productAvailability() {
        return cy
            .get('.product-information')
            .contains('Availability:');
    }

    productCondition() {
        return cy
            .get('.product-information')
            .contains('Condition:');
    }

    productBrand() {
        return cy
            .get('.product-information')
            .contains('Brand:');
    }

    // =========================
    // Quantity / Cart
    // =========================

    quantityInput() {
        return cy.get('#quantity');
    }

    addToCartButton() {
        return cy.get('button.cart');
    }

    setQuantity(quantity) {
        this.quantityInput()
            .clear()
            .type(quantity);
    }

    addToCart(quantity = 1) {
        this.setQuantity(quantity);
        this.addToCartButton().click();
    }

    viewCartFromModal() {
        return cy.contains('a', 'View Cart');
    }

    // =========================
    // Review
    // =========================

    writeReviewTitle() {
        return cy.contains('Write Your Review', {
            matchCase: false
        });
    }

    reviewNameInput() {
        return cy.get('#name');
    }

    reviewEmailInput() {
        return cy.get('#email');
    }

    reviewTextArea() {
        return cy.get('#review');
    }

    reviewSubmitButton() {
        return cy.get('#button-review');
    }

    reviewSuccessMessage() {
        return cy.contains('Thank you for your review.');
    }

    submitReview(reviewData) {
        this.reviewNameInput()
            .clear()
            .type(reviewData.name);

        this.reviewEmailInput()
            .clear()
            .type(reviewData.email);

        this.reviewTextArea()
            .clear()
            .type(reviewData.review);

        this.reviewSubmitButton()
            .click();
    }
}

export default new ProductDetailPage();