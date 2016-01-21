$(document).ready(function() {
  $('.btn').hover(function() {
    $(this).toggleClass('btn_hover');
  });

  // made from https://www.youtube.com/watch?v=KkzVFB3Ba_o

  // configuration
  var width = 1440;
  var speed = 1000;
  var pause = 5000;
  var currentSlide = 1;
  var currentButton = 1;

  // cache DOM
  var $jumbotron = $('#jumbotron');
  var $slider = $jumbotron.find('.slides');
  var $slides = $slider.find('.slide');
  var $overlap = $('#overlap');
  var $button_slider = $overlap.find('.slides');
  var $buttons = $button_slider.find('.slide')

  var interval;

  function startSlider() {
    interval = setInterval(function() {
      $slider.animate({'margin-left': '-='+width}, speed, function() {
        currentSlide++;
        if (currentSlide === $slides.length) {
          currentSlide = 1;
          $slider.css('margin-left', 0);
        }
      });
    }, pause);

    interval_2 = setInterval(function() {
      $button_slider.animate({'margin-left': '-='+width}, speed, function() {
        currentButton++;
        if (currentButton === $buttons.length) {
          currentButton = 1;
          $button_slider.css('margin-left', 0);
        }
      });
    }, pause);
  }

  function pauseSlider(){
    clearInterval(interval);
    clearInterval(interval_2);
  }

  $jumbotron.hover(pauseSlider, startSlider);

  startSlider();
});
