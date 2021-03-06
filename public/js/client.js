// const rega = document.querySelector('.registration')

// console.log(rega);
document.registration?.addEventListener('submit', async (event) => {
  event.preventDefault();
  console.log(event.target);
  console.log(event.target.inputemail.value);
  if (event.target.inputpassword.value.length > 7) {
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
      window.location = '/home';
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
    window.location.assign('/home');
  } else {
    document.querySelector('.errorMessage').innerText = result.errorMessage;
  }
});

document.getElementsByName('deleteComment').addEventListener('click', async (event) => {
  event.preventDefault();
  const res = await fetch('/routes/:id', {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  if (res.status === 'ok') {
    document.querySelector('.deleteComment').closest('.card-body').remove();
console.log(document.mycomment);
// const comm = document.mycomment
// комментарий
document.mycomment?.addEventListener('submit', async (event) => {
  event.preventDefault();
  console.log(event.target.inputcomment.value);
  console.log(event.target.querySelector('.nav-link').innerText);
  console.log(event.target.rating.value);
  console.log(event.target.getAttribute('id'));
  const res = await fetch(`/new/addcomment`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      // user_id: event.target.querySelector('.nav-link').innerText,
      roure_id: event.target.getAttribute('id'),
      comment: event.target.inputcomment.value,
      rating: event.target.rating.value,
    }),
  });
  const result = await res.json();
  console.log(result);
  if (result.status === 'ok') {
    window.location.assign(`/routes/${event.target.getAttribute('id')}`);
  } else {
    document.querySelector('.errorMessage').innerText = result.errorMessage;
  }
});
