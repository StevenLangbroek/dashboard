(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  this.Dashboard.module('WidgetApp.List', function(List, App, Backbone, Marionette, $, _) {
    var _ref, _ref1;
    List.Widget = (function(_super) {
      __extends(Widget, _super);

      function Widget() {
        _ref = Widget.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      Widget.prototype.initialize = function(options) {
        return this.data = google.visualization.arrayToDataTable(this.model.get('data'));
      };

      Widget.prototype.onRender = function() {
        this.color = this.$el.find('.widget__graph').css('background-color');
        this.createLineChart();
        return this.createBarChart();
      };

      Widget.prototype.createBarChart = function() {
        var chartEl, chartElName;
        chartElName = this.name + '-bars';
        chartEl = document.getElementById(chartElName);
        this.barChart = new google.visualization.ColumnChart(chartEl);
        return this.barChart.draw(this.data, this.options);
      };

      Widget.prototype.createLineChart = function() {
        var chartEl, chartElName;
        this.options = this._getChartOptions;
        _.extend(this.options, {
          backgroundColor: this.color
        });
        chartElName = this.name + '-lines';
        chartEl = document.getElementById(chartElName);
        this.lineChart = new google.visualization.LineChart(chartEl);
        return this.lineChart.draw(this.data, this.options);
      };

      Widget.prototype._getChartOptions = {
        title: 'Revenue',
        chartArea: {
          left: 0,
          right: 0
        },
        vAxis: {
          title: 'Month',
          titleTextStyle: {
            display: 'none'
          }
        },
        backgroundColor: 'red',
        colors: ['white'],
        legend: 'none',
        vAxis: {
          gridlines: {
            color: 'transparent'
          },
          textPosition: 'none',
          baselineColor: 'transparent'
        },
        hAxis: {
          gridlines: {
            color: 'transparent'
          },
          textPosition: 'none'
        }
      };

      return Widget;

    })(Marionette.ItemView);
    return List.Widgets = (function(_super) {
      __extends(Widgets, _super);

      function Widgets() {
        _ref1 = Widgets.__super__.constructor.apply(this, arguments);
        return _ref1;
      }

      Widgets.prototype.itemView = List.Widget;

      return Widgets;

    })(Marionette.CollectionView);
  });

}).call(this);
