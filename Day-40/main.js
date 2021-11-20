$('.image').bind('click', function() {
    $('.image').toggleClass('away');
    $(this).removeClass('away').toggleClass('active');
});