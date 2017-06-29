'use strict';

// Hover for mobile
$('span').on('click', function(){
  $('nav ul').toggleClass('show');
});

//Swaps image on "About Me" page
$('.ranger').on('click', function() {
  $('.ranger').fadeOut(400, function(){
    $('.portrait').fadeIn(400, function(){
      $('.portrait').removeClass('.invisible');
    });
  });
});

//Swaps paragraphs on "About Me" page
$('.summary').on('click', function() {
  $('.summary').fadeOut(400, function(){
    $('.skills').fadeIn(400, function(){
      $('.skills').removeClass('.invisible');
    });
  });
});
