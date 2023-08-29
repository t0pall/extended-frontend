import { Profile, ValidateProfileError } from '../../types/Profile';

export const validateProfileData = (
  profile?: Profile,
): ValidateProfileError[] => {
  if (!profile) {
    return [ValidateProfileError.NO_DATA];
  }

  const errors: ValidateProfileError[] = [];

  const {
    age, city, country, currency, firstname, lastname, username,
  } = profile;

  if (!firstname || !lastname) {
    errors.push(ValidateProfileError.INCORRECT_USER_DATA);
  }
  if (!username) {
    errors.push(ValidateProfileError.INCORRECT_USERNAME);
  }
  if (!age) {
    errors.push(ValidateProfileError.INCORRECT_AGE);
  }
  if (!city || !country) {
    errors.push(ValidateProfileError.INCORRECT_LOCATION);
  }
  if (!currency) {
    errors.push(ValidateProfileError.INCORRECT_CURRENCY);
  }

  return errors;
};
