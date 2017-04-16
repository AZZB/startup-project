export const userNotFound = (field, value) => ({
  message: 'the profile does not exist',
  errors: {
    [field]: `${value} does not exist`,
  },
});
