class LoginPage {
    // =========================
    // Page Titles
    // =========================

    loginTitle() {
        return cy.contains('Login to your account');
    }

    signupTitle() {
        return cy.contains('New User Signup!');
    }

    // =========================
    // Login Form
    // =========================

    loginEmailInput() {
        return cy.get('[data-qa="login-email"]');
    }

    loginPasswordInput() {
        return cy.get('[data-qa="login-password"]');
    }

    loginButton() {
        return cy.get('[data-qa="login-button"]');
    }

    // =========================
    // Signup Form
    // =========================

    signupNameInput() {
        return cy.get('[data-qa="signup-name"]');
    }

    signupEmailInput() {
        return cy.get('[data-qa="signup-email"]');
    }

    signupButton() {
        return cy.get('[data-qa="signup-button"]');
    }

    // =========================
    // Error Messages
    // =========================

    invalidLoginMessage() {
        return cy.contains(
            'Your email or password is incorrect!'
        );
    }

    existingEmailMessage() {
        return cy.contains(
            'Email Address already exist!'
        );
    }

    // =========================
    // Login Action
    // =========================

    login(email, password) {
        this.loginEmailInput()
            .clear()
            .type(email);

        this.loginPasswordInput()
            .clear()
            .type(password);

        this.loginButton()
            .click();
    }

    // =========================
    // Signup Action
    // =========================

    startSignup(name, email) {
        this.signupNameInput()
            .clear()
            .type(name);

        this.signupEmailInput()
            .clear()
            .type(email);

        this.signupButton()
            .click();
    }

    // =========================
    // Validation
    // =========================

    verifyLoginPageVisible() {
        this.loginTitle()
            .should('be.visible');

        this.signupTitle()
            .should('be.visible');
    }

    verifyInvalidLoginMessage() {
        this.invalidLoginMessage()
            .should('be.visible');
    }

    verifyExistingEmailMessage() {
        this.existingEmailMessage()
            .should('be.visible');
    }
}

export default new LoginPage();