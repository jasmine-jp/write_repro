$(function() {
  $('.home').hover(function() {
    $('.sub-home').fadeIn();
  }, function() {
    $('.sub-home').fadeOut();
  });
  $('.page').hover(function() {
    $('.sub-page').fadeIn();
  }, function() {
    $('.sub-page').fadeOut();
  });
});

