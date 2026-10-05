class ProductsPage {
    // =========================
    // Main Products Page
    // =========================

    allProductsTitle() {
        return cy.contains('All Products', {
            matchCase: false
        });
    }

    productsList() {
        return cy.get('.features_items');
    }

    productCards() {
        return cy.get('.product-image-wrapper');
    }

    productNames() {
        return cy.get('.productinfo p');
    }

    // =========================
    // Search
    // =========================

    searchInput() {
        return cy.get('#search_product');
    }

    searchButton() {
        return cy.get('#submit_search');
    }

    searchedProductsTitle() {
        return cy.contains('Searched Products', {
            matchCase: false
        });
    }

    searchProduct(productName) {
        this.searchInput()
            .clear()
            .type(productName);

        this.searchButton()
            .click();
    }

    // =========================
    // Product Navigation
    // =========================

    firstViewProductButton() {
        return cy
            .get('a[href^="/product_details/"]')
            .first();
    }

    viewProductByName(productName) {
        return cy
            .contains('.product-image-wrapper', productName)
            .find('a[href^="/product_details/"]');
    }

    // =========================
    // Add To Cart
    // =========================

    addToCartButtons() {
        return cy.get('.add-to-cart');
    }

    addProductToCartByName(productName) {
        return cy
            .contains('.product-image-wrapper', productName)
            .find('.productinfo .add-to-cart');
    }

    continueShoppingButton() {
        return cy.contains('button', 'Continue Shopping');
    }

    viewCartFromModal() {
        return cy.contains('a', 'View Cart');
    }

    // =========================
    // Category
    // =========================

    categorySection() {
        return cy.get('#accordian');
    }

    categoryByName(categoryName) {
        return cy.contains(
            '#accordian a',
            categoryName
        );
    }

    subCategoryByName(subCategoryName) {
        return cy.contains(
            '#accordian .panel-body a',
            subCategoryName
        );
    }

    categoryProductsTitle() {
        return cy.get('.title.text-center');
    }

    // =========================
    // Brands
    // =========================

    brandsSection() {
        return cy.get('.brands-name');
    }

    brandByName(brandName) {
        return cy.contains(
            '.brands-name a',
            brandName
        );
    }

    brandProductsTitle() {
        return cy.get('.title.text-center');
    }
}

export default new ProductsPage();