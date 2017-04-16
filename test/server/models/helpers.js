

export const createUserData = function createUserDataFun(data = {}) {
  const defaultData = {
    username: 'AZZ_B',
    password: '123456',
    email: 'aikidocombat@hotmail.com',
    fullName: 'BENEKA AZZEDDINE',
    isVerified: true,
    bio: 'CS and Junior web developer',
  };

  return {...defaultData, ...data};
}
