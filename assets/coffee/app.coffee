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
		google.setOnLoadCallback(App.drawCharts)