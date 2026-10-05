import {
    generateUniqueIdentity
} from '../utils/dataGenerator';

export const createTestUser = () => {
    const identity = generateUniqueIdentity();

    return {
        name: identity.name,
        email: identity.email,
        password: 'Test123456!',

        title: 'Mr',
        birthDay: '10',
        birthMonth: '5',
        birthYear: '2000',

        firstName: 'QA',
        lastName: 'Tester',
        company: 'QA Automation',

        address1: 'Jl. Testing Automation No. 1',
        address2: 'Jakarta',

        country: 'Canada',
        state: 'Jakarta',
        city: 'Jakarta',
        zipcode: '12345',

        mobileNumber: '081234567890'
    };
};