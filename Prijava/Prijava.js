window.onload = () => {
    const forma = document.getElementsByTagName('form')[0];
    
    forma.addEventListener('submit', event => {
        event.preventDefault();

        const formData = new FormData(forma);
        const data = Object.fromEntries(formData);

        fetch('https://www.fulek.com/data/api/user/login', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        }).then(response => response.json())
          .then(data => {
            if(data.statusCode === 200) {
                console.log(data);
            }else{
                console.log('error');
            }
        })
        .catch(error => console.log(error));
    });
};