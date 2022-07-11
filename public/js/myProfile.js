// HTML Targeting Elements
const userUpdateForm = document.querySelector('#userUpdate-form');
const updateBtn = document.querySelector('#update-btn');
const cancelBtn = document.querySelector('#cancel-btn');

const updateUserInfo = async (event) => {
  event.preventDefault();

  // HTML Targeting Elements
  const password = document.querySelector('#password-login').value.trim();
  const confirmPassword = document
    .querySelector('#password-confirm')
    .value.trim();
  const first_name = document.querySelector('#update-firstname').value.trim();
  const last_name = document.querySelector('#update-lastname').value.trim();
  const email = document.querySelector('#update-email').value.trim();
  const checkMessage = document.querySelector('.invalid-auth');
  const checkValidMessage = document.querySelector('.valid-auth');

  if (checkMessage) {
    checkMessage.remove();
  }

  if (checkValidMessage) {
    checkValidMessage.remove();
  }

  if (
    password === '' ||
    confirmPassword === '' ||
    first_name === '' ||
    last_name === '' ||
    email === ''
  ) {
    const message = {
      tag: 'p',
      setAttr: {
        class: 'invalid-auth',
      },
      // Display message on page
      textContent: 'Please fill out all fields.',
      appendTo: userUpdateForm,
    };
    return appendContent(message);
  }

  // Check if password and confirm password match
  if (password === confirmPassword) {
    console.log('Password match');
  } else {
    const message = {
      tag: 'p',
      setAttr: {
        class: 'invalid-auth',
      },
      // Display message on page
      textContent: 'Passwords do NOT match!',
      appendTo: userUpdateForm,
    };
    return appendContent(message);
  }

  // Check if email is valid
  if (email.includes('@') && email.includes('.')) {
    console.log('Email is valid');
  } else {
    const message = {
      tag: 'p',
      setAttr: {
        class: 'invalid-auth',
      },
      // Display message on page
      textContent: 'Email is invalid!',
      appendTo: userUpdateForm,
    };
    return appendContent(message);
  }

  // Check if first_name and last_name are valid
  if (first_name && last_name) {
    console.log('First and last name are valid');
  } else {
    const message = {
      tag: 'p',
      setAttr: {
        class: 'invalid-auth',
      },
      // Display message on page
      textContent: 'First or last name are invalid!',
      appendTo: userUpdateForm,
    };
    return appendContent(message);
  }
  // Send updated data to backend
  try {
    const response = await fetch('/api/users', {
      method: 'PUT',
      body: JSON.stringify({ first_name, last_name, email, password }),
      headers: { 'Content-Type': 'application/json' },
    });
    const dbMessage = await response.json();
    const message = {
      tag: 'p',
      setAttr: {
        class: 'valid-auth',
      },
      // Display message on page
      textContent: dbMessage,
      appendTo: userUpdateForm,
    };
    return appendContent(message);
  } catch (err) {
    console.log(err);
  }
};

// Event Listeners
updateBtn.addEventListener('click', updateUserInfo);
cancelBtn.addEventListener('click', (event) => {
  event.preventDefault();
  return document.location.replace('/');
});
