$(() => {
    $('.nav-menu, .nav-close').click((e) => {
        e.preventDefault();
        $('.nav-social').toggleClass('nav-active');
    });
});