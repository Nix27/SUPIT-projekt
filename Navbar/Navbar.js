function ShowMenu(id){
    var x = document.getElementById(id);
    if(x.className === "ul")
        x.className += " responsive";
    else
        x.className = "ul";
}

$(() => {
    const nastavniPlan = document.getElementsByTagName('li')[5];
    nastavniPlan.style.display = 'none';

    if(sessionStorage.getItem('uspijesnaPrijava') === 'true'){
        let liElement = $('li')[1];
        $(liElement).empty();
        $(liElement).append(`<a href="#"><i class="fa-solid fa-arrow-left"></i> odjavi <span>${sessionStorage.getItem('username')}</span></a>`);
        document.getElementsByTagName('span')[0].style.color = '#40ACFC';

        nastavniPlan.style.display = 'block';

        $(liElement).on('click', () => {
            sessionStorage.setItem('uspijesnaPrijava', false);
            sessionStorage.setItem('token', null);
            window.location.href = '../Početna/Početna.html';
        });
    }
});



