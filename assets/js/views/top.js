(function() {
  var _ref,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  this.App.Views.TopView = (function(_super) {
    __extends(TopView, _super);

    function TopView() {
      _ref = TopView.__super__.constructor.apply(this, arguments);
      return _ref;
    }

    TopView.prototype.el = '.top';

    TopView.prototype.events = {
      'click .js-toggle-nav': 'toggleNavigation'
    };

    TopView.prototype.toggleNavigation = function() {
      return $('.body').toggleClass('body--nav-collapsed');
    };

    return TopView;

  })(Backbone.View);

}).call(this);
