import {
    getResponseCode,
    getResponseMessage,
    parseApiBody
} from '../../utils/apiHelper';

import {
    createTestUser
} from '../../test-data/users';


describe('Users API Tests', () => {

    // ============================================
    // Helper - API User Payload
    // ============================================

    const buildUserPayload = (user) => {
        return {
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
        };
    };


    // ============================================
    // API07 - Verify Login With Valid Details
    // ============================================

    it(
        'API07 - POST To Verify Login with valid details',
        () => {
            const user = createTestUser();

            cy.createUserByApi(user);

            cy.request({
                method: 'POST',
                url: '/api/verifyLogin',
                form: true,

                body: {
                    email: user.email,
                    password: user.password
                }
            }).then((response) => {
                expect(
                    getResponseCode(response)
                ).to.eq(200);

                expect(
                    getResponseMessage(response)
                ).to.eq('User exists!');
            });

            cy.deleteUserByApi(
                user.email,
                user.password
            );
        }
    );


    // ============================================
    // API08 - Verify Login Without Email
    // ============================================

    it(
        'API08 - POST To Verify Login without email parameter',
        () => {
            cy.request({
                method: 'POST',
                url: '/api/verifyLogin',
                form: true,
                failOnStatusCode: false,

                body: {
                    password: 'Test123456!'
                }
            }).then((response) => {
                expect(
                    getResponseCode(response)
                ).to.eq(400);

                expect(
                    getResponseMessage(response)
                ).to.eq(
                    'Bad request, email or password parameter is missing in POST request.'
                );
            });
        }
    );


    // ============================================
    // API09 - DELETE Verify Login
    // ============================================

    it('API09 - DELETE To Verify Login', () => {
        cy.request({
            method: 'DELETE',
            url: '/api/verifyLogin',
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
    // API10 - Invalid Login
    // ============================================

    it(
        'API10 - POST To Verify Login with invalid details',
        () => {
            cy.request({
                method: 'POST',
                url: '/api/verifyLogin',
                form: true,
                failOnStatusCode: false,

                body: {
                    email: 'invalid_user@example.com',
                    password: 'WrongPassword123!'
                }
            }).then((response) => {
                expect(
                    getResponseCode(response)
                ).to.eq(404);

                expect(
                    getResponseMessage(response)
                ).to.eq('User not found!');
            });
        }
    );


    // ============================================
    // API11 - Create User
    // ============================================

    it(
        'API11 - POST To Create/Register User Account',
        () => {
            const user = createTestUser();

            cy.request({
                method: 'POST',
                url: '/api/createAccount',
                form: true,

                body: buildUserPayload(user)
            }).then((response) => {
                expect(
                    getResponseCode(response)
                ).to.eq(201);

                expect(
                    getResponseMessage(response)
                ).to.eq('User created!');
            });

            // Cleanup account setelah test
            cy.deleteUserByApi(
                user.email,
                user.password
            );
        }
    );


    // ============================================
    // API12 - Delete User
    // ============================================

    it(
        'API12 - DELETE METHOD To Delete User Account',
        () => {
            const user = createTestUser();

            // Precondition:
            // buat account terlebih dahulu
            cy.createUserByApi(user);

            cy.request({
                method: 'DELETE',
                url: '/api/deleteAccount',
                form: true,

                body: {
                    email: user.email,
                    password: user.password
                }
            }).then((response) => {
                expect(
                    getResponseCode(response)
                ).to.eq(200);

                expect(
                    getResponseMessage(response)
                ).to.eq('Account deleted!');
            });
        }
    );


    // ============================================
    // API13 - Update User
    // ============================================

    it(
        'API13 - PUT METHOD To Update User Account',
        () => {
            const user = createTestUser();

            cy.createUserByApi(user);

            const updatedUser = {
                ...user,

                name: `${user.name}_Updated`,
                firstName: 'UpdatedQA',
                lastName: 'Tester',
                company: 'Updated QA Automation',
                city: 'Updated City'
            };

            cy.request({
                method: 'PUT',
                url: '/api/updateAccount',
                form: true,

                body: buildUserPayload(
                    updatedUser
                )
            }).then((response) => {
                expect(
                    getResponseCode(response)
                ).to.eq(200);

                expect(
                    getResponseMessage(response)
                ).to.eq('User updated!');
            });

            // Account tetap menggunakan
            // email + password yang sama
            cy.deleteUserByApi(
                updatedUser.email,
                updatedUser.password
            );
        }
    );


    // ============================================
    // API14 - Get User Detail By Email
    // ============================================

    it(
        'API14 - GET User Account Detail by Email',
        () => {
            const user = createTestUser();

            cy.createUserByApi(user);

            cy.request({
                method: 'GET',
                url: '/api/getUserDetailByEmail',

                qs: {
                    email: user.email
                }
            }).then((response) => {
                const body =
                    parseApiBody(response);

                expect(
                    getResponseCode(response)
                ).to.eq(200);

                expect(body.user)
                    .to.be.an('object');

                expect(body.user.email)
                    .to.eq(user.email);

                expect(body.user.name)
                    .to.eq(user.name);

                expect(body.user.first_name)
                    .to.eq(user.firstName);

                expect(body.user.last_name)
                    .to.eq(user.lastName);
            });

            cy.deleteUserByApi(
                user.email,
                user.password
            );
        }
    );

});