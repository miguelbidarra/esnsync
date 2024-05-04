
const APP_AUTH_SLOT = 'CURRENT_USER';
function getLoggedInUser() {
  const result = JSON.parse(localStorage.getItem(APP_AUTH_SLOT));
  return result?? null;
}

function logoutUser() {
  localStorage.setItem(APP_AUTH_SLOT, null);
}

function userLogin(username, password) {
  const result = {
    username,
    email: null,
    firstname: null,
    lastname: null,
    accountExists: null,
    correctPassword: null,
  };
  const storedData = JSON.parse(localStorage.getItem(username));

  if (!storedData) {
    result.accountExists = false;
  } else {
    result.accountExists = true;
    if (storedData.password === password) {
      result.email = storedData.email;
      result.correctPassword = true;
      result.firstname = storedData.firstname;
      result.lastname = storedData.lastname;

      localStorage.setItem(APP_AUTH_SLOT, JSON.stringify(storedData));
    } else {
      result.correctPassword = false;
    }
  }
  return result;
}

function userSignUp(firstname, lastname, username, email, password) {
  try {
    const accountData = {
      password,
      email,
      username,
      firstname,
      lastname,
    };

    localStorage.setItem(username, JSON.stringify(accountData));

    return userLogin(username, password);
  } catch (exception) {
    return null;
  }
}

function isNewUser(username) {
  const storedData = localStorage.getItem(username);
  return!storedData;
}

// Create a DEMO USER
function createDemoUser() {
  userSignUp(
    'Admin',
    'User',
    'admin',
    'admin@email.com',
    'password',
  );
}

export {
  userSignUp,
  userLogin,
  isNewUser,
  createDemoUser,
  getLoggedInUser,
  logoutUser,
};