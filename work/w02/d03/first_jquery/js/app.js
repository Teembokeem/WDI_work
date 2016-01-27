$(function(){
  console.log('worked');
  $('#addHome').removeClass('btn-danger').addClass('btn-success')

  // $('h1').css('text-align', 'center');
  // $('.jumbotron').addClass("text-center");
  $('h1').addClass('text-center')

  var $newLink = $( '<br><br><a id="zillowLink" href="http://www.zillow.com">Visit Zillow.com<a>' );
    $('body').append($newLink);
    $('#zillowLink').attr( 'target', '_blank' );
    console.log($('#zillowLink').attr('href'));


  $('#homes').on('click', 'button', function() {
    $(this).closest('tr').fadeOut(1000, function(wut) {
      wut.fadein(1000, function(wut) {
        wut.fadeOut(1000, function(wut) {
          wut.remove();
        });
      });
    });
  });
