import { isEmail } from 'validator';

export const validateName = (name) => (name.length > 8) ? false : 'Name should be longer than 8 characters';
export const validateEmail = (email) => (isEmail(email)) ? false : 'Email must be a valid format';