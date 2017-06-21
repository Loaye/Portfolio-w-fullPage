//Initialization of plugin
$(document).ready(function() {
  $('#fullpage').fullpage({
    sectionSelector: '.vertical-scrolling',
    slideSelector: '.horizontal-scrolling',
    navigation: true,
    slidesNavigation: true,
    controlArrows: false,
    anchors: ['home', 'about', 'projects', 'blog', 'contact'],
    menu: '#menu'
  });
});
