$(document).foundation();

// Mobile Navigation
//------------------

// Mobile Nav Toggle Behavior
$('#mobileNavToggle').on('click', function() {
    $('.localnav').slideToggle(200);
    if ($('#arrowToggle').attr('src') === 'images/down-arrow.png') {
        $('#arrowToggle').attr('src', 'images/up-arrow.png');
    } else {
        $('#arrowToggle').attr('src', 'images/down-arrow.png');
    }
});

// Mobile Nav Window Resize Check
$(window).on('resize', function() {
    // Hide the Nav on Small Displays
    if ( $(window).width() > 640 ) {
        $('.localnav').css('display', 'block');
    } else {
        $('.localnav').css('display', 'none');
    }
    // Return the Arrow to the 'Up' State
    $('#arrowToggle').attr('src', 'images/down-arrow.png');
});


// Collapsed Navigation
//---------------------

// Collapsed Nav Toggle Behavior
$('#collapsedNavToggle').on('click', function() {
    $('.collapsed-nav').slideToggle(200);
    if ($('#arrowToggle').attr('src') === 'images/down-arrow.png') {
        $('#arrowToggle').attr('src', 'images/up-arrow.png');
    } else {
        $('#arrowToggle').attr('src', 'images/down-arrow.png');
    }
});

// Collapsed Nav Window Resize Check
$(window).on('resize', function() {
    // Close Collapsed Nav on Resize
    $('.collapsed-nav').css('display', 'none');
    // Return the Arrow to the 'Up' State
    $('#arrowToggle').attr('src', 'images/down-arrow.png');
});


// Alert Bar
//----------

// Alert Bar is Hidden in CSS by Default
// Check for the Cookie
function dismissBar() {
    // If this cookie does not exist on the user's computer, show the alert-bar
    if (document.cookie.replace(/(?:(?:^|.*;\s*)appsUpdateAlertMessage\s*\=\s*([^;]*).*$)|^.*$/, "$1") !== "true") {
        $('.alert-bar, .alert-bar-close').css('display', 'block');
        $('.alert-bar, .alert-bar-close').fadeIn('fast');
    }
}

// Run the cookie function
dismissBar();

// Dismiss Button Action
$('.alert-bar-close').on('click', function(){
    document.cookie = "appsUpdateAlertMessage=true; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/";
    $('.alert-bar, .alert-bar-close').fadeOut('fast');
});
