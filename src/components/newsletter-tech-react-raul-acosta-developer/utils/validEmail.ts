const emailRegex = /^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,}$/;

export const isValidEmail = (email: string) => emailRegex.test(email.trim());
