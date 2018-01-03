/* -------------------------------------
		CUSTOM FUNCTION WRITE HERE
-------------------------------------- */
jQuery(document).on('ready', function() {
	"use strict";
	/* -------------------------------------
     MASNORY GALLERY
     -------------------------------------- */
    jQuery(window).load(function () {
        jQuery('#wb-filtermasonry').isotope({
            itemSelector: '.masonry-grid',
            masonry: {columnWidth: 2}
        });
    });
    /* ---------------------------------------
			STICKY HEADER
	--------------------------------------- */
	jQuery('.wb-headerfixed').scrollToFixed();
    /* -------------------------------------
			STICKEY SIDEBAR
	-------------------------------------- */
    jQuery(document).ready(function(){
        jQuery('.wb-sidebar').stickySidebar({
            topSpacing: 100,
            bottomSpacing: 20,
            containerSelector: '.main-content',
            innerWrapperSelector: '.sidebar__inner'
        });	
    });
	/* -------------------------------------
			STICKEY Social Icons
	-------------------------------------- */
    jQuery(document).ready(function(){
        jQuery('.wb-socialshare').stickySidebar({
            topSpacing: 100,
            leftSpacing: 0,
            containerSelector: '.wb-detailpagecontent',
        });	
    });
    /* -------------------------------------
			PROGRESS BAR
	-------------------------------------- */
	/*try {
		jQuery('#wb-userskill').appear(function () {
			jQuery('.wb-skillholder').each(function () {
				jQuery(this).find('.wb-skillbar').animate({
					width: jQuery(this).attr('data-percent')
				}, 2500);
			});
		});
	} catch (err) {};*/
	/*---------------------------------------
			SKILLS PROGRESS BAR
	---------------------------------------*/
	try {
		jQuery('#bt-ourskill').appear(function () {
			jQuery('.bt-skillholder').each(function () {
				jQuery(this).find('.bt-skillbar').animate({
					width: jQuery(this).attr('data-percent')
				}, 2500);
			});
		});
	} catch (err) {}
	
	
	jQuery('#nav-icon1,#nav-icon2,#nav-icon3,#nav-icon4').click(function(){
		jQuery(this).toggleClass('open');
	});
    
    jQuery('#nav-icon1').click(function(){
		jQuery(".mobilemenu").toggleClass('mobilemenuopen');
	});
    /*---------------------------------------
			FACEBOOK SCROLL
	---------------------------------------*/


    $(window).scroll(function(){
       var top = $(this).scrollTop();
       var elem = $('.facebook-logo');
       if (top > 500) {
        
            elem.addClass( 'facebook-logo-IMPORTANT' );
      
       } else {
          elem.removeClass( 'facebook-logo-IMPORTANT' );
        }
       
     });

	
	
	/*jQuery('.wb-sidenav > li > a').on('click', function() {
		 var _currentVal = jQuery(this).html();
		 jQuery(".wb-current").text(_currentVal);
		 //jQuery(_currentVal).innerHTML('.wb-current');
	});*/
});