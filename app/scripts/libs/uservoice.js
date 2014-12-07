/* jshint ignore:start */


// Include the UserVoice JavaScript SDK (only needed once on a page)
UserVoice=window.UserVoice||[];(function(){var uv=document.createElement('script');
uv.type='text/javascript';uv.async=true;uv.src='https://widget.uservoice.com/6ZxdF0ZIHNl8VdvcVRSm2A.js';
var s=document.getElementsByTagName('script')[0];s.parentNode.insertBefore(uv,s)})();

//
// UserVoice Javascript SDK developer documentation:
// https://www.uservoice.com/o/javascript-sdk
//

// Set colors
UserVoice.push(['set', {
	target : '#uservoice',
	accent_color: '#448dd6',
	trigger_color: 'white',
	trigger_background_color: 'rgba(46, 49, 51, 0.6)',
	strings: {
		post_suggestion_body: ''
		//post_suggestion_title: '',
		//post_suggestion_details_title: ''

	}
}]);


/* jshint ignore:end */
