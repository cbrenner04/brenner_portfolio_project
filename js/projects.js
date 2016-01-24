$(document).ready(function() {
  $('.filter_btn').click(function() {
    $('.filter_btn').removeClass('active');
    $(this).addClass('active');

    var identity = $(this).attr('id');

    if(identity === 'ruby_btn') {
      $('#ruby').show();
      $('#selenium').hide();
      $('#appium').hide();
    } else if(identity === 'selenium_btn') {
      $('#ruby').hide();
      $('#selenium').show();
      $('#appium').hide();
      $('.fourth_proj').hide();
    } else if(identity === 'appium_btn') {
      $('#ruby').hide();
      $('#selenium').hide();
      $('#appium').show();
      $('.fourth_proj').hide();
    } else {
      $('#ruby').show();
      $('#selenium').show();
      $('#appium').show();
      $('.fourth_proj').show();
    };
  });
});
