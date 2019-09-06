(function($){
	"use strict";

	$('.grid').masonry({
        itemSelector: '.grid-item',
    });

    $(".carousel-description").html($(".carousel--mobileview .carousel-indicators li").html());
    $('.carousel--mobileview').on('slid.bs.carousel', function () {
        $('.carousel-description').html($(".carousel--mobileview .carousel-indicators .active").html());
    });

    /* secondary indicators for carousel */
    $('.carousel').on('slid.bs.carousel', function() {
      $(".carousel-indicators2 li").removeClass("active");
      indicators = $(".carousel-indicators li.active").data("slide-to");
      a = $(".carousel-indicators2").find("[data-slide-to='" + indicators + "']").addClass("active");
      //console.log(indicators);
    })
    // on click on indicators2;
    $('.carousel-indicators2 li').on('click', function() {
        newindicator = $(this).data("slide-to");
        $(".carousel-indicators li").removeClass("active");
        $(".carousel-indicators2 li").removeClass("active");
        $(".carousel-indicators2").find("[data-slide-to='" + newindicator + "']").addClass("active");
        $(".carousel-indicators2").find("[data-slide-to='" + newindicator + "']").addClass("active");
        //console.log(newindicator);
    });
    /************************/

})(jQuery); // End of use strict