import { userContact } from '../db/dbContact';

export const validateContact = (contact: userContact) => {
  if (!contact.firstName || typeof contact.firstName !== 'string') {
    return { status: 'Error', error: 'Please enter a valid first name' };
  }

  if (contact.firstName.length < 2 || contact.firstName.length > 20) {
    return { status: 'Error', error: 'First name must be 2- 20 characters' };
  }

  if (!contact.lastName || typeof contact.lastName !== 'string') {
    return { status: 'Error', error: 'Please enter a valid last name' };
  }

  if (contact.lastName.length < 2 || contact.lastName.length > 30) {
    return { status: 'Error', error: 'Last name must be 2- 30 characters' };
  }

  if (!contact.email || typeof contact.email !== 'string') {
    return { status: 'Error', error: 'Please enter a valid email' };
  }

  if (contact.email.length < 10 || contact.email.length > 40) {
    return { status: 'Error', error: 'Email must be 10- 40 characters' };
  }

  if (!contact.message || typeof contact.message !== 'string') {
    return { status: 'Error', error: 'Please enter a valid message' };
  }

  if (contact.message.length < 5) {
    return { status: 'Error', error: 'Message must be at least 5 characters' };
  }

  return { status: 'Ok', error: 'None' };
};
