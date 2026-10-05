import {
    getResponseCode,
    getResponseMessage,
    parseApiBody
} from '../../utils/apiHelper';


describe('Products API Tests', () => {

    // ============================================
    // API01 - GET All Products List
    // ============================================

    it('API01 - Get All Products List', () => {
        cy.request({
            method: 'GET',
            url: '/api/productsList'
        }).then((response) => {
            const body = parseApiBody(response);

            expect(response.status).to.eq(200);

            expect(
                getResponseCode(response)
            ).to.eq(200);

            expect(body.products)
                .to.be.an('array')
                .and.not.be.empty;
        });
    });


    // ============================================
    // API02 - POST To All Products List
    // ============================================

    it('API02 - POST To All Products List', () => {
        cy.request({
            method: 'POST',
            url: '/api/productsList',
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


    // ============================================
    // API05 - Search Product
    // ============================================

    it('API05 - POST To Search Product', () => {
        cy.request({
            method: 'POST',
            url: '/api/searchProduct',
            form: true,

            body: {
                search_product: 'top'
            }
        }).then((response) => {
            const body = parseApiBody(response);

            // Validate HTTP response
            expect(response.status).to.eq(200);

            // Validate application response code
            expect(
                getResponseCode(response)
            ).to.eq(200);

            // Validate products property exists
            expect(body)
                .to.have.property('products');

            // Validate products is an array
            expect(body.products)
                .to.be.an('array');

            // Validate search returns products
            expect(body.products)
                .to.not.be.empty;
        });
    });


    // ============================================
    // API06 - Search Without Parameter
    // ============================================

    it(
        'API06 - POST To Search Product without search_product parameter',
        () => {
            cy.request({
                method: 'POST',
                url: '/api/searchProduct',
                form: true,
                failOnStatusCode: false,
                body: {}
            }).then((response) => {
                expect(
                    getResponseCode(response)
                ).to.eq(400);

                expect(
                    getResponseMessage(response)
                ).to.eq(
                    'Bad request, search_product parameter is missing in POST request.'
                );
            });
        }
    );

});