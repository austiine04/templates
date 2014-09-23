var $ = jQuery;
// Topmenu <ul> replace to <select>
$(function() {
    var $ = jQuery;
    var tempMenu = jQuery('#topmenu').clone();
    var mainNavigationMenu = jQuery('<div>');

    mainNavigationMenu.attr('id', 'topmenu-select');

    /* Replace unordered list with a "select" element to be populated with options, and create a variable to select our new empty option menu */
    mainNavigationMenu.html('<select class="select_styled" id="topm-select"></select>');
    jQuery('#topmenu').after(mainNavigationMenu);

    var selectMenu = mainNavigationMenu.children('select');

    /* Navigate our nav clone for information needed to populate options */
    jQuery(tempMenu).children('ul').children('li').each(function() {
        /* Get top-level link and text */
        var href = jQuery(this).children('a').attr('href');
        var text = jQuery(this).children('a').text();

        /* Append this option to our "select" */
        if (jQuery(this).is(".current-menu-item") && href != '#') {
            jQuery(selectMenu).append('<option value="'+href+'" selected>'+text+'</option>');
        } else if ( href == '#' ) {
            jQuery(selectMenu).append('<option value="'+href+'" disabled="disabled">'+text+'</option>');
        } else {
            jQuery(selectMenu).append('<option value="'+href+'">'+text+'</option>');
        }

        /* Check for "children" and navigate for more options if they exist */
        if (jQuery(this).children('ul').length > 0) {
            jQuery(this).children('ul').children('li').not(".mega-nav-widget").each(function() {

                /* Get child-level link and text */
                var href2 = jQuery(this).children('a').attr('href');
                var text2 = jQuery(this).children('a').text();

                /* Append this option to our "select" */
                if (jQuery(this).is(".current-menu-item") && href2 != '#') {
                    jQuery(selectMenu).append('<option value="'+href2+'" selected> &nbsp;|-- '+text2+'</option>');
                } else if ( href2 == '#' ) {
                    jQuery(selectMenu).append('<option value="'+href2+'" disabled="disabled"> &nbsp;|-- '+text2+'</option>');
                } else {
                    jQuery(selectMenu).append('<option value="'+href2+'"> &nbsp;|-- '+text2+'</option>');
                }

                // if (jQuery(this).is(".current-menu-item")) {
                // jQuery(selectMenu).append('<option value="'+href2+'" class="select-current" selected>'+text2+'</option>');
                // } else {
                // jQuery(selectMenu).append('<option value="'+href2+'"> &nbsp;|-- '+text2+'</option>');
                // }

                /* Check for "children" and navigate for more options if they exist */
                if (jQuery(this).children('ul').length > 0) {
                    jQuery(this).children('ul').children('li').each(function() {

                        /* Get child-level link and text */
                        var href3 = jQuery(this).children('a').attr('href');
                        var text3 = jQuery(this).children('a').text();

                        /* Append this option to our "select" */
                        if (jQuery(this).is(".current-menu-item")) {
                            jQuery(selectMenu).append('<option value="'+href3+'" class="select-current" selected> &nbsp;&nbsp;&nbsp;&nbsp;|-- '+text3+'</option>');
                        } else {
                            jQuery(selectMenu).append('<option value="'+href3+'"> &nbsp;&nbsp;&nbsp;&nbsp;|-- '+text3+'</option>');
                        }

                    });
                }

            });
        }

    });

    /* When our select menu is changed, change the window location to match the value of the selected option. */
    jQuery(selectMenu).change(function() {
        location = this.options[this.selectedIndex].value;
    });
});
  
jQuery(document).ready(function() {

	var screenRes = $(window).width();
   
	// Remove links outline in IE 7
	  $("a").attr("hideFocus", "true").css("outline", "none");

	//dropdown parent
      $(".dropdown-menu ul ul").parent("li").addClass("parent");

    // style Select, Radio, Checkbox
	  
	  if ($("div,p").hasClass("input_styled")) {
	    $(".input_styled input").customInput();
	  }
  	// toggle content
	$(".toggle_content").hide(); 	
	$(".toggle").toggle(function(){
		$(this).addClass("active");
		}, function () {
		$(this).removeClass("active");
	});
	
	$(".toggle").click(function(){
		$(this).next(".toggle_content").slideToggle(300,'easeInQuad');
	});
	// Post List
	jQuery(".recent_posts li:odd").addClass("odd");
	jQuery(".popular_posts li:odd").addClass("odd");
	// DropDown Menu
		jQuery(".dropdown ul ul").parent("li").addClass("parent");
		jQuery(".dropdown li ul li:first-child").addClass("first");
		jQuery(".dropdown li ul li:last-child").addClass("last");

	//FOOTER NAV
	jQuery(".footer_nav li:first-child").addClass("first");
	jQuery(".footer_nav li:last-child").addClass("last");

	// Resources Item 
	jQuery(".resources_list .resources_item:odd").addClass("odd");
	jQuery(".resources_list .resources_item:even").addClass("even");
	jQuery(".resources_list .resources_item:last-child").addClass("last");

	// widget archive
	jQuery(".widget_archive ul li:even").addClass("even");

	//Comment List 

	jQuery(".comment_list .children ul").parent("li").addClass("parent");
	jQuery(".comment_list ol ul").parent("li").addClass("parent");
	jQuery(".comment_list .parent").next("li").css("border-top","1px solid #e3e1da");

    // prettyPhoto lightbox, check if <a> has atrr data-rel and hide for Mobiles
	if($('a').is('[data-rel]') && screenRes > 600) {
        $('a[data-rel]').each(function() {
			$(this).attr('rel', $(this).data('rel'));
		});
		$("a[rel^='prettyPhoto']").prettyPhoto({social_tools:false});	
    }

});