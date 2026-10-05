import CartPage from '../../pages/CartPage';
import HomePage from '../../pages/HomePage';
import ProductDetailPage from '../../pages/ProductDetailPage';
import ProductsPage from '../../pages/ProductsPage';

import {
    productData,
    reviewData
} from '../../test-data/products';


describe('Products Tests', () => {

    // ============================================
    // TC08 - All Products + Product Detail
    // ============================================

    it(
        'TC08 - Verify All Products and Product Detail Page',
        () => {
            HomePage.visit();
            HomePage.verifyHomePageVisible();

            HomePage.productsMenu()
                .click();

            cy.url()
                .should(
                    'include',
                    '/products'
                );

            ProductsPage.allProductsTitle()
                .should('be.visible');

            ProductsPage.productsList()
                .should('be.visible');

            ProductsPage.productCards()
                .should(
                    'have.length.greaterThan',
                    0
                );

            ProductsPage
                .firstViewProductButton()
                .click();

            cy.url()
                .should(
                    'include',
                    '/product_details/'
                );

            ProductDetailPage.productName()
                .should('be.visible');

            ProductDetailPage.productCategory()
                .should('be.visible');

            ProductDetailPage.productPrice()
                .should('be.visible');

            ProductDetailPage.productAvailability()
                .should('be.visible');

            ProductDetailPage.productCondition()
                .should('be.visible');

            ProductDetailPage.productBrand()
                .should('be.visible');
        }
    );


    // ============================================
    // TC09 - Search Product
    // ============================================

    it('TC09 - Search Product', () => {
        HomePage.visit();

        HomePage.productsMenu()
            .click();

        ProductsPage.allProductsTitle()
            .should('be.visible');

        ProductsPage.searchProduct(
            productData.searchKeyword
        );

        ProductsPage.searchedProductsTitle()
            .should('be.visible');

        ProductsPage.productNames()
            .should(
                'contain.text',
                productData.searchKeyword
            );
    });


    // ============================================
    // TC18 - Category Products
    // ============================================

    it('TC18 - View Category Products', () => {
        HomePage.visit();

        ProductsPage.categorySection()
            .should('be.visible');

        ProductsPage.categoryByName(
            'Women'
        ).click();

        ProductsPage.subCategoryByName(
            'Dress'
        ).click();

        ProductsPage.categoryProductsTitle()
            .should('contain.text', 'Women')
            .and('contain.text', 'Dress');

        ProductsPage.categoryByName(
            'Men'
        ).click();

        ProductsPage.subCategoryByName(
            'Tshirts'
        ).click();

        ProductsPage.categoryProductsTitle()
            .should('contain.text', 'Men')
            .and('contain.text', 'Tshirts');
    });


    // ============================================
    // TC19 - Brand Products
    // ============================================

    it(
        'TC19 - View and Cart Brand Products',
        () => {
            HomePage.visit();

            HomePage.productsMenu()
                .click();

            ProductsPage.brandsSection()
                .should('be.visible');

            ProductsPage.brandByName(
                'Polo'
            ).click();

            cy.url()
                .should(
                    'include',
                    '/brand_products/'
                );

            ProductsPage.brandProductsTitle()
                .should(
                    'contain.text',
                    'Polo'
                );

            ProductsPage.brandByName(
                'H&M'
            ).click();

            ProductsPage.brandProductsTitle()
                .should(
                    'contain.text',
                    'H&M'
                );
        }
    );


    // ============================================
    // TC21 - Add Review
    // ============================================

    it('TC21 - Add Review on Product', () => {
        HomePage.visit();

        HomePage.productsMenu()
            .click();

        ProductsPage.allProductsTitle()
            .should('be.visible');

        ProductsPage
            .firstViewProductButton()
            .click();

        ProductDetailPage.writeReviewTitle()
            .should('be.visible');

        ProductDetailPage.submitReview(
            reviewData
        );

        ProductDetailPage
            .reviewSuccessMessage()
            .should('be.visible');
    });


    // ============================================
    // TC22 - Recommended Items
    // ============================================

    it(
        'TC22 - Add to Cart from Recommended Items',
        () => {
            HomePage.visit();

            HomePage
                .recommendedItemsSection()
                .scrollIntoView()
                .should('be.visible');

            HomePage.recommendedItemsTitle()
                .should('be.visible');

            cy.get(
                '#recommended-item-carousel .active .productinfo p'
            )
                .first()
                .invoke('text')
                .then((productName) => {
                    const expectedProduct =
                        productName.trim();

                    cy.get(
                        '#recommended-item-carousel .active .add-to-cart'
                    )
                        .first()
                        .click();

                    ProductsPage
                        .viewCartFromModal()
                        .click();

                    CartPage.productNames()
                        .should(
                            'contain.text',
                            expectedProduct
                        );
                });
        }
    );

});