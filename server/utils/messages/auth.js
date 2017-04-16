export const successRegistration = () => ({
  success: true,
  message: 'successful registration',
});

export const userNotFound = () => ({
  success: false,
  message: 'Authentication failed. User not found',
  errors: { username: 'User not found' },
});

export const wrongPassword = () => ({
  success: false,
  message: 'Authentication failed. Wrong password',
  errors: {password: 'Wrong password'},
});

export const fieldAlreadyExist = (field) => ({
  success: false,
  message: `the ${field} are already exist`,
  errors: {[field]: `the ${field} are already exist`},
});

export const loginSuccess = (token, user) => ({
  success: true,
  message: 'User logged success',
  token,
  user,
});

export const loginWithTokenSuccess = (user) => ({
  success: true,
  message: 'User good logged',
  user,
});

export const emailLinkVerficationNeeded = () => ({
  success: false,
  message: 'Sorry! you need to verify you email by clicking to the link that we sent to  you in your email acount',
});

export const failedAuthToken = () => ({
  success: false,
  message: 'Failed to authenticate token',
});

export const noTokenProvided = () => ({
  success: false,
  message: 'No token provided',
});

export const invalidLinkEmailVerification = () => ({
  success: false,
  message: 'invalid verification link',
});

export const userAlreadyVerfied= () => ({
  success: false,
  message: 'the user are already verified',
});

export const successEmailVerification = () => ({
  success: true,
  message: 'successful email verification',
});
