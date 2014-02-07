(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  this.Dashboard.module('WidgetApp.List', function(List, App, Backbone, Marionette, $, _) {
    var _ref;
    return List.Controller = (function(_super) {
      __extends(Controller, _super);

      function Controller() {
        _ref = Controller.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      Controller.prototype.initialize = function() {
        var widgets;
        widgets = App.request('widget:entities');
        return this.listWidgets(widgets);
      };

      Controller.prototype.listWidgets = function(widgets) {
        widgets = this._getListWidgets(widgets);
        return App.widgetsRegion.show(widgets);
      };

      Controller.prototype._getListWidgets = function(widgets) {
        return new List.Widgets({
          collection: widgets
        });
      };

      return Controller;

    })(Marionette.Controller);
  });

}).call(this);
