sessionStorage.setItem('uspijesnaPrijava', false);

$(() => {
    const forma = $('form')[0];
    let pElement = document.createElement('p');
    
    $(forma).on('submit', event => {
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
                sessionStorage.setItem('uspijesnaPrijava', true);
                sessionStorage.setItem('username', data.data.username);
                Poruka('Uspješna prijava :) Na početnu stranicu za 3,2,1...', forma, pElement);
                setTimeout(() => {
                    window.location.href = '../Početna/Početna.html';
                }, 3000);
            }else{
                Poruka('User not found', forma, pElement);
            }
        })
        .catch(error => console.log(error));
    });
});

function Poruka(msg, forma, pelement){
    pelement.innerHTML = msg;
    pelement.style.color = 'red';
    pelement.style.paddingTop = '5px';
    forma.appendChild(pelement);
}