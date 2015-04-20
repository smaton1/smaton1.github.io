$(document).ready(function () {
  $("#soho_hack_image").click(function() {
  $.modal("<div><h1>Soho House Hackathon App</h1><br><p id='overlay_text'>I recently took part in a Hackathon hosted by 3beards and Yahoo. We were given a number of API's by Yahoo and had to create an app with the theme of London. We decided to build a number of games and art installations using angularJS.</p><br><img class='portfolio_image_overlay' src='soho_hack.png'><br><a href='http://www.sirrahmj.co.uk/yahoo_soho_house_hackathon/'>Project link</a></div>", {opacity:100});
  });

    $("#dota_app_image").click(function() {
  $.modal("<div><h1>Dota 2 App</h1><br><p id='overlay_text'>This was my final project for the General Assembly course. I decided to build some sort of social media website but in order to scope it down a bit I based it around a video game, Dota 2. This project pushed my technical ability, it required me to use the Steam Oauth system. It reuired me to pull a users information from the Steam api, save that information to a data base and then send their information to the Dota 2 api to get their match history. I also put together live chat using Jquery and an RSS reader for the games Reddit forum. Although a lot of the design work was never finished due to time contraints I believe it helps show off my technical ability.</p><br><img class='portfolio_image_overlay' src='uk_dota_app.png'><br><a href='http://uk-dota.herokuapp.com/'>Project link</a></div>", {opacity:100});
  });

     $("#game_center_image").click(function() {
  $.modal("<div><h1>Responsive Game Center App</h1><br><p id='overlay_text'>This was a project I put together in my own time to help improve my javascript ability as well as test out some responsive desgin thoughts I had. The aim was to build two javascript games and get them to work well on a mobile device. I used a number of tutorials to help me put together the games and these videos greatly helped improve my javascript knowledge.</p><br><img class='portfolio_image_overlay' src='game_center.png'><br><a href='http://smaton1.github.io/game_center/'>Project link</a></div>", {opacity:100});
  });
     $('.handle').on('click', function(){
    $('nav ul').toggleClass('showing');
  });

});