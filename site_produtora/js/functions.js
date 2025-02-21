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

    /*
  jQuery('#formContato').on('submit', function(e) {
    e.preventDefault();
    
    // Pegando os valores do formulário
    var email = jQuery('#email').val();
    var mensagem = jQuery('#mensagem').val();

    // Aqui você pode implementar a lógica de envio (Fetch, AJAX, etc.)

    console.log('Email:', email);
    console.log('Mensagem:', mensagem);

    alert('Mensagem enviada com sucesso!');

    // Resetar formulário (opcional)
    jQuery(this).trigger('reset');
  });
*/

});



