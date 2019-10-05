$(function() {
  $('main > section').css('display', 'none');
  $('#home').css('display', 'block');
  //
  //

  $('#homeBtn').on('click', function() {
    $('main > section').css('display', 'none');
    $('#home').css('display', 'block');
  });
  $('#aboutBtn').on('click', function() {
    $('main > section').css('display', 'none');
    $('#about').css('display', 'block');
  });
  $('#myWorkBtn').on('click', function() {
    $('main > section').css('display', 'none');
    $('#myWork').css('display', 'block');
  });
  $('#contactMeBtn, #contactLink').on('click', function() {
    $('main > section').css('display', 'none');
    $('#contactMe').css('display', 'block');
  });
});
