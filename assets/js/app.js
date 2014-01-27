(function() {
  this.App = {
    Views: {},
    Collections: {},
    Models: {},
    vent: _.extend(this, Backbone.Events),
    drawCharts: function() {
      new App.Views.WidgetView({
        el: '.widget--revenue',
        name: 'revenue'
      });
      new App.Views.WidgetView({
        el: '.widget--fills',
        name: 'fills'
      });
      new App.Views.WidgetView({
        el: '.widget--clicks',
        name: 'clicks'
      });
      new App.Views.WidgetView({
        el: '.widget--conversions',
        name: 'conversions'
      });
      return new App.Views.BigWidgetView({
        el: '.widget--two-thirds',
        name: 'revenue'
      });
    },
    start: function(options) {
      if (options == null) {
        options = {};
      }
      google.load("visualization", "1", {
        packages: ["corechart"]
      });
      new App.Views.TopView;
      return google.setOnLoadCallback(App.drawCharts);
    }
  };

}).call(this);
