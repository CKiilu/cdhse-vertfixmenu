jQuery(document).ready(function ($) {
    var contentSections = $('.cd-section'),
        navigationItems = $('#cd-vertical-nav a');
    updateNavigation();
    $(window).on('scroll', function () {
        updateNavigation();
    });

    //    smooth scroll to section
    navigationItems.on('click', function (event) {
        event.preventDefault();
        smoothScroll($(this.hash));
    });
})
