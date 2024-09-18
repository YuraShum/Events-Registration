export const responseConstuctor = (response, statusCode, data) => {
    return response.status(statusCode).json(data)
}

export const validateEmail = (email) => {

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        throw new Error('Invalid email format.');
    }
    return true;
};