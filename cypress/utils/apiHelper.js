/**
 * Parse response body dari Automation Exercise API.
 *
 * Beberapa endpoint mengembalikan response body
 * dalam bentuk string JSON, sedangkan endpoint lain
 * dapat dibaca sebagai object.
 */
export const parseApiBody = (response) => {
    const body = response?.body ?? response;

    // Jika body masih berupa string JSON,
    // ubah menjadi JavaScript object.
    if (typeof body === 'string') {
        try {
            return JSON.parse(body);
        } catch (error) {
            throw new Error(
                `Failed to parse API response body: ${error.message}`
            );
        }
    }

    // Jika sudah berupa object, langsung gunakan.
    if (body && typeof body === 'object') {
        return body;
    }

    throw new Error(
        'API response body is empty or has an unsupported format.'
    );
};


/**
 * Mengambil application responseCode
 * dari response Automation Exercise API.
 */
export const getResponseCode = (response) => {
    const body = parseApiBody(response);

    return body.responseCode;
};


/**
 * Mengambil application response message.
 *
 * Automation Exercise umumnya menggunakan field:
 * message
 *
 * Fallback responseMessage disediakan apabila
 * format response berbeda.
 */
export const getResponseMessage = (response) => {
    const body = parseApiBody(response);

    return body.message ?? body.responseMessage;
};


/**
 * Mengambil HTTP status code dari cy.request().
 *
 * Contoh:
 * 200, 201, 404, dan sebagainya.
 */
export const getHttpStatus = (response) => {
    return response.status;
};


/**
 * Memastikan response mempunyai application
 * responseCode sebelum digunakan oleh test.
 */
export const hasResponseCode = (response) => {
    const body = parseApiBody(response);

    return Object.prototype.hasOwnProperty.call(
        body,
        'responseCode'
    );
};