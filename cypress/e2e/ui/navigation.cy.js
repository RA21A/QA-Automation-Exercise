import HomePage from '../../pages/HomePage';


describe('Navigation and Scroll Tests', () => {

    // ============================================
    // TC25 - Scroll Up Using Arrow
    // ============================================

    it(
        'TC25 - Verify Scroll Up Using Arrow Button',
        () => {
            HomePage.visit();
            HomePage.verifyHomePageVisible();

            HomePage.scrollToBottom();

            HomePage.subscriptionTitle()
                .should('be.visible');

            HomePage.clickScrollUpButton();

            cy.contains(
                'Full-Fledged practice website for Automation Engineers'
            )
                .should('be.visible');
        }
    );


    // ============================================
    // TC26 - Scroll Up Without Arrow
    // ============================================

    it(
        'TC26 - Verify Scroll Up Without Arrow Button',
        () => {
            HomePage.visit();
            HomePage.verifyHomePageVisible();

            HomePage.scrollToBottom();

            HomePage.subscriptionTitle()
                .should('be.visible');

            HomePage.scrollToTop();

            cy.contains(
                'Full-Fledged practice website for Automation Engineers'
            )
                .should('be.visible');
        }
    );

});