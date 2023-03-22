jQuery( window ).on( 'es.send_response' , function(e, form, response) {
	if(response && response.captchaHtml){
		if(typeof(form) !== 'undefined' && form.length > 0){
			var captchaDiv = form.find('.es_captcha');
			jQuery(captchaDiv).html(response.captchaHtml);
		}
	}
});

jQuery(document).ready(function(){
	if ( 'undefined' !== typeof ig_es_starter_main_js_params  ) {
		/** 
		 * Show optin consent only if
		 * It is enabled from settings
		 * User is not logged-in
		 * User hasn't opted out by clicking on no-thank-you link since in that case session tracking gets disabled
		*/
		if ( 'yes' === ig_es_starter_main_js_params.show_opt_in_consent && 'no' === ig_es_starter_main_js_params.user_logged_in && 'yes' === ig_es_starter_main_js_params.session_tracking_enabled && ! jQuery("#ig_es_opt_in_consent_block").length ) {
			jQuery("#billing_email").after("<div id='ig_es_opt_in_consent_block'> <span style='font-size: xx-small'> "+ ig_es_starter_main_js_params.consent_opt_in_message +" <a style='cursor: pointer' id='ig_es_consent_opt_out'> "+ ig_es_starter_main_js_params.consent_opt_out_message +" </a></span></div>");
		}

		jQuery("#ig_es_consent_opt_out").click( ig_es_disable_session_tracking );
    }
})

function ig_es_disable_session_tracking() {

	var data = {
		action: 'ig_es_disable_session_tracking',
		security: ig_es_starter_main_js_params.security
	};

	jQuery.post(
		ig_es_starter_main_js_params.ajax_url,data,
		function (response) {
			if(response.success) {
				jQuery("#ig_es_opt_in_consent_block").empty().append("<span style='font-size: xx-small'>" + ig_es_starter_main_js_params.conset_after_opt_out_message + "</span>").delay(5000).fadeOut();
			}
		}
	);
}
