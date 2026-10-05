class ContactPage {
    // =========================
    // Contact Us
    // =========================

    getInTouchTitle() {
        return cy.contains('Get In Touch', {
            matchCase: false
        });
    }

    nameInput() {
        return cy.get('[data-qa="name"]');
    }

    emailInput() {
        return cy.get('[data-qa="email"]');
    }

    subjectInput() {
        return cy.get('[data-qa="subject"]');
    }

    messageInput() {
        return cy.get('[data-qa="message"]');
    }

    uploadFileInput() {
        return cy.get('input[name="upload_file"]');
    }

    submitButton() {
        return cy.get('[data-qa="submit-button"]');
    }

    successMessage() {
        return cy.contains(
            'Success! Your details have been submitted successfully.'
        );
    }

    homeButton() {
        return cy.contains('a', 'Home');
    }

    fillContactForm(contactData) {
        this.nameInput()
            .clear()
            .type(contactData.name);

        this.emailInput()
            .clear()
            .type(contactData.email);

        this.subjectInput()
            .clear()
            .type(contactData.subject);

        this.messageInput()
            .clear()
            .type(contactData.message);
    }

    uploadFile(filePath) {
        this.uploadFileInput()
            .selectFile(filePath);
    }
}

export default new ContactPage();