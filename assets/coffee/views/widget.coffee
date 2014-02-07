class @App.Views.WidgetView extends Backbone.View

	initialize: (options) ->
		{ @name } = options
		@data = google.visualization.arrayToDataTable [["Year", "Sales"], ["2002", 600], ["2003", 1400], ["2004", 1000], ["2005", 1170], ["2006", 660], ["2007", 1030], ["2008", 960], ['2009', 1500], ['2010', 750], ['2011', 1200], ['2012', 600], ['2013', 900], ['2014', 1200]]
		@render()

		@listenTo App.vent, 'viewport:change', (size) ->
			@render()

	render: ->
		@color = @$el.find('.widget__graph').css 'background-color'
		@createLineChart()
		@createBarChart()

	createBarChart: ->
		chartElName = @name + '-bars'
		chartEl = document.getElementById(chartElName)
		@barChart = new google.visualization.ColumnChart chartEl
		@barChart.draw @data, @options

	createLineChart: ->
		@options = @_getChartOptions
		_.extend @options,
			backgroundColor: @color

		chartElName = @name + '-lines'
		chartEl = document.getElementById(chartElName)
		@lineChart = new google.visualization.LineChart chartEl
		@lineChart.draw @data, @options

	_getChartOptions:
		title: 'Revenue'
		chartArea:
			left: 0
			right: 0
		vAxis: { title: 'Month', titleTextStyle: { display:'none' }}
		backgroundColor: 'red'
		colors: ['white']
		legend: 'none'
		vAxis:
			gridlines:
				color: 'transparent'
			textPosition: 'none'
			baselineColor: 'transparent'
		hAxis:
			gridlines:
				color: 'transparent'
			textPosition: 'none'

class @App.Views.BigWidgetView extends @App.Views.WidgetView
	initialize: (options) ->
		{ @name } = options
		@data = google.visualization.arrayToDataTable [["Year", "Revenue"], ["01", 400],["02", 600], ["03", 1400], ["04", 1000], ["05", 1170], ["06", 660], ["07", 1030], ["08", 960], ['09', 1500], ['10', 750], ['11', 1200], ['12', 600]]
		@render()

	render: ->
		@createComboChart()

	createComboChart: ->
		chartElName = @name + '-big'
		chartEl = document.getElementById(chartElName)
		@barChart = new google.visualization.ColumnChart chartEl
		@barChart.draw @data, @options

	_getChartOptions:
		title: 'Revenue'
		chartArea:
			left: 0
			right: 0
			top: 0
		backgroundColor: 'white'
		colors: ['silver']
		legend: 'none'
		seriesType: "bars"
		series: {1: {type: "line"}}
		vAxis:
			gridlines:
				color: 'transparent'
			textPosition: 'none'
			baselineColor: 'transparent'
		hAxis:
			gridlines:
				color: 'transparent'
