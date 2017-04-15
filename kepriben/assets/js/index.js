/* 
 * Theme Name: Kepriben
 * Author: hasnydes
 * Code: index.js
 * Description: Main JavaScript file
 * 
 */

(function($, window, undefined) {
  $(function() {
    $('#kepriben-menu-toggle').on('click', function(e) {
      e.preventDefault();
      $('body').toggleClass('show-menu');
    });
  });
})(jQuery, window);

(function($, window, undefined) {
	$(function() {
		$('.switcher-button').click(function(){
			if($(this).parent().css('right') == '-212px'){
				$(this).parent().animate({"right": "0px"}, 300);
				}
				else{
					$(this).parent().animate({"right": "-212px"}, 300);
				}
			});
		});
	})(jQuery, window);

