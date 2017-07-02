'use strict';
var app = app || {};

(function(module) {

  function Project(rawDataObj) {
    this.title = rawDataObj.title;
    this.author = rawDataObj.author;
    this.projectUrl = rawDataObj.projectUrl;
    this.publishedOn = rawDataObj.publishedOn;
    this.body = rawDataObj.body;
  }

  Project.all = [];

  Project.prototype.toHtml = function () {
    let template = Handlebars.compile($('#project-template').text());
    return template(this);
  };

  Project.loadAll = function(rawData) {
    rawData.sort(function(a,b) {
      return(new Date(b.publishedOn)) - (new Date(a.publishedOn));
    });
    rawData.forEach(function(ele) {
      Project.all.push(new Project(ele));
    });
  };

  Project.fetchAll = function() {
    var serverETag;

    $.ajax({
      url: '/data/project.json',
      type: 'HEAD',
      success: function(data, messsage, xhr) {
        serverETag = xhr.getResponseHeader('ETag');
      },
      fail: function(err){
        console.error(err);
      }
    });

    if(localStorage.rawData && localStorage.ETag === serverETag) {
      Project.loadAll(JSON.parse(localStorage.rawData));
      app.projectView.initIndexPage();
    } else {
      $.getJSON('/../data/project.json', function(data) {
        localStorage.rawData = JSON.stringify(data);
        localStorage.ETag = serverETag;
        Project.loadAll(data);
        app.projectView.initIndexPage();
      });
    }
  }

  module.Project = Project;
}(app));
