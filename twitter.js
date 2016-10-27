(function () {
    'use strict';
    var contenedores = document.getElementsByClassName('not-following');
    for (var i = 0; i < contenedores.length; i++) {
        var contenedor = contenedores[i];
        var botones = contenedor.getElementsByClassName('follow-button');
        for (var j = 0; j < botones.length; j++) {
            var boton = botones.item(j);
            boton.click();
            setTimeout(function () {
                console.log('Usuario ', j);
            }, 250);
        }
    }
})();