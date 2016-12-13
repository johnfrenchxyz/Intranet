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
    // (This is accomplished with the Mobile Nav's Function)
});
