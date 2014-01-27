class @App.Views.TopView extends Backbone.View

	el: '.top'

	events:
		'click .js-toggle-nav': 'toggleNavigation'

	toggleNavigation: ->
		$('.body').toggleClass 'body--nav-collapsed'