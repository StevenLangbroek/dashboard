@App =

	Views: {}
	Collections: {}
	Models: {}
	vent: _.extend @, Backbone.Events
	
	drawCharts: ->
		new App.Views.WidgetView { el: '.widget--revenue', name: 'revenue' }
		new App.Views.WidgetView { el: '.widget--fills', name: 'fills' }
		new App.Views.WidgetView { el: '.widget--clicks', name: 'clicks' }
		new App.Views.WidgetView { el: '.widget--conversions', name: 'conversions' }
		new App.Views.BigWidgetView { el: '.widget--two-thirds', name: 'revenue' }

	start: (options = {}) ->
		google.load "visualization", "1", {packages:["corechart"]}
		new App.Views.TopView
		google.setOnLoadCallback ->

			App.drawCharts()

			Harvey.attach '(max-width: 1024px)',
				on: -> 
					$('.widgets').eq(0).owlCarousel
						navigation: true
						pagination: false
						itemsTablet: [1024, 2]
						itemsTabletSmall: [768, 1]

					App.vent.trigger 'viewport:change', 'portrait'

				off: ->
					$('.widgets').eq(0).data('owlCarousel').destroy()