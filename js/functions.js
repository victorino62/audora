jQuery(function($) {
  // Função para rolar a página até o vídeo centralizado
  $('.pf__seta').on('click', function(e) {
    e.preventDefault();

    var $video = $('.pf__portfolio__video');
    var videoOffset = $video.offset().top;
    var videoHeight = $video.outerHeight();
    var windowHeight = $(window).height();

    // Calcula a posição de scroll para centralizar o vídeo na viewport
    var scrollPosition = videoOffset - ((windowHeight - videoHeight) / 2);

    $('html, body').animate({
      scrollTop: scrollPosition
    }, 1000);
  });

// Define intervalo para aplicar o tremor a cada 10 segundos, por exemplo
setInterval(function() {
  // Adiciona a classe que faz tremer
  $("#whatsapp-icon").addClass("shake");
  
  // Remove a classe após 0.6s (dur. da animação) para não ficar tremendo continuamente
  setTimeout(function() {
    $("#whatsapp-icon").removeClass("shake");
  }, 500);
  
}, 10000); // 10000ms = 10 segundos
  


// Seleciona todos os containers de waveform
$('.waveform').each(function(index, element) {
  // Cria um canvas para definir os gradientes
  const canvas = document.createElement('canvas');
  // Defina dimensões para garantir cálculos corretos
  // canvas.width = 300;
  // canvas.height = 150;
  const ctx = canvas.getContext('2d');

  // Define o gradiente da waveform
  const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height * 1.35);
  gradient.addColorStop(0, '#656666');
  gradient.addColorStop((canvas.height * 0.7) / canvas.height, '#656666');
  gradient.addColorStop((canvas.height * 0.7 + 1) / canvas.height, '#ffffff');
  gradient.addColorStop((canvas.height * 0.7 + 2) / canvas.height, '#ffffff');
  gradient.addColorStop((canvas.height * 0.7 + 3) / canvas.height, '#B1B1B1');
  gradient.addColorStop(1, '#B1B1B1');

  // Define o gradiente do progresso
  const progressGradient = ctx.createLinearGradient(0, 0, 0, canvas.height * 1.35);
  progressGradient.addColorStop(0, '#EE772F');
  progressGradient.addColorStop((canvas.height * 0.7) / canvas.height, '#EB4926');
  progressGradient.addColorStop((canvas.height * 0.7 + 1) / canvas.height, '#ffffff');
  progressGradient.addColorStop((canvas.height * 0.7 + 2) / canvas.height, '#ffffff');
  progressGradient.addColorStop((canvas.height * 0.7 + 3) / canvas.height, '#F6B094');
  progressGradient.addColorStop(1, '#F6B094');


  const audioUrl = index === 0 ? 'audio/test.mp3' : `audio/test${index + 1}.mp3`;


  // Cria a instância do WaveSurfer para o container atual
  const wavesurfer = WaveSurfer.create({
    container: element,
    waveColor: gradient,
    progressColor: progressGradient,  
    barWidth: 8,
    url: audioUrl,
  });

  // Evento de interação: play/pause ao clicar
  wavesurfer.on('interaction', () => {
    wavesurfer.playPause();
  });

  // Efeito de hover na waveform
  $(element).on('pointermove', function(e) {
    $(element).find('.hover').css('width', `${e.offsetX}px`);
  });

  // Função para formatar o tempo (minutos:segundos)
  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secondsRemainder = Math.round(seconds) % 60;
    const paddedSeconds = `0${secondsRemainder}`.slice(-2);
    return `${minutes}:${paddedSeconds}`;
  };

  // Atualiza o tempo atual e a duração total
  wavesurfer.on('ready', () => {
    $(element).find('.duration').text(formatTime(wavesurfer.getDuration()));
  });
  wavesurfer.on('timeupdate', (currentTime) => {
    $(element).find('.time').text(formatTime(currentTime));
  });
});
});

$(document).ready(function(){
  $('.menu-toggle').click(function(){
    $('.pf__header__nav__menu').toggleClass('active');
  });
});









  /*

  // Cria um canvas para criar os gradientes
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');

  // Define o gradiente da waveform
  const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height * 1.35);
  gradient.addColorStop(0, '#656666');
  gradient.addColorStop((canvas.height * 0.7) / canvas.height, '#656666');
  gradient.addColorStop((canvas.height * 0.7 + 1) / canvas.height, '#ffffff');
  gradient.addColorStop((canvas.height * 0.7 + 2) / canvas.height, '#ffffff');
  gradient.addColorStop((canvas.height * 0.7 + 3) / canvas.height, '#B1B1B1');
  gradient.addColorStop(1, '#B1B1B1');

  // Define o gradiente do progresso
  const progressGradient = ctx.createLinearGradient(0, 0, 0, canvas.height * 1.35);
  progressGradient.addColorStop(0, '#EE772F');
  progressGradient.addColorStop((canvas.height * 0.7) / canvas.height, '#EB4926');
  progressGradient.addColorStop((canvas.height * 0.7 + 1) / canvas.height, '#ffffff');
  progressGradient.addColorStop((canvas.height * 0.7 + 2) / canvas.height, '#ffffff');
  progressGradient.addColorStop((canvas.height * 0.7 + 3) / canvas.height, '#F6B094');
  progressGradient.addColorStop(1, '#F6B094');

  // Cria a instância do WaveSurfer
  const wavesurfer = WaveSurfer.create({
    container: '#waveform',
    waveColor: gradient,
    progressColor: progressGradient,
    barWidth: 8,
    url: 'audio/test.mp3',
  });

  // Evento de interação: play/pause ao clicar
  wavesurfer.on('interaction', () => {
    wavesurfer.playPause();
  });

  // Efeito de hover na waveform
  $('#waveform').on('pointermove', function(e) {
    $('#hover').css('width', `${e.offsetX}px`);
  });

  // Função para formatar o tempo (minutos:segundos)
  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secondsRemainder = Math.round(seconds) % 60;
    const paddedSeconds = `0${secondsRemainder}`.slice(-2);
    return `${minutes}:${paddedSeconds}`;
  };

  // Atualiza o tempo atual e a duração total
  wavesurfer.on('ready', () => {
    $('#duration').text(formatTime(wavesurfer.getDuration()));
  });
  wavesurfer.on('timeupdate', (currentTime) => {
    $('#time').text(formatTime(currentTime));
  });

});

*/



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





