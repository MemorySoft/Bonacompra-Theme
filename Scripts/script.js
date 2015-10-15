$(document).ready(function () {

    /* Configuración de ScrollUp
    ***********************************************************************/
    $(function () {
        $.scrollUp({
            scrollName: "scrollUp",
            topDistance: "300",
            topSpeed: 300,
            animation: "slide",
            animationInSpeed: 200,
            animationOutSpeed: 200,
            scrollText: "Subir",
            scrollImg: true,
            activeOverlay: false
        })
    });

    /* Desplegables del historial
    ***********************************************************************/
    $(".panel-desplegable").css("display", "none");
    $(".boton-panel").click(function () {
        var d = $(".panel-desplegable").eq($(this).index('.boton-panel'));
        var e = $(this);
        $(d).slideToggle(function () {
            if ($(this).css("display") == "none") {
                e.html("Mostrar").css("color", "#999999")
            } else {
                e.html("Ocultar").css("color", "red")
            }
        })
    });

    /* Despliega el menú para móviles
    ***********************************************************************/
    $(".movil-menu").click(function () {
        $(".menu").slideToggle("fast")
    });

    /* Gestiona las votaciones
    ***********************************************************************/
    $('.modulo-votaciones').each(function () {
        var id = $('.modulo-votaciones-boton', this).attr('id');

        // Votaciones abiertas
        var destino = 'http://votaciones.bonacompra.net/votacion/votar/?proyectoId=';
        $('.modulo-votaciones-boton', this).attr('href', destino + id);

        // Votaciones cerradas
        // var destino = 'http://bonacompra.net/votaciones-cerradas';
        // $('.modulo-votaciones-boton', this).attr('href', destino);

        $.ajax({
            url: 'http://votaciones.bonacompra.net/votacion/getvotos/?proyectoId=' + id,
            type: 'GET',
            context: $('.modulo-votaciones-contador', this),
            success: function (res) {
                var resultado = $(res.responseText).text();
                $(this).append('<strong>' + resultado + ' VOTOS</strong>');
                console.log(resultado);
            }
        });
    });

});