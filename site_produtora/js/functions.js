jQuery(function() {


    // Função para rolar a página até o vídeo centralizado
    jQuery('.pf__seta').on('click', function(e) {
        e.preventDefault();

        var $video = jQuery('.pf__portfolio__video');
        var videoOffset = $video.offset().top;             // Posição do elemento
        var videoHeight = $video.outerHeight();              // Altura do elemento
        var windowHeight = jQuery(window).height();          // Altura da janela

        // Calcula a posição de scroll para centralizar o vídeo na viewport
        var scrollPosition = videoOffset - ((windowHeight - videoHeight) / 2);

        jQuery('html, body').animate({
            scrollTop: scrollPosition
        }, 1000); // Duração da animação em milissegundos
    });
});



