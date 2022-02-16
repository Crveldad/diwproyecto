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


let legion1 = new Audio();
legion1.setAttribute('src', 'assets/audios/01 - hellish void - lobotomicide.mp3');
//legion1.setAttribute('src', 'assets/audios/01 - hellish void - lobotomicide.ogg');
let legion2 = new Audio();
legion2.setAttribute('src', 'assets/audios/02 - corrupted moon.mp3');
//legion2.setAttribute('src', 'assets/audios/02 - corrupted moon.ogg');
let legion3 = new Audio();
legion3.setAttribute('src', 'assets/audios/03 - black legion.mp3');
//legion3.setAttribute('src', 'assets/audios/03 - black legion.ogg');
let legion4 = new Audio();
legion4.setAttribute('src', 'assets/audios/04 - society of morbids.mp3');
//legion4.setAttribute('src', 'assets/audios/04 - society of morbids.ogg');
let legion5 = new Audio();
legion5.setAttribute('src', 'assets/audios/05 - terror priest.mp3');
//legion5.setAttribute('src', 'assets/audios/05 - terror priest.ogg');

function playLegion1() {
    if (!legion1.paused && !legion1.ended) {
        legion1.pause();
    } else {
        legion1.play();
    }
}

function playLegion2() {
    if (!legion2.paused && !legion2.ended) {
        legion2.pause();
    } else {
        legion2.play();
    }
}

function playLegion3() {
    if (!legion3.paused && !legion3.ended) {
        legion3.pause();
    } else {
        legion3.play();
    }
}

function playLegion4() {
    if (!legion4.paused && !legion4.ended) {
        legion4.pause();
    } else {
        legion4.play();
    }
}

function playLegion5() {
    if (!legion5.paused && !legion5.ended) {
        legion5.pause();
    } else {
        legion5.play();
    }
}

//le meto jQuery
$(document).ready(function() {

    $(".volver").click(function() {
        $('html, body').animate({ scrollTop: 0 }, 'slow');
    });


    let x = true;
    $('#trigger').on("click", function(e) {
        console.log("va");
        e.preventDefault();
        if (x) {
            $('nav').stop().slideToggle('fast');
            x = false;
        } else {
            $('nav').stop().slideToggle('fast', function() {
                $('nav').css('display', 'block');
                x = true;
            })
        }
    });
});