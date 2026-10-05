import ContactPage from '../../pages/ContactPage';
import HomePage from '../../pages/HomePage';

import {
    createTestUser
} from '../../test-data/users';


describe('Contact and Test Cases Tests', () => {

    // ============================================
    // TC06 - Contact Us Form
    // ============================================

    it('TC06 - Contact Us Form', () => {
        const user = createTestUser();

        const contactData = {
            name: user.name,
            email: user.email,
            subject: 'QA Automation Test',
            message:
                'This message was submitted by Cypress automation testing.'
        };

        HomePage.visit();
        HomePage.verifyHomePageVisible();

        HomePage.contactUsMenu()
            .click();

        ContactPage.getInTouchTitle()
            .should('be.visible');

        ContactPage.fillContactForm(
            contactData
        );

        ContactPage.uploadFile({
            contents: Cypress.Buffer.from(
                'Automation Exercise Contact Us test file.'
            ),
            fileName: 'contact-upload.txt',
            mimeType: 'text/plain'
        });

        cy.on(
            'window:confirm',
            () => true
        );

        ContactPage.submitButton()
            .click();

        ContactPage.successMessage()
            .should('be.visible');

        ContactPage.homeButton()
            .click();

        HomePage.verifyHomePageVisible();
    });


    // ============================================
    // TC07 - Verify Test Cases Page
    // ============================================

    it('TC07 - Verify Test Cases Page', () => {
        HomePage.visit();
        HomePage.verifyHomePageVisible();

        HomePage.testCasesMenu()
            .click();

        cy.url()
            .should(
                'include',
                '/test_cases'
            );

        cy.contains('Test Cases')
            .should('be.visible');
    });

});