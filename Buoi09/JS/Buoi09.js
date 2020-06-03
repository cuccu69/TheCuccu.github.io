function change_color(id) {
    var color =  document.getElementById(id);

    if(color.style.color == 'red') {
    document.getElementById(id).style.color = '#BFC5D1';
    } else {
        document.getElementById(id).style.color = 'red';
    }
}