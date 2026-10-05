/**
 * Generate timestamp saat ini.
 * Digunakan sebagai bagian dari unique test data.
 */
export const generateTimestamp = () => {
    return Date.now();
};

/**
 * Generate random number untuk mengurangi kemungkinan
 * data duplikat ketika beberapa test berjalan sangat cepat.
 */
export const generateRandomNumber = () => {
    return Math.floor(Math.random() * 100000);
};

/**
 * Generate unique email untuk test registration/API.
 *
 * Contoh hasil:
 * qa_1791172800123_45210@example.com
 */
export const generateUniqueEmail = () => {
    const timestamp = generateTimestamp();
    const random = generateRandomNumber();

    return `qa_${timestamp}_${random}@example.com`;
};

/**
 * Generate unique username/name.
 *
 * Contoh hasil:
 * QA_User_1791172800123_45210
 */
export const generateUniqueName = () => {
    const timestamp = generateTimestamp();
    const random = generateRandomNumber();

    return `QA_User_${timestamp}_${random}`;
};

/**
 * Generate satu set identity unik.
 * Berguna jika email dan name harus berasal
 * dari satu data test yang sama.
 */
export const generateUniqueIdentity = () => {
    const timestamp = generateTimestamp();
    const random = generateRandomNumber();

    return {
        timestamp,
        name: `QA_User_${timestamp}_${random}`,
        email: `qa_${timestamp}_${random}@example.com`
    };
};