

function RegistrirajSe(){
    clickLogin = (e) => {
        e.preventDefault();
        fetch ('https://www.fulek.com/data/api/user/register', {
           method: 'POST',
           body: JSON.stringify({
             username: this.state.idValue,
             password: this.state.pwValue
          }),
      }).then((response) => response.json())
        .then((result) => {
          if(result.message === 'SUCCESS'){
            alert('You are logged in.');
            this.goToMain();
           } else {
               alert('Please check your login information.');
           }
        });
      }
}