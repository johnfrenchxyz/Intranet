$(document).foundation();

// Mobile Nav Toggle Behavior
$('#localNavToggle').on('click', function() {
    $('.localnav').slideToggle(200);
});
// Window Resize Check
$(window).on('resize', function() {
    if ( $(window).width() > 640 ) {
        $('.localnav').css('display', 'block');
    } else {
        $('.localnav').css('display', 'none');
    }
});
