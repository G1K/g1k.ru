/*!
 * Start Bootstrap - Freelancer Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function () {
    $('.page-scroll a').bind('click', function (event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Floating label headings for the contact form
$(function () {
    $("body").on("input propertychange", ".floating-label-form-group", function (e) {
        $(this).toggleClass("floating-label-form-group-with-value", !!$(e.target).val());
    }).on("focus", ".floating-label-form-group", function () {
        $(this).addClass("floating-label-form-group-with-focus");
    }).on("blur", ".floating-label-form-group", function () {
        $(this).removeClass("floating-label-form-group-with-focus");
    });
});

// Highlight the top nav as scrolling occurs
$('body').scrollspy({
    target: '.navbar-fixed-top'
})

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function () {
    $('.navbar-toggle:visible').click();
});


window.sr = ScrollReveal();
sr.reveal('.skillbar', {duration: 3000});
sr.reveal('.grid-item', {duration: 1000});
sr.reveal('.timeline > li', {duration: 1000});

jQuery(document).ready(function () {
    jQuery('.skillbar').each(function () {
        jQuery(this).viewportChecker({
            callbackFunction: function (elem, action) {
                elem.find('.skillbar-bar').animate({
                    width: elem.attr('data-percent')
                }, 6000);
            }
        });
    });
});

//	HISTORICIZE AND AJAXIFY OUR SITE
/*
jQuery(document).ready(function () {
    var siteUrl = 'http://' + (document.location.hostname || document.location.host);

    //	Catch all internally-focused links and push a new state.
    //	Note: External links will not be affected by this behavior.
    $(document).delegate('a[href^="/"],a[href^="' + siteUrl + '"]', "click", function (e) {
        e.preventDefault();
        History.pushState({}, "", this.pathname);
    });

    History.Adapter.bind(window, 'statechange', function () {
        var State = History.getState();
        $.get(State.url, function (data) {
            $('html').html(data);
        });
    });
});
    */