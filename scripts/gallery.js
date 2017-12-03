$(function(){
  var $container = $('.gallery__items');
  $container.imagesLoaded(function() {
	    $container.isotope({
		  itemSelector: '.gallery__item',
		  percentPosition: true,
		  masonry: { columnWidth: '.grid-sizer' }
		});
	});
  $('.gallery__nav li').on( 'click', 'a', function() {
	  var filterValue = $( this ).attr('data-filter');
	  $container.isotope({ filter: filterValue });
  });
  $('.gallery__nav li').each( function( i, elem ) {
	  var $elem = $( elem );
    $elem.on( 'click', 'a', function() {
	    $elem.siblings().find('.active').removeClass('active');
	    $( this ).addClass('active');
    });
  });
  $('.gallery__nav a[data-filter="*"]').trigger("click");
});
