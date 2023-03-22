jQuery(document).ready(function($) {
		
	// CODE JS COLLAPSE MORE/LESS
	/*$('.btn-read-more a').on('click', function(event) {
		event.preventDefault();
		var sectionID = $(this).attr('href').substring(1);
		var $section = $('#' + sectionID);

		if ($section.is(':visible')) {
			$section.slideUp(500);
			$(this).find('svg').removeClass('rotated');
			$(this).find('.elementor-button-text').html('read more');
			return false;
		} else {
			$section.slideDown(750);
			$(this).find('svg').addClass('rotated');
			$(this).find('.elementor-button-text').html('show less');
		}
	});*/
	$('.btn-read-more a').on('click', function(event) {
		event.preventDefault();
		var sectionID = $(this).attr('href').substring(1);
		var $section = $('#' + sectionID);

		$(this).closest('.btn-read-more').fadeOut(375);
		$section.slideDown(750);
		//$(this).find('svg').addClass('rotated');
		//$(this).find('.elementor-button-text').html('show less');
		
	});
	
	// CAROSELLO LOGHI
	if ($('#carosello-loghi').length > 0) {
		const loghiSwiper = new Swiper('#carosello-loghi .swiper-container', {
		  slidesPerView: 'auto',
		});
		loghiSwiper.update();
	}
	
	
	$('.elementor-tab-title').removeClass('elementor-active');
	$('.elementor-tab-content').css('display', 'none'); 
	
	// CLOSE ACCORDION BY DEFAULT
	var wait = 1000; setTimeout(function() {
			
	}, wait);
	
	
	
	// SCRIPT POPUP
	jQuery( document ).on( 'elementor/popup/show', () => {
		
				//jQuery('.elementor-popup-modal nav .menu'
		
		//console.log(1234);
		
		// ANIMATION LI MENU ON POPUP
		$(".elementor-popup-modal nav .menu > li > a").each(function(i) {
			$(this).delay(200*i).animate({
			  left: "0",
			  opacity: "1"
			}, 750);
		});
		// OPEN/CLOSE MENU POPUP		
		  var delay = 200; // imposta il ritardo a 200 millisecondi
		  var timeoutId; // inizializza una variabile per l'ID del timeout
		  var mq = window.matchMedia("(max-width: 767px)");

		  function hideOtherItems() {
			if (mq.matches) {
			  var $visibleItems = $(".elementor-popup-modal nav .menu > li:visible").not(this);
			  if ($visibleItems.length > 0) {
				$visibleItems.fadeOut();
			  }
			}
		  }

		  function showAllItems() {
			if (mq.matches) {
			  var $hiddenItems = $(".elementor-popup-modal nav .menu > li:hidden");
			  if ($hiddenItems.length > 0) {
				$hiddenItems.fadeIn();
			  }
			}
		  }

		  $(".elementor-popup-modal nav .menu li a[href='#']").click(function(e) {
			  console.log(345);
			e.preventDefault(); // previene il comportamento predefinito del link
			var $submenu = $(this).siblings(".sub-menu");
			var $othersubmenu = $(this).parent().siblings().find(".sub-menu");
			var $visibleSubmenu = $('.sub-menu:visible');
			var $parentLi = $(this).parent();

			hideOtherItems.call($parentLi);
			$submenu.slideToggle();
			$(this).toggleClass("active");
			e.stopPropagation(); // previene la propagazione dell'evento click sulla sottomenu
			clearTimeout(timeoutId); // cancella il timeout precedente
			timeoutId = setTimeout(function() {
			  $othersubmenu.animate({ opacity: 0 }, "fast", function() {
				  $(this).slideUp("fast", function() {
					$(this).removeAttr("style");
				  });
			  });
			  $(this).parent().siblings().find("a").removeClass("active");
			  showAllItems();
			}, delay);
		  });

		  $(".elementor-popup-modal nav .menu li .sub-menu").click(function(e) {
			  
				//e.stopPropagation(); // previene la propagazione dell'evento click sulla sottomenu
		  });

		  $(".elementor-popup-modal nav .menu li a.active").click(function() {
			  
			var $visibleSubmenu = $('.sub-menu:visible');
			if ($visibleSubmenu.length > 0) {
			  $visibleSubmenu.slideUp();
			  $(".elementor-popup-modal nav .menu li a").removeClass("active");
			  setTimeout(function() {
				showAllItems();
			  }, delay);
			}
		  });

		  mq.addListener(function() {
			if (!mq.matches) {
			  $(".elementor-popup-modal nav .menu > li").fadeIn();
			}
		  });
		
	});
	
	// CLOSE POPUP ON CLICK
	$( document ).on( 'click', '.close-popup a', function( event ) {
		
		elementorProFrontend.modules.popup.closePopup( {}, event );
	});
	
	console.log(123);
	
		
	//
	// STATS UPDATE
	//
	if ($('.live-data-count').length > 0) {
		
		
		//var plus = 10; // Per testare un finto incremento

		
		function updateVechainStats() {
			jQuery.ajax({
				url: '/wp-admin/admin-ajax.php',
				type: "GET",
				dataType: "json",
				data: {
					action: 'vechain_stats_ajax'
				},
				success: function(response) {
					
					console.log(response);
					
					//console.log('clauses_total - '  + response.data['clauses_total']);
					
					//plus = plus + 10; // Per testare un finto incremento
					
					
					
					$('.live-data-count').each(function(index, element) {
						
						var $this = $(element);						
						var $this_data = $this.data('live-data');
						
						if (response.data != undefined && typeof response.data != undefined && response.data[$this_data] != undefined && typeof response.data[$this_data] != undefined) {
							
						
							if ($this_data in response.data) {

								var $count = response.data[$this_data]; // + plus;  // Per testare un finto incremento


								var $counter = $this.find('.elementor-heading-title');


								if ($counter.data('live-number') == undefined || typeof $counter.data('live-number') == undefined || $counter.data('live-number') == '') {

									$counter.text('• '+$count.toLocaleString('en-US'));
									$counter.data('live-number', $count);

								} else {

									var $prev_count = $counter.data('live-number');


									if ($prev_count < $count) {

										var $difference = $count - $prev_count;

										//console.log($this_data + ' - '  +$count + ' - ' + $prev_count + ' = ' + $difference);

										for (let i = 1; i <= $difference; i++) {

											setTimeout(function() {											
												$prev_count = $prev_count + 1;
												//console.log($prev_count);
												$counter.text('• '+$prev_count.toLocaleString('en-US'));
											}, 50*i);
										}

										//console.log($this_data + ' - '  + $prev_count + ' > ' + $count);
									}	

									$counter.data('live-number', $count);

									//console.log($this_data + ' - '  + response.data[$this_data]);
								}


							}
							
						}
					});
				},
				error: function () {
					//console.log("error");
				}
			});			
		}
		
		updateVechainStats();
		
		window.setInterval(function(){
			//console.log('update');
			updateVechainStats();
		}, 3000);
	}
	

	/*$.getJSON("https://vechainstats.com/api/pro/vechain-org-summary/", function(result) {
		console.log( "success" );
		console.log(result);
	})
	.done(function(result) {
		console.log( "second success" );
		console.log(result);
	})
	.fail(function(result) {
		console.log( "error" );
		console.log(result);
	})
	.always(function(result) {
		console.log( "complete" );
		console.log(result);
	});*/
	/*
	$.ajax({
		url: 'https://vechainstats.com/api/pro/vechain-org-summary/',
		headers: {
			'Content-Type': 'application/x-www-form-urlencoded'
		},
		type: "GET",
		dataType: "json",
		data: {
		},
		success: function (result) {
			console.log( "success" );
			console.log(result);
		},
		error: function () {
			console.log("error");
		}
	});
	*/
	
});