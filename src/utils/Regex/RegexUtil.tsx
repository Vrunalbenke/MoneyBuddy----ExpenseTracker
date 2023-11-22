export const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
export const passwordRegex =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
export const usernameRegex = /^[a-zA-Z0-9_-]{3,20}$/;
export const fullNameRegex = /^[A-Za-z '-]+$/;


export function isValidEmail(email: string) {
  if (!email.trim()) {
    return {
      isValid: false,
      errorMessage: 'Email required',
    };
  } else if (!emailRegex.test(email)) {
    return {
      isValid: false,
      errorMessage: 'Please input valid email',
    };
  }

  return {
    isValid: true,
    errorMessage: '',
  };
}

export function isValidPassword(password: string) {
  if (!password.trim()) {
    return {
      isValid: false,
      errorMessage: 'Password required',
    };
  } else if (!passwordRegex.test(password)) {
    return {
      isValid: false,
      errorMessage: 'Please input valid password',
    };
  }

  return {
    isValid: true,
    errorMessage: '',
  };
}

export function isValidUsername(username: string) {
  if (!username.trim()) {
    return {
      isValid: false,
      errorMessage: 'Username required',
    };
  } else if (!usernameRegex.test(username)) {
    return {
      isValid: false,
      errorMessage: 'Please input valid username',
    };
  }

  return {
    isValid: true,
    errorMessage: '',
  };
}

export function isValidName(name: string) {
  if (!name.trim()) {
    return {
      isValid: false,
      errorMessage: 'Full Name required',
    };
  } else if (!fullNameRegex.test(name)) {
    return {
      isValid: false,
      errorMessage: 'Please input valid name',
    };
  }

  return {
    isValid: true,
    errorMessage: '',
  };
}