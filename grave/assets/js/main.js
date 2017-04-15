    responsive_iframes();

    //Code Highlight
    hljs.initHighlightingOnLoad();
    
    //Google Analytics
    (function(g,h,o,s,t,z){g.GoogleAnalyticsObject=s;g[s]||(g[s]=
      function(){(g[s].q=g[s].q||[]).push(arguments)});g[s].s=+new Date;
      t=h.createElement(o);z=h.getElementsByTagName(o)[0];
      t.src='//www.google-analytics.com/analytics.js';
      z.parentNode.insertBefore(t,z)}(window,document,'script','ga'));
      ga('create',ga_ua);ga('send','pageview');
        
    //Fit Video
        (function () {
            // Target your .container, .wrapper, .post, etc.
            $(".content").fitVids();
        });
    
    //Social Media Configuration
        document.getElementById('facebook').href = facebook;
        document.getElementById('twitter').href = twitter;
        document.getElementById('google_plus').href = google_plus;
        document.getElementById('youtube').href = youtube;
        document.getElementById('github').href = github;
        document.getElementById('instagram').href = instagram;
        document.getElementById('stack_overflow').href = stack_overflow;
        document.getElementById('vimeo').href = vimeo;
        $("#sidebar-text").html(custom_text);
        $("#facebook-page").attr("src", "//www.facebook.com/plugins/likebox.php?href="+facebook_page+"&width=282&height=258&colorscheme=light&show_faces=true&header=false&stream=false&show_border=false"); 
        $('#mailchimp').attr("action",mailchimp_form_url);
    //Sidebar Configuration
		if(sidebar_left == true) {
			$('#content').addClass('col-md-push-4');
			$('.sidebar').addClass('col-md-pull-8');
		}

