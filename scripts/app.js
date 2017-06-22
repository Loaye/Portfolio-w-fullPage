'use strict';

var articles = [];

function Article (rawDataObj) {
  this.title = rawDataObj.title;
  this.url = rawDataObj.url;
  this.publishedOn = rawDataObj.publishedOn;
  this.body = rawDataObj.body;
}

Article.prototype.toHtml = function() {
  var $newArticle = $('article.template').clone();
  $newArticle.removeClass('template');

  if (!this.publishedOn) $newArticle.addClass('draft');
  $newArticle.find('.byline a').attr('href', this.url);
  $newArticle.find('.article-body').html(this.body);
  $newArticle.find('.byline time').attr('pubdate', this.publishedOn);
  $newArticle.find('time').html('about ' + parseInt((new Date() - new Date(this.publishedOn))/60/60/24/1000) + ' days ago');
  $newArticle.append('<hr>');
  return $newArticle;
};

rawData.sort(function(a,b) {
  return (new Date(b.publishedOn)) - (new Date(a.publishedOn));
});

rawData.forEach(function(articleObject) {
  articles.push(new Article(articleObject));
});

articles.forEach(function(article) {
  $('#articles').append(article.toHtml());
});

$('span').on('click', function(){
  $('nav ul').toggleClass('show');
});
