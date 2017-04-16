export const isEmpty = value => value === undefined || value === null || value.trim() === '';



export function required(value) {
  return isEmpty(value);
}


export function notEmail(value) {
  if (!isEmpty(value) && !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i.test(value)) {
    return 'Invalid email address';
  }
}


export function minLength(min) {
  return value => {
    return (isEmpty(value) || value.length < min)
  };
}

export function maxLength(max) {
  return value => {
    return (isEmpty(value) || value.length > max)
  };
}

export function integer(value) {
  return !Number.isInteger(Number(value));
}
