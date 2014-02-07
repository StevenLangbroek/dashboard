(function() {
  _.extend(Marionette.Renderer, {
    render: function(template, data) {
      if (!JST[template]) {
        throw "Template " + template + " not found!";
      }
      return JST[template](data);
    }
  });

}).call(this);
