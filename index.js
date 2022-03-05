const btt = document.querySelector("#back-to-top");

btt.addEventListener("click", function () {
    window.scrollTo(0, 0);
});

//scroll link

$('.navbar-text a[href^="#"]').on('click', function (e) {
    e.preventDefault();
    var id = $(this).attr('href'),
        targetOffset = $(id).offset().top;

    $('html, body').animate({
        scrollTop: targetOffset - 100
    }, 500);
});