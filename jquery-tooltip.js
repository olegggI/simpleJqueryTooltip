(function($){
	$.fn.tooltip = function( options ) {
		//simple settings
		var settings = $.extend( {
		      'backgroundColor' : 'blue',
		      'margin' : 10,
		      'width' : 100,
		      'timeOut'  : 3000,
		    }, options),

		calculateLeft = function(element) {
			if (element.offset().left > settings.width) {
				return element.offset().left - settings.width - settings.margin;
			} else {
				return element.offset().left + element.width() + settings.margin;
			}
		},

		plugin = function() {
				var tooltip = $("<div class='tooltip'>" + $(this).attr('data-tooltip') + "</div>")
				.appendTo('body'),
				left = calculateLeft($(this));

				tooltip.css({ 
						"background-color": settings.backgroundColor,
						"position" : 'absolute',
						"width" : settings.width + 'px',
						"left": left + "px",
						"top": $(this).offset().top + "px"
					});

				setTimeout(function (){
					tooltip.remove();
				}, settings.timeOut);
			};

		return this.each(plugin);
	};
})
(jQuery)
