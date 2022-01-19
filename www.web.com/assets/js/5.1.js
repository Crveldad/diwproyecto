function accionPlay() {
    if (!medio.paused && !medio.ended) {
        medio.pause();
        play.value = '\u25BA'; //\u25BA
    } else {
        medio.play();
        play.value = '\u23F8';
    }
}

function accionReiniciar() {
    //Usar propiedad .currentTime
    //Reproducir el vídeo
    //Cambiar el valor del botón a ||
    if (medio.ended || medio.paused) {
        medio.currentTime = 0;
        medio.play();
        play.value = '\u23F8';
    }
}

function accionRetrasar() {
    //Usar propiedad .curentTime
    //Contemplar que no existen valores negativos
    medio.currentTime -= 5;
}

function accionAdelantar() {
    //Contemplar que no existen valores mayores a medio.duration	
    medio.currentTime += 5;
}

function accionSilenciar() {
    //Utilizar medio.muted = true; o medio.muted = false;
    if (medio.muted) {
        medio.muted = false;
        silenciar.value = "darle voz";
    } else {
        medio.muted = true;
        silenciar.value = "silenciar";
    }
}

function accionMasVolumen() {
    //Contemplar que el valor máximo de volumen es 1
    if (medio.volume < 1)
        medio.volume += 0.1;
}

function accionMenosVolumen() {
    //Contemplar que el valor mínimo de volumen es 0
    if (medio.volume > 0)
        medio.volume -= 0.1;
}

function iniciar() {

    medio = document.getElementById('medio');
    play = document.getElementById('play');
    reiniciar = document.getElementById('reiniciar');
    retrasar = document.getElementById('retrasar');
    adelantar = document.getElementById('adelantar');
    silenciar = document.getElementById('silenciar');

    play.addEventListener('click', accionPlay);
    reiniciar.addEventListener('click', accionReiniciar);
    retrasar.addEventListener('click', accionRetrasar);
    adelantar.addEventListener('click', accionAdelantar);
    silenciar.addEventListener('click', accionSilenciar);
    menosVolumen.addEventListener('click', accionMenosVolumen);
    masVolumen.addEventListener('click', accionMasVolumen);
}

window.addEventListener('load', iniciar, false);