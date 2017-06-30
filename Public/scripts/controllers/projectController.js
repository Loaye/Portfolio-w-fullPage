'use strict';
var app = app || {};

(function(module) {
  const projectController = {};

  projectController.index = () => {
    app.Project.fetchAll(app.projectView.initIndexPage);
  }

  module.projectController = projectController
})(app);
