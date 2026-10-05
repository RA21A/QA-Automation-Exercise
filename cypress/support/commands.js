// ============================================
// LOGIN COMMAND
// ============================================

Cypress.Commands.add('login', (email, password) => {
    cy.visit('/login');

    cy.get('[data-qa="login-email"]')
        .clear()
        .type(email);

    cy.get('[data-qa="login-password"]')
        .clear()
        .type(password);

    cy.get('[data-qa="login-button"]')
        .click();
});


// ============================================
// CREATE USER VIA API
// ============================================

Cypress.Commands.add('createUserByApi', (user) => {
    return cy.request({
        method: 'POST',

        url: '/api/createAccount',

        form: true,

        failOnStatusCode: false,

        body: {
            name: user.name,
            email: user.email,
            password: user.password,

            title: user.title,

            birth_date: user.birthDay,
            birth_month: user.birthMonth,
            birth_year: user.birthYear,

            firstname: user.firstName,
            lastname: user.lastName,

            company: user.company,

            address1: user.address1,
            address2: user.address2,

            country: user.country,

            zipcode: user.zipcode,
            state: user.state,
            city: user.city,

            mobile_number: user.mobileNumber
        }
    });
});


// ============================================
// DELETE USER VIA API
// ============================================

Cypress.Commands.add('deleteUserByApi', (email, password) => {
    return cy.request({
        method: 'DELETE',

        url: '/api/deleteAccount',

        form: true,

        failOnStatusCode: false,

        body: {
            email,
            password
        }
    });
});


// ============================================
// VERIFY USER LOGIN STATUS
// ============================================

Cypress.Commands.add('verifyLoggedInAs', (username) => {
    cy.contains('Logged in as')
        .should('be.visible')
        .and('contain.text', username);
});


// ============================================
// DELETE ACCOUNT THROUGH UI
// ============================================

Cypress.Commands.add('deleteAccountByUi', () => {
    cy.get('a[href="/delete_account"]')
        .should('be.visible')
        .click();

    cy.get('[data-qa="account-deleted"]')
        .should('be.visible');

    cy.get('[data-qa="continue-button"]')
        .click();
});


// ============================================
// VISIT HOME PAGE
// ============================================

Cypress.Commands.add('visitHomePage', () => {
    cy.visit('/');

    cy.contains(
        'Full-Fledged practice website for Automation Engineers'
    ).should('be.visible');
});