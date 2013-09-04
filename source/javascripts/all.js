//= require 'jquery-1.9.1'
//= require 'flowtime'
//= require 'highlight.pack'

$(function() {
    Flowtime.showProgress(true)
    Flowtime.parallaxInPx(true);
    // Flowtime.fragmentsOnSide(true);
    // Flowtime.fragmentsOnBack(true);
    Flowtime.useHistory(false);
    // Flowtime.slideInPx(true);
    // Flowtime.sectionsSlideToTop(true);
    Flowtime.gridNavigation(false);
    // Flowtime.useOverviewVariant(true);

    Flowtime.start();
});

$(function() {
    hljs.tabReplace = '  ';
    hljs.initHighlightingOnLoad();
});

WebFontConfig = {
    google: { families: ['Ubuntu:500,500italic:latin',
                         'Special+Elite::latin',
                         'Pacifico::latin',
                         'Open+Sans:400,600:latin' ] }};
(function() {
    var wf = document.createElement('script');
    wf.src = ('https:' == document.location.protocol ? 'https' : 'http') +
        '://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js';
    wf.type = 'text/javascript';
    wf.async = 'true';
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(wf, s);
})();
