let dropdown = document.getElementById('drop'); 

function toogleMenu() {
    dropdown.classList.toggle('active');
}


let button = document.getElementsByClassName('button_style');

function switchColor(couleur) { 
    for (let i = 0; i < button.length; i++) {
        button[i].style.backgroundColor = couleur;
        button[i].style.color = '#fff';
    }
}