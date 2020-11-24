$(function() {
    $(".header--menu--humberger").click(function(e) {
        e.preventDefault();
        $(this).toggleClass("active").next().slideToggle(500);
    });
});
