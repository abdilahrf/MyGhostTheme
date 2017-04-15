/************************************************************
*   Theme : Wyvern                                          *
*   Version : 1.0                                           *
*   Theme : Wyvern - Responsive ghost theme                 *
*   File : main.js                                          *
*   Author : Hasnydesign                                    *
*   Author URI : http://themeforest.net/user/hasnydesign    *
*************************************************************/

$(document).ready(function(){
    
/***************
1.0 HighlightJS 
****************/ 
hljs.initHighlightingOnLoad();


/***************
2.0 Fit Vids
****************/ 

(function () {
    // Target your .container, .wrapper, .post, etc.
    $(".item").fitVids();
});


/***************
3.0 Google Analytics
****************/

(function(g,h,o,s,t,z){g.GoogleAnalyticsObject=s;g[s]||(g[s]=
  function(){(g[s].q=g[s].q||[]).push(arguments)});g[s].s=+new Date;
  t=h.createElement(o);z=h.getElementsByTagName(o)[0];
  t.src='//www.google-analytics.com/analytics.js';
  z.parentNode.insertBefore(t,z)}(window,document,'script','ga'));
  ga('create',ga_ua);ga('send','pageview');
        
 
/***************
4.0 Scroll Up
****************/

$(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
        $('.scrollup').fadeIn();
    } else {
        $('.scrollup').fadeOut();
    }
});

$('.scrollup').click(function () {
    $("html, body").animate({
        scrollTop: 0
    }, 600);
    return false;
});


/***************
5.0 Tags Widget
****************/

function tagsFeed() {
$.get("/rss/", function(data) {
    var $xml = $(data);
    var hasil = '';
    var arr = [];
    $xml.find("category").each(function() {
        var tag = $(this).text();
        if ($.inArray(tag, arr) == -1) {
            arr.push(tag);
        }
    });

    arr = jQuery.unique(arr);
    for (var x=0;x<arr.length;x=x+1){
        var tag = arr[x];
        var URLnya = tag.toLowerCase().replace(/ /g,"-");
        hasil += '<a href="/tag/'+URLnya+'/">' + tag + '</a>';
    };
    $('.sidebar-tags-inner').html(hasil);
});
}
tagsFeed();
    
/***************
6.0 Other
****************/


responsive_iframes();
document.getElementById('facebook').href = facebook_user;
document.getElementById('twitter').href = twitter_user;
document.getElementById('google+').href = google_plus;
document.getElementById('youtube').href = youtube_user;
document.getElementById('github').href = github_user;
$("#sidebar-text").html(custom_text);
$("#facebook-page").attr("src", "//www.facebook.com/plugins/likebox.php?href="+ facebook_page +"&amp;width=293&amp;colorscheme=light&amp;show_faces=true&amp;stream=false&amp;header=false&amp;height=315&amp;show_border=false");
$("#twitter-page").attr("src",twitter_url);
$("#twitter-page").attr("data-widget-id",twitter_widget_id);
$("#twitter-page").attr("data-tweet-limit",twitter_limit);
    
});