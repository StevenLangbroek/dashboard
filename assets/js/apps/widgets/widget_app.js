(function() {
  this.Dashboard.module('WidgetApp', function(WidgetApp, App, Backbone, Marionette, $, _) {
    var API;
    this.startWithParent = false;
    API = {
      initialize: function() {
        return new WidgetApp.List.Controller;
      }
    };
    return this.on('start', function() {
      console.info('[MODULE:WIDGETAPP] Started: ', this);
      return API.initialize();
    });
  });

}).call(this);
