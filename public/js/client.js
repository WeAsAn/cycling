document.registration?.addEventListener('submit', async (event) => {
    
  event.preventDefault();
  console.log(event.target.inputemail.value);
  if (event.target.inputpassword.value.length >= 7) {
    const res = await fetch('/new/registration', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        login: event.target.inputlogin.value,
        email: event.target.inputemail.value,
        password: event.target.inputpassword.value,
      }),
    });
    const result = await res.json();
    console.log(result, 'nnam prishel otvet');
    if (result.status === 'ok') {
      window.location = '/entries';
    } else {
      document.querySelector('.errorMessage').innerText = result.errorMessage;
    }
  } else {
    alert('Введите пароль не менее 7 символов');
  }
});

document.login?.addEventListener('submit', async (event) => {
  console.log(event.target.inputemail.value);
  event.preventDefault();
  const res = await fetch('/new/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email: event.target.inputemail.value,
      password: event.target.inputpassword.value,
    }),
  });
  const result = await res.json();
  console.log(result);
  if (result.status === 'ok') {
    window.location.assign('/entries');
  } else {
    document.querySelector('.errorMessage').innerText = result.errorMessage;
  }
});
