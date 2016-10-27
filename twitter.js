(function () {
    'use strict';
    var contenedores = document.getElementsByClassName('not-following');
    for (var i = 0; i < contenedores.length; i++) {
        var contenedor = contenedores[i];
        var botones = contenedor.getElementsByClassName('follow-button');
        var maximo = (botones.length < 100) ? botones.length : 100;
        for (var j = 0; j < maximo; j++) {
            var boton = botones.item(j);
            boton.click();
            setTimeout(function () {
                console.log('Usuario ', j);
            }, 250);
        }
    }
})();