function ShowMenu(id){
    var x = document.getElementById(id);
    if(x.className === "ul")
        x.className += " responsive";
    else
        x.className = "ul";
}

window.onload = () => {
    if(sessionStorage.getItem('uspijesnaPrijava') === 'true'){
        let liElement = document.getElementsByTagName('li')[1];
        console.log(liElement);
    }
};



