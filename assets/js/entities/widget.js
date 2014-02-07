(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  this.Dashboard.module('Entities', function(Entities, App, Backbone, Marionette, $, _) {
    var API, _ref, _ref1;
    Entities.Widget = (function(_super) {
      __extends(Widget, _super);

      function Widget() {
        _ref = Widget.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      Widget.prototype.urlRoot = '';

      return Widget;

    })(Backbone.Model);
    Entities.Widgets = (function(_super) {
      __extends(Widgets, _super);

      function Widgets() {
        _ref1 = Widgets.__super__.constructor.apply(this, arguments);
        return _ref1;
      }

      Widgets.prototype.url = '';

      return Widgets;

    })(Backbone.Collection);
    API = {
      getWidgets: function() {
        var widgets;
        widgets = new Entities.Widgets([
          {
            name: 'Revenue',
            short: 'revenue',
            data: [["Year", "Sales"], ["2002", 600], ["2003", 1400], ["2004", 1000], ["2005", 1170], ["2006", 660], ["2007", 1030], ["2008", 960], ['2009', 1500], ['2010', 750], ['2011', 1200], ['2012', 600], ['2013', 900], ['2014', 1200]]
          }, {
            name: 'Fills',
            short: 'revenue',
            data: [["Year", "Sales"], ["2002", 600], ["2003", 1400], ["2004", 1000], ["2005", 1170], ["2006", 660], ["2007", 1030], ["2008", 960], ['2009', 1500], ['2010', 750], ['2011', 1200], ['2012', 600], ['2013', 900], ['2014', 1200]]
          }, {
            name: 'Clicks',
            short: 'revenue',
            data: [["Year", "Sales"], ["2002", 600], ["2003", 1400], ["2004", 1000], ["2005", 1170], ["2006", 660], ["2007", 1030], ["2008", 960], ['2009', 1500], ['2010', 750], ['2011', 1200], ['2012', 600], ['2013', 900], ['2014', 1200]]
          }, {
            name: 'Conversions',
            short: 'revenue',
            data: [["Year", "Sales"], ["2002", 600], ["2003", 1400], ["2004", 1000], ["2005", 1170], ["2006", 660], ["2007", 1030], ["2008", 960], ['2009', 1500], ['2010', 750], ['2011', 1200], ['2012', 600], ['2013', 900], ['2014', 1200]]
          }
        ]);
        return widgets;
      }
    };
    App.reqres.setHandler('widget:entities', function() {
      return API.getWidgets();
    });
    return this.on('start', function() {
      return console.info('[ENTITIES]: Module started', this);
    });
  });

}).call(this);
