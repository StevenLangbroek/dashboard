(function() {
  var _ref, _ref1,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  this.App.Views.WidgetView = (function(_super) {
    __extends(WidgetView, _super);

    function WidgetView() {
      _ref = WidgetView.__super__.constructor.apply(this, arguments);
      return _ref;
    }

    WidgetView.prototype.initialize = function(options) {
      this.name = options.name;
      this.data = google.visualization.arrayToDataTable([["Year", "Sales"], ["2002", 600], ["2003", 1400], ["2004", 1000], ["2005", 1170], ["2006", 660], ["2007", 1030], ["2008", 960], ['2009', 1500], ['2010', 750], ['2011', 1200], ['2012', 600], ['2013', 900], ['2014', 1200]]);
      return this.render();
    };

    WidgetView.prototype.render = function() {
      this.color = this.$el.find('.widget__graph').css('background-color');
      this.createLineChart();
      return this.createBarChart();
    };

    WidgetView.prototype.createBarChart = function() {
      var chartEl, chartElName;
      chartElName = this.name + '-bars';
      chartEl = document.getElementById(chartElName);
      this.barChart = new google.visualization.ColumnChart(chartEl);
      return this.barChart.draw(this.data, this.options);
    };

    WidgetView.prototype.createLineChart = function() {
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

    WidgetView.prototype._getChartOptions = {
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

    return WidgetView;

  })(Backbone.View);

  this.App.Views.BigWidgetView = (function(_super) {
    __extends(BigWidgetView, _super);

    function BigWidgetView() {
      _ref1 = BigWidgetView.__super__.constructor.apply(this, arguments);
      return _ref1;
    }

    BigWidgetView.prototype.initialize = function(options) {
      this.name = options.name;
      this.data = google.visualization.arrayToDataTable([["Year", "Revenue"], ["01", 400], ["02", 600], ["03", 1400], ["04", 1000], ["05", 1170], ["06", 660], ["07", 1030], ["08", 960], ['09', 1500], ['10', 750], ['11', 1200], ['12', 600]]);
      return this.render();
    };

    BigWidgetView.prototype.render = function() {
      return this.createComboChart();
    };

    BigWidgetView.prototype.createComboChart = function() {
      var chartEl, chartElName;
      chartElName = this.name + '-big';
      chartEl = document.getElementById(chartElName);
      this.barChart = new google.visualization.ColumnChart(chartEl);
      return this.barChart.draw(this.data, this.options);
    };

    BigWidgetView.prototype._getChartOptions = {
      title: 'Revenue',
      chartArea: {
        left: 0,
        right: 0,
        top: 0
      },
      backgroundColor: 'white',
      colors: ['silver'],
      legend: 'none',
      seriesType: "bars",
      series: {
        1: {
          type: "line"
        }
      },
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
        }
      }
    };

    return BigWidgetView;

  })(this.App.Views.WidgetView);

}).call(this);
