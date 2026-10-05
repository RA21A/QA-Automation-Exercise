class SignupPage {
    // =========================
    // Account Information
    // =========================

    accountInformationTitle() {
        return cy.contains('Enter Account Information', {
            matchCase: false
        });
    }

    titleMr() {
        return cy.get('#id_gender1');
    }

    titleMrs() {
        return cy.get('#id_gender2');
    }

    nameInput() {
        return cy.get('[data-qa="name"]');
    }

    emailInput() {
        return cy.get('[data-qa="email"]');
    }

    passwordInput() {
        return cy.get('[data-qa="password"]');
    }

    daySelect() {
        return cy.get('[data-qa="days"]');
    }

    monthSelect() {
        return cy.get('[data-qa="months"]');
    }

    yearSelect() {
        return cy.get('[data-qa="years"]');
    }

    newsletterCheckbox() {
        return cy.get('#newsletter');
    }

    specialOffersCheckbox() {
        return cy.get('#optin');
    }

    // =========================
    // Address Information
    // =========================

    firstNameInput() {
        return cy.get('[data-qa="first_name"]');
    }

    lastNameInput() {
        return cy.get('[data-qa="last_name"]');
    }

    companyInput() {
        return cy.get('[data-qa="company"]');
    }

    address1Input() {
        return cy.get('[data-qa="address"]');
    }

    address2Input() {
        return cy.get('[data-qa="address2"]');
    }

    countrySelect() {
        return cy.get('[data-qa="country"]');
    }

    stateInput() {
        return cy.get('[data-qa="state"]');
    }

    cityInput() {
        return cy.get('[data-qa="city"]');
    }

    zipcodeInput() {
        return cy.get('[data-qa="zipcode"]');
    }

    mobileNumberInput() {
        return cy.get('[data-qa="mobile_number"]');
    }

    createAccountButton() {
        return cy.get('[data-qa="create-account"]');
    }

    // =========================
    // Account Created / Deleted
    // =========================

    accountCreatedTitle() {
        return cy.get('[data-qa="account-created"]');
    }

    accountDeletedTitle() {
        return cy.get('[data-qa="account-deleted"]');
    }

    continueButton() {
        return cy.get('[data-qa="continue-button"]');
    }

    // =========================
    // Actions
    // =========================

    fillAccountInformation(user) {
        if (user.title === 'Mrs') {
            this.titleMrs().check();
        } else {
            this.titleMr().check();
        }

        this.passwordInput().type(user.password);
        this.daySelect().select(user.birthDay);
        this.monthSelect().select(user.birthMonth);
        this.yearSelect().select(user.birthYear);

        this.newsletterCheckbox().check();
        this.specialOffersCheckbox().check();
    }

    fillAddressInformation(user) {
        this.firstNameInput().type(user.firstName);
        this.lastNameInput().type(user.lastName);
        this.companyInput().type(user.company);
        this.address1Input().type(user.address1);
        this.address2Input().type(user.address2);
        this.countrySelect().select(user.country);
        this.stateInput().type(user.state);
        this.cityInput().type(user.city);
        this.zipcodeInput().type(user.zipcode);
        this.mobileNumberInput().type(user.mobileNumber);
    }

    createAccount(user) {
        this.fillAccountInformation(user);
        this.fillAddressInformation(user);

        this.createAccountButton().click();
    }
}

export default new SignupPage();