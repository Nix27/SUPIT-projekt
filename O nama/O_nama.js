$(() => {
    $('#hd').slideDown(1000);
    $('#naslov').animate({
        'padding-top': '0',
        'padding-bottom': '30px'
    }, 1000);
    $('#rightMenu').delay(1000).animate({
        left: '0'
    }, 1000, 'easeOutBounce');
});