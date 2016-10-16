(function () {
    'use strict';
    //20 people per hour. http://www.jennstrends.com/limits-on-instagram/
    var botones = document.getElementsByClassName("_aj7mu _2hpcs _95tat _o0442");
    var maximo = (botones.length < 20) ? botones.length : 20;
    for (var i = 0; i < botones.length; i++) {
        var boton = botones.item(i);
        if (boton.textContent == 'Seguir') {
            boton.click();
        }
    }
})();