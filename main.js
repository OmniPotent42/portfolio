jQuery(document).ready(function($) { 
  
  // function to handle showing/hiding the different screen options
  $('.examples nav button').click(function() {
    $(this).siblings().removeAttr('data-active');
    $(this).attr('data-active', '');
    
    let index = $(this).index();
    
    let screens = $(this).closest('.examples').find('.screen');
    
    screens.removeAttr('data-active');
    screens.eq(index).attr('data-active', '');
  })
  
  let screen = '.screen-inner-container';
  
  // clicking outside of the screen area cancels the scroll ability
  $(document).click(function(e) {
    if ($(e.target).closest(screen).length === 0) {
      $(screen).removeAttr('data-scroll');
    }
  })
  
  $(screen).click(function() {
    $(this).attr('data-scroll', '');
  })
  
  // handles clicking on the 'see examples' buttons
  $('button[data-show-examples]').click(function() {
    $(this).parent().siblings('.examples').slideDown();
    $(this).attr('data-active', '').addClass('fadeOut');
  })
  
  $('.examples nav select').change(function(e) {
    let index = $(this).prop('selectedIndex');
    
    let inners = $(this).closest('.examples').find('.screen-inner');
    
    inners.each(function() {
      let imgs = $(this).children();
      imgs.removeAttr('data-active');
      imgs.eq(index).attr('data-active', '');
    })
  })
})