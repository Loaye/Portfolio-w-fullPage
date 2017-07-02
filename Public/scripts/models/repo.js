'use strict';

var app = app || {};

(function(module) {
  const repos = {};

  repos.all = [];

  repos.requestRepos = function(callback) {
    $.ajax({
      url: 'https://api.github.com/users/repos',
      method: 'GET',
      headers: {'Authorization': 'token ' + githubToken}
    }).then(function(data) {
      repos.all = data;
      callback();
    })
  };

  module.repos = repos;
})(app);
