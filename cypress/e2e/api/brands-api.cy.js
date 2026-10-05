import {
    getResponseCode,
    getResponseMessage,
    parseApiBody
} from '../../utils/apiHelper';


describe('Brands API Tests', () => {

    // ============================================
    // API03 - GET All Brands List
    // ============================================

    it('API03 - Get All Brands List', () => {
        cy.request({
            method: 'GET',
            url: '/api/brandsList'
        }).then((response) => {
            const body = parseApiBody(response);

            expect(response.status).to.eq(200);

            expect(
                getResponseCode(response)
            ).to.eq(200);

            expect(body.brands)
                .to.be.an('array')
                .and.not.be.empty;
        });
    });


    // ============================================
    // API04 - PUT To All Brands List
    // ============================================

    it('API04 - PUT To All Brands List', () => {
        cy.request({
            method: 'PUT',
            url: '/api/brandsList',
            failOnStatusCode: false
        }).then((response) => {
            expect(
                getResponseCode(response)
            ).to.eq(405);

            expect(
                getResponseMessage(response)
            ).to.eq(
                'This request method is not supported.'
            );
        });
    });

});