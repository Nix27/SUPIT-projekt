window.onload = () => {
  const forma = document.getElementsByTagName('form')[0];

  forma.addEventListener('submit', event => {
    event.preventDefault();

    const formData = new FormData(forma);
    const data = Object.fromEntries(formData);

    fetch('https://www.fulek.com/data/api/user/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }).then(res => res.json())
      .then(data => console.log(data))
      .catch(err => console.log(err))
  });
}




