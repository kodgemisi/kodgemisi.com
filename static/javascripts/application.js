$(document).ready(function() {

    // fix main menu to page on passing
    $('.main.menu').visibility({
      type: 'fixed'
    });
    $('.overlay').visibility({
      type: 'fixed',
      offset: 80
    });

    //fix non-working card links :(
    $('#solutionMenu>a').on('click', function(){
      location.href = this.href;
    });

    // lazy load images
    $('.image').visibility({
      type: 'image',
      transition: 'vertical flip in',
      duration: 500
    });

    // show dropdown on hover
    $('.main.menu  .ui.dropdown').dropdown({
      on: 'hover'
    });

    $('.ui.dropdown').dropdown();

    $('.popup-activator').popup({
      hoverable: true
    });
  });
