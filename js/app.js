$(document).ready( function() {
    $('#nav-command').on('click','#about-button', function(){
        $('#about-list').fadeIn();
        $('#sched-list').hide();
    });
    $('#nav-command').on('click','#sched-button', function(){
        $('#sched-list').fadeIn();
        $('#about-list').hide();
    });
    $('.my-background-video').bgVideo();
    $('#mobil-nav').click(function(){
    $(this).toggleClass('open');
});
});

//# sourceMappingURL=../maps/app.js.map
