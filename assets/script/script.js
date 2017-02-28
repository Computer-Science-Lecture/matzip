function random() {
    var $li = $(".matzip");
    var rand = parseInt(Math.random() * $li.length);
    var $sel = $("#list-" + rand);
    var $out = $("#random-name");
    var $aut = $("#random-a");

    $out.text($sel.data('name'));
    $aut.attr('href', '#list-' + rand)
}

function active(obj) {
    var $act = $(".active");
    $act.removeClass("active");
    obj.addClass("active");
    obj.find(".detail").addClass("active");
}

(function($) {
    "use strict"; // Start of use strict

    $(document).ready(function() {
        random();
    });

    $('a#refresh').bind('click', function(event) {
        random();
    });

    $('#random-a').bind('click', function(event) {
        active($($(this).attr('href')));
    });

    $('.matzip').bind('click', function(event) {
        active($(this));
    });

    // jQuery for page scrolling feature - requires jQuery Easing plugin
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 50)
        }, 1250, 'easeInOutExpo');
        event.preventDefault();
    });

    // Highlight the top nav as scrolling occurs
    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 51
    });

    // Closes the Responsive Menu on Menu Item Click
    $('.navbar-collapse ul li a').click(function() {
        $('.navbar-toggle:visible').click();
    });

    // Offset for Main Navigation
    $('#mainNav').affix({
        offset: {
            top: 100
        }
    })

    // Initialize and Configure Scroll Reveal Animation
    window.sr = ScrollReveal();
    sr.reveal('.sr-icons', {
        duration: 600,
        scale: 0.3,
        distance: '0px'
    }, 200);
    sr.reveal('.sr-button', {
        duration: 1000,
        delay: 200
    });
    sr.reveal('.sr-contact', {
        duration: 600,
        scale: 0.3,
        distance: '0px'
    }, 300);

})(jQuery); // End of use strict
