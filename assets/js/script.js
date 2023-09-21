/*////////// Add and Remove class on scroll //////////*/
$(window).scroll(function() {
    if($(this).scrollTop() > 0)
    {
        $('nav').addClass('affix');
    } else
    {
        $('nav').removeClass('affix');
    }  
});
/* End */


/*////// Swiper - Banner //////*/
const swiper = new Swiper('.swiper-banner', {
  direction: 'vertical',
  loop: true,
  speed: 1000,
  autoplay: {
    enabled: true,
    delay: 4000,
  },
});

/*////// Team Members //////*/
$('.s-team-list').owlCarousel({
    
    margin:40,
    stagePadding: 110,
    dots:false,
    nav:false,
    mouseDrag: true,
    autoplay:true,
    responsive:{
        0:{
            items:1,
            loop: true,
            stagePadding: 15,
        },
        600:{
            items:2,
        },
        992:{
            items:3
        },
        1199:{
            items:4,
            loop: false,
            stagePadding: 110
        }
    }
});

/*////// Partners //////*/
$('.s-partners-list').owlCarousel({
    loop: true,
    margin:30,
    dots:false,
    nav:false,
    mouseDrag: true,
    autoplay:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
});


/*////// Days Countdown //////*/
function updateTimer() {
  future  = Date.parse("Novermber 5, 2023 09:00:00");
  now     = new Date();
  diff    = future - now;

  days  = Math.floor( diff / (1000*60*60*24) );
  hours = Math.floor( diff / (1000*60*60) );
  mins  = Math.floor( diff / (1000*60) );
  secs  = Math.floor( diff / 1000 );

  d = days;
  h = hours - days  * 24;
  m = mins  - hours * 60;
  s = secs  - mins  * 60;

  document.getElementById("timer")
    .innerHTML =
      '<div>' + d + '<span>days</span></div>' +
      '<div>' + h + '<span>hours</span></div>' +
      '<div>' + m + '<span>minutes</span></div>' +
      '<div>' + s + '<span>seconds</span></div>' ;
}
setInterval('updateTimer()', 1000 );



/*////// Days Countdown - Bottom //////*/
var countDownDate = new Date("Nov 5, 2023 00:00:00").getTime();

var x = setInterval(function() {

  var now = new Date().getTime();

  var distance = countDownDate - now;

  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("days").innerHTML = days < 10 ? '0' + days : days;
  document.getElementById("hours").innerHTML = hours < 10 ? '0' + hours : hours;
  document.getElementById("minutes").innerHTML = minutes < 10 ? '0' + minutes : minutes;
  document.getElementById("seconds").innerHTML = seconds < 10 ? '0' + seconds : seconds;
}, 1000);



/*////// Custom Title Selection //////*/
$(".custom-select").each(function() {
  var classes = $(this).attr("class"),
      id      = $(this).attr("id"),
      name    = $(this).attr("name");
  var template =  '<div class="' + classes + '">';
      template += '<span class="custom-select-trigger">' + $(this).attr("placeholder") + '</span>';
      template += '<div class="custom-options">';
      $(this).find("option").each(function() {
        template += '<span class="custom-option ' + $(this).attr("class") + '" data-value="' + $(this).attr("value") + '">' + $(this).html() + '</span>';
      });
  template += '</div></div>';
  
  $(this).wrap('<div class="custom-select-wrapper"></div>');
  $(this).hide();
  $(this).after(template);
});
$(".custom-option:first-of-type").hover(function() {
  $(this).parents(".custom-options").addClass("option-hover");
}, function() {
  $(this).parents(".custom-options").removeClass("option-hover");
});
$(".custom-select-trigger").on("click", function() {
  $('html').one('click',function() {
    $(".custom-select").removeClass("opened");
  });
  $(this).parents(".custom-select").toggleClass("opened");
  event.stopPropagation();
});
$(".custom-option").on("click", function() {
  $(this).parents(".custom-select-wrapper").find("select").val($(this).data("value"));
  $(this).parents(".custom-options").find(".custom-option").removeClass("selection");
  $(this).addClass("selection");
  $(this).parents(".custom-select").removeClass("opened");
  $(this).parents(".custom-select").find(".custom-select-trigger").text($(this).text());
});
