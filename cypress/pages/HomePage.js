class HomePage {
    // =========================
    // Navigation
    // =========================

    visit() {
        cy.visit('/');
    }

    navigationMenu() {
        return cy.get('.shop-menu');
    }

    signupLoginMenu() {
        return this
            .navigationMenu()
            .find('a[href="/login"]')
            .first();
    }

    productsMenu() {
        return this
            .navigationMenu()
            .find('a[href="/products"]')
            .first();
    }

    cartMenu() {
        return this
            .navigationMenu()
            .find('a[href="/view_cart"]')
            .first();
    }

    contactUsMenu() {
        return this
            .navigationMenu()
            .find('a[href="/contact_us"]')
            .first();
    }

    testCasesMenu() {
        return this
            .navigationMenu()
            .find('a[href="/test_cases"]')
            .first();
    }

    logoutMenu() {
        return this
            .navigationMenu()
            .find('a[href="/logout"]')
            .first();
    }

    deleteAccountMenu() {
        return this
            .navigationMenu()
            .find('a[href="/delete_account"]')
            .first();
    }

    // =========================
    // Logged-in User
    // =========================

    loggedInAsText() {
        return cy.contains('Logged in as');
    }

    verifyLoggedInAs(username) {
        cy.contains('Logged in as')
            .should('be.visible')
            .and('contain.text', username);
    }

    // =========================
    // Homepage Validation
    // =========================

    verifyHomePageVisible() {
        cy.url().should('include', 'automationexercise.com');

        cy.contains(
            'Full-Fledged practice website for Automation Engineers'
        ).should('be.visible');
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
        return cy.contains('You have been successfully subscribed!');
    }

    subscribe(email) {
        this.subscriptionEmailInput()
            .clear()
            .type(email);

        this.subscriptionButton()
            .click();
    }

    // =========================
    // Recommended Items
    // =========================

    recommendedItemsSection() {
        return cy.get('#recommended-item-carousel');
    }

    recommendedItemsTitle() {
        return cy.contains('recommended items', {
            matchCase: false
        });
    }

    // =========================
    // Scroll
    // =========================

    scrollToBottom() {
        cy.scrollTo('bottom');
    }

    scrollToTop() {
        cy.scrollTo('top');
    }

    scrollUpButton() {
        return cy.get('#scrollUp');
    }

    clickScrollUpButton() {
        this.scrollUpButton()
            .should('be.visible')
            .click();
    }
}

export default new HomePage();