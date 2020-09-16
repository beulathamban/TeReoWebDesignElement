console.log('js');

$(document).ready(function(){
  // brown
  $('.brown').click(function(){

    $('body')
    .css('background','brown')

    .append('<h1 id="brown" class="display-1 mt-5 text-light text-center">Parauri</h1>');

    $('#everything').hide();
    setTimeout(function(){
      $('#everything').fadeIn();// or fade, css display however you'd like.
    }, 5000);

    setTimeout(function(){
    $('#brown').fadeOut();// or fade, css display however you'd like.
    }, 5000);

    $('.brown').text('Parauri')
  });


  // purple
  $('.purple').click(function(){

    $('body')
    .css('background','purple')

    .append('<h1 id="purple" class="display-1 mt-5 text-light text-center">Tawa</h1>');

    $('#everything').hide();
    setTimeout(function(){
      $('#everything').fadeIn();// or fade, css display however you'd like.
    }, 5000);

    setTimeout(function(){
    $('#purple').fadeOut();// or fade, css display however you'd like.
    }, 5000);

    $('.purple').text('Tawa');
  });

  // Orange
  $('.orange').click(function(){

    $('body')
    .css('background','orange')

    .append('<h1 id="orange" class="display-1 mt-5 text-light text-center">Karaka</h1>');

    $('#everything').hide();
    setTimeout(function(){
      $('#everything').fadeIn();// or fade, css display however you'd like.
    }, 5000);

    setTimeout(function(){
    $('#orange').fadeOut();// or fade, css display however you'd like.
    }, 5000);

    $('.orange').text('Karaka');
  });

  // Black
  $('.black').click(function(){

    $('body')
    .css('background','black')

    .append('<h1 id="black" class="display-1 mt-5 text-light text-center">Mangu</h1>');

    $('#everything').hide();
    setTimeout(function(){
      $('#everything').fadeIn();// or fade, css display however you'd like.
    }, 5000);

    setTimeout(function(){
    $('#black').fadeOut();// or fade, css display however you'd like.
    }, 5000);

    $('.black').text('Mangu');
  });

  // Gold
  $('.gold').click(function(){

    $('body')
    .css('background','gold')

    .append('<h1 id="gold" class="display-1 mt-5 text-light text-center">kōura</h1>');

    $('#everything').hide();
    setTimeout(function(){
      $('#everything').fadeIn();// or fade, css display however you'd like.
    }, 5000);

    setTimeout(function(){
    $('#gold').fadeOut();// or fade, css display however you'd like.
    }, 5000);

    $('.gold').text('kōura');
  });

  // Gray
  $('.gray').click(function(){

    $('body')
    .css('background','gray')

    .append('<h1 id="gray" class="display-1 mt-5 text-light text-center">kiwikiwi</h1>');

    $('#everything').hide();
    setTimeout(function(){
      $('#everything').fadeIn();// or fade, css display however you'd like.
    }, 5000);

    setTimeout(function(){
    $('#gray').fadeOut();// or fade, css display however you'd like.
    }, 5000);

    $('.gray').text('kiwikiwi');
  });
});
