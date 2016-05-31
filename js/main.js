// add scripts

$(document).on('ready', function() {
  console.log('sanity check!');
  var blurb = $('<div id="blurb"><p>OUTDOOR FESTIVAL OF DIGITAL ANIMATION AND ART<br>DOWNTOWN DENVER SATURDAY SEPTEMBER 24TH</p></div>');
  var blurbSm = $('<div><p>OUTDOOR FESTIVAL OF DIGITAL ANIMATION AND ART DOWNTOWN DENVER SATURDAY SEPTEMBER 24TH</p></div>');
  $(blurb).appendTo(".navbar-header");
  $(blurbSm).appendTo("#blurb-area");
    $('.carousel').carousel({
        interval: 3000,
        // pause: "hover"
    });
  $('.dropdown').hover(function(){
    $('.dropdown-toggle', this).trigger('click');
  });

  $("#ff-show-hover").mouseover(function(){
    $("#ff-logo").fadeIn();
  });
  $("#ff-show-hover").mouseleave(function(){
    $("#ff-logo").fadeOut();
  });


});
