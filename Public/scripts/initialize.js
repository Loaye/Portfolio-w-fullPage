//Initialization of plugin
function initialize() {
  $('#fullpage').fullpage({
    //NAV
    menu: '#menu',
    anchors: ['home', 'about', 'projects', 'blog', 'contact'],
    navigation: false,
    slidesNavigation: true,

    //Scroll
    loopBottom: true,

    //Design
    controlArrows: true,

    //Custom Selector
    sectionSelector: '.vertical-scrolling',
    slideSelector: '.horizontal-scrolling',
  });
}
