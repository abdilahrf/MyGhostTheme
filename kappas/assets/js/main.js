    responsive_iframes();

        hljs.initHighlightingOnLoad();
    (function(g,h,o,s,t,z){g.GoogleAnalyticsObject=s;g[s]||(g[s]=
      function(){(g[s].q=g[s].q||[]).push(arguments)});g[s].s=+new Date;
      t=h.createElement(o);z=h.getElementsByTagName(o)[0];
      t.src='//www.google-analytics.com/analytics.js';
      z.parentNode.insertBefore(t,z)}(window,document,'script','ga'));
      ga('create',ga_ua);ga('send','pageview');
        
        (function () {
            // Target your .container, .wrapper, .post, etc.
            $(".row").fitVids();
        });
        
        document.getElementById('facebook').href = facebook_user;
        document.getElementById('twitter').href = twitter_user;
        document.getElementById('google+').href = google_plus;
        document.getElementById('youtube').href = youtube_user;
        document.getElementById('github').href = github_user;
        $("#sidebar-text").html(custom_text);
        $("#facebook-page").attr("src", "//www.facebook.com/plugins/likebox.php?href="+ facebook_page +"&amp;width=293&amp;colorscheme=light&amp;show_faces=true&amp;stream=false&amp;header=false&amp;height=315&amp;show_border=false");
        
        
//Masonry

	
	var container = document.querySelector('.postContainer');
	var msnry = new Masonry( container, {
	  // options
	  columnWidth: 1,
	  itemSelector: '.item'
	});




