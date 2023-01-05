function ShowMenu(id){
    var x = document.getElementById(id);
    if(x.className === "ul")
        x.className += " responsive";
    else
        x.className = "ul";
}

function IzmijeniNavbar(){
    var liElement = document.getElementsByTagName('li')[1];
    console.log(liElement);
}


