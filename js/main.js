var h;
function sticky_relocate() {
    var window_top = $(window).scrollTop();
    var div_top = $('#sticky-anchor').offset().top;
    if (window_top > div_top) {
        $('#mynav').addClass('stick');
    } else {
        $('#mynav').removeClass('stick');
    }
}

$(function () {
    $(window).scroll(sticky_relocate);
    sticky_relocate();
});


var myFunction = function() { console.log(h);};

document.onLoad = function() {
	setInterval(myFunction, 10);
}