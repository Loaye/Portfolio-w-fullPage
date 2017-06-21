//Initialization of plugin
$(document).ready(function() {
  $('#fullpage').fullpage({
    sectionSelector: '.vertical-scrolling',
    slideSelector: '.horizontal-scrolling',
    navigation: false,
    slidesNavigation: true,
    controlArrows: true,
    anchors: ['home', 'about', 'projects', 'blog', 'contact'],
    menu: '#menu'
  });
});
