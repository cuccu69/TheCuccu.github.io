function change_color(id) {
    var color =  document.getElementById(id);

    if(color.style.color == 'red') {
    document.getElementById(id).style.color = '#BFC5D1';
    } else {
        document.getElementById(id).style.color = 'red';
    }
}

function change_background(id) {
    var background = document.getElementById(id);

    if(background == '#507BFC') {
        background.style.backgroundColor = '#98A0A6';
    } else {
        background.style.backgroundColor = '#507BFC';
    }
}