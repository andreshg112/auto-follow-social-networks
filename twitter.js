(function () {
    'use strict';
    var contenedores = document.getElementsByClassName('not-following');
    for (var i = 0; i < contenedores.length; i++) {
        for (var j = 0; j < contenedores.length; j++) {
            var contenedor = contenedores[j];
            var botones = contenedor.getElementsByClassName('follow-button');
            for (var k = 0; k < botones.length; k++) {
                var boton = botones.item(k);
                boton.click();
            }
        }
    }
})();