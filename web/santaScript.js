/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
       $(document).ready(function(){
  // Add smooth scrolling to all links
  $(".smoothScroll").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 500, function(){
        window.location.hash = hash;
      });
    } 
  });
});

    var slideIndex = 1;
    showDivs(slideIndex);

    function plusDivs(n) {
       showDivs(slideIndex += n);
    }

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("slide");
  if (n > x.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";  
  }
  x[slideIndex-1].style.display = "block";  
}

       var date = new Date();
       var day = date.getDate();
       var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
       var month = months[date.getMonth()];
       var year = date.getFullYear();
       document.getElementById('currentDate').innerHTML = day + " " + month + " " +year;

/*open small-device navbar*/
      function showNav(){
         document.getElementById("myDropdown").classList.toggle("show");
      }

      $(document).ready(function () {
              $("#myDropdown li a").click(function() {
              $("#myDropdown").removeClass('show');
           });
      });

/*Fix the navigation bar to the top when it hits the top of the screen*/
       $(document).ready(function() {
           var touchTop = $('#topNav').offset().top;
            function topAffix(){
            var topOffset = $(window).scrollTop();
        
            if (topOffset > touchTop) { 
               $('#topNav').addClass('fix-nav');
               show('navHead');
            } else {
               $('#topNav').removeClass('fix-nav'); 
               hide('navHead');
             }
       };
       topAffix();
        //constantly check if offset is met during scolling
        $(window).scroll(function() {
           topAffix();
        });
       });

   /*reveal Santa's reply handling when 'post' button clicked*/
       function writeNew(){
           $('#santaReply').addClass('hide');
           $('#section3').removeClass('hide');
       }
       function postMail(){
           $('#santaReply').removeClass('hide');
       }
       function showLoader(){
           $('#section3').addClass("hide");
           
           var $loader = $('#section4');
           $loader.removeClass("hide");
           
           setTimeout(function(){
               postMail();
               $loader.addClass('hide');
            },3000);
       }

       //format proper nouns in santa's return letter grammar
       var app = angular.module('mailApp', []);
       
       app.filter('nounFormat', function(){
           return function(noun){
               if (noun!=null){
                   noun = noun.toLowerCase();
                   noun = noun.split(" ");
                   var formatted = "";
                   for (var i=0; i<noun.length; i++){
                       formatted += noun[i].charAt(0).toUpperCase()+noun[i].substring(1);
                       if (i != (noun.length)-1){
                           formatted += " ";
                       }
                   }  
                   return formatted;
               }
           }
       });

    (function($){
        $('.elevator-wrapper').append('<a id="elevator" class="elevator smoothScroll" href="#section1"><span class="glyphicon glyphicon-chevron-up"></span></div>');
    
        //hide/show elevator, where offset = 300
        $(window).scroll(function(){
            if($(this).scrollTop() > 500){
                $('#elevator').addClass('showElevator');
            } else{
                $('#elevator').removeClass('showElevator');
            }
        });
        
    })(jQuery);

           function hide(elementId){
               document.getElementById(elementId).className += " hide";
           }
           function show(elementId){
               document.getElementById(elementId).className -= " hide";
           }

/*COUNTDOWN*/
        startCountdown();
        function startCountdown(){
            updateCountdown();
            setInterval(updateCountdown,1000);
        }
        function getTimeRemaining(endtime){
            var msLeft = Date.parse(endtime) - Date.parse(new Date());
            var seconds = Math.floor( (msLeft/1000)%60 );
            var minutes = Math.floor( (msLeft/1000/60)%60);
            var hours = Math.floor( (msLeft/(1000*60*60)) %24);
            var days = Math.floor(msLeft/(1000*60*60*24));
            return{
                'days': days,
                'hours': hours,
                'minutes': minutes,
                'seconds':seconds
            };
        }
        function getDays(time){
            //IMPLEMENT
        }
        function updateCountdown(){
             var t = getTimeRemaining('2016-12-24 23:59:59 GMT+1300');
             $('#days').html(('0' + t.days).slice(-2));
             $('#hours').html(('0' + t.hours).slice(-2));
             $('#minutes').html(('0' + t.minutes).slice(-2));
             $('#seconds').html(('0' + t.seconds).slice(-2));
        }
