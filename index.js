$(document).ready(function(){
  $('#owl-carousel').owlCarousel({
    loop: true,
    margin: 30,
    dots: true,
    nav: false,
    items: 3,
    autoplay: true,
    autoplayTimeout: 5000,
    center: true,  // This centers the active item
    responsive: {
      0: { items: 1 },
      768: { items: 2 },
      992: { items: 3 }
    },
    onChanged: function(event) {
      // Remove all active classes first
      $('.item1').removeClass('active-card');
      
      // Add active class to center item
      var center = event.item.index;
      $('.owl-item').eq(center).find('.item1').addClass('active-card');
    }
  });
  
  // Initialize on load
  $('.owl-item.center .item1').addClass('active-card');
});