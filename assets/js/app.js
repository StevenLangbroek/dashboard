(function() {
  this.App = {
    Views: {},
    Collections: {},
    Models: {},
    vent: _.extend(this, Backbone.Events),
    drawCharts: function() {
      App.widgets = [];
      App.widgets.push(new App.Views.WidgetView({
        el: '.widget--revenue',
        name: 'revenue'
      }));
      App.widgets.push(new App.Views.WidgetView({
        el: '.widget--fills',
        name: 'fills'
      }));
      App.widgets.push(new App.Views.WidgetView({
        el: '.widget--clicks',
        name: 'clicks'
      }));
      App.widgets.push(new App.Views.WidgetView({
        el: '.widget--conversions',
        name: 'conversions'
      }));
      return App.widgets.push(new App.Views.BigWidgetView({
        el: '.widget--two-thirds',
        name: 'revenue'
      }));
    },
    start: function(options) {
      if (options == null) {
        options = {};
      }
      google.load("visualization", "1", {
        packages: ["corechart"]
      });
      new App.Views.TopView;
      return google.setOnLoadCallback(function() {
        App.drawCharts();
        Harvey.attach('(max-width: 1024px)', {
          on: function() {
            $('.widgets').eq(0).owlCarousel({
              navigation: true,
              pagination: false,
              itemsTablet: [1024, 2],
              itemsTabletSmall: [768, 1]
            });
            return App.vent.trigger('viewport:change', 'portrait');
          },
          off: function() {
            return $('.widgets').eq(0).data('owlCarousel').destroy();
          }
        });
        return Harvey.attach('(min-width: 1024px)', {
          on: function() {
            return App.vent.trigger('viewport:change', 'desktop');
          }
        });
      });
    }
  };

}).call(this);
