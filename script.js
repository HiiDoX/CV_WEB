function affichage(){
    let main = document.getElementById('main');
    let lat = document.getElementById('latBarre');
    if (lat.style.display == 'none'){
        main.style.display = 'none';
        lat.style.display = 'inline';
    } else {
        main.style.display = 'inline';
        lat.style.display = 'none';
    }
}