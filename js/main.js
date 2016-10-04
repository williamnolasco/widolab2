var $icon_menu = $('.icon-menu2')
var $shadow_dropdown_menu = $('.shadow-dropdown-menu')
var $shadow_dropdown_menu_id = document.getElementById("shadow-dropdown-menu")
var $menu_displayed = $('.menu-displayed')
var $close_menu = $('.menu-displayed > p')
var $screen_values_your_talent = $('.screen-values-your-talent')
var $values_your_talent = $('.values-your-talent')
var $screen_widolab_is = $('.screen-widolab-is')
var $widolab_is = $('.widolab-is')
var $screen_how_do_we_do_it = $('.screen-how-do-we-do-it')
var $how_do_we_do_it = $('.how-do-we-do-it')
var $screen_benefits_of_using_widolab = $('.screen-benefits-of-using-widolab')
var $benefits_container  = $('.benefits-container')
var $screen_enjoy_every_day = $('.screen-enjoy-every-day')
var $enjoy_container = $('.enjoy-container')
var $screen_mail_only = $('.screen-mail-only')
var $mail_only = $('.mail-only')
var $modal_login = $('.modal-login')
var $modal_login_id = document.getElementById('modal-login')
var $enter_nav_link = $('.enter-nav-link')

$icon_menu.on('click', function(){
	$shadow_dropdown_menu.animate({
		'left' : '0%'
	}, 300);
	$menu_displayed.animate({
		'left' : '0px'
	}, 800);
});

$close_menu.on('click', function(){
	$shadow_dropdown_menu.animate({
		'left' : '-100%'
	}, 300);
	$menu_displayed.animate({
		'left' : '-300px'
	}, 400);
});

$enter_nav_link.on('click', function(){
	$modal_login.css({
		'display' : 'block'
	});
});

window.onclick = function(event){
	if( event.target == $shadow_dropdown_menu_id ){
		$shadow_dropdown_menu.animate({
			'left' : '-100%'
		}, 300);
		$menu_displayed.animate({
			'left' : '-300px'
		}, 400);
	}
	if( event.target == $modal_login_id ){
		$modal_login.css({
			'display' : 'none'
		});
	}
}

$(window).scroll(function(){
	var scrollTop = $(window).scrollTop()
	var scroll_screen_values_your_talent = $screen_values_your_talent.offset().top - 300
	if( scrollTop >=  scroll_screen_values_your_talent ){
		$values_your_talent.css({
			'animation-play-state' : 'running'
		});
	}

	var scroll_screen_widolab_is = $screen_widolab_is.offset().top - 300
	if( scrollTop >= scroll_screen_widolab_is ){
		$widolab_is.css({
			'animation-play-state' : 'running'
		});
	}

	var scroll_screen_how_do_we_do_it = $screen_how_do_we_do_it.offset().top - 300
	if( scrollTop >= scroll_screen_how_do_we_do_it ){
		$how_do_we_do_it.css({
			'animation-play-state' : 'running'
		});
	}

	var scroll_screen_benefits_of_using_widolab = $screen_benefits_of_using_widolab.offset().top - 300
	if( scrollTop >= scroll_screen_benefits_of_using_widolab ){
		$benefits_container.css({
			'animation-play-state' : 'running'
		});
	}

	var scroll_screen_enjoy_every_day = $screen_enjoy_every_day.offset().top - 300
	if( scrollTop >= scroll_screen_enjoy_every_day ){
		$enjoy_container.css({
			'animation-play-state' : 'running'
		}); 
	}

	var scroll_screen_mail_only = $screen_mail_only.offset().top - 200
	if( scrollTop >= scroll_screen_mail_only ){
		$mail_only.css({
			'animation-play-state' : 'running'
		});
	}
});

