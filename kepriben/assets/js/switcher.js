//Style Sheet Switcher version 1.1 Oct 10th, 2006
//Author: Dynamic Drive: http://www.dynamicdrive.com
//Usage terms: http://www.dynamicdrive.com/notice.htm

var manual_or_random="manual"; //"manual" or "random"
var randomsetting="3 days"; //"eachtime", "sessiononly", or "x days (replace x with desired integer)". Only applicable if mode is random.

//////No need to edit beyond here//////////////

function getCookie(Name) {
    var re=new RegExp(Name+"=[^;]+", "i"); //construct RE to search for target name/value pair
    if (document.cookie.match(re)) //if cookie found
        return document.cookie.match(re)[0].split("=")[1]; //return its value
    return null
}

function setCookie(name, value, days) {
    var expireDate = new Date();
    //set "expstring" to either future or past date, to set or delete cookie, respectively
    var expstring=(typeof days!="undefined")? expireDate.setDate(expireDate.getDate()+parseInt(days)) : expireDate.setDate(expireDate.getDate()-5);
    document.cookie = name+"="+value+"; expires="+expireDate.toGMTString()+"; path=/";
}

function deleteCookie(name){
    setCookie(name, "moot");
}


function setStylesheet(title, randomize){ //Main stylesheet switcher function. Second parameter if defined causes a random alternate stylesheet (including none) to be enabled
    var i, cacheobj, altsheets=[""];
    for(i=0; (cacheobj=document.getElementsByTagName("link")[i]); i++) {
        //if this is an alternate stylesheet with title
        if(cacheobj.getAttribute("rel").toLowerCase()=="alternate stylesheet" && cacheobj.getAttribute("title")) { 
            cacheobj.disabled = true;
            altsheets.push(cacheobj); //store reference to alt stylesheets inside array
            //enable alternate stylesheet with title that matches parameter
            if(cacheobj.getAttribute("title") == title) 
                cacheobj.disabled = false; //enable chosen style sheet
        }
    }
    if (typeof randomize!="undefined"){ 
        //if second paramter is defined, randomly enable an alt style sheet (includes non)
        var randomnumber=Math.floor(Math.random()*altsheets.length);
        altsheets[randomnumber].disabled=false;
    }
    return (typeof randomize!="undefined" && altsheets[randomnumber]!="")? altsheets[randomnumber].getAttribute("title") : ""; //if in "random" mode, return "title" of randomly enabled alt stylesheet
}

function setStylesheet2(title, randomize){ //Main stylesheet switcher function. Second parameter if defined causes a random alternate stylesheet (including none) to be enabled
    var i, cacheobj, altsheets=[""];
    for(i=0; (cacheobj=document.getElementsByTagName("link")[i]); i++) {
        //if this is an alternate stylesheet with title
        if(cacheobj.getAttribute("rel").toLowerCase()=="background stylesheet" && cacheobj.getAttribute("title")) { 
            cacheobj.disabled = true;
            altsheets.push(cacheobj); //store reference to alt stylesheets inside array
            //enable alternate stylesheet with title that matches parameter
            if(cacheobj.getAttribute("title") == title) 
                cacheobj.disabled = false; //enable chosen style sheet
        }
    }
    if (typeof randomize!="undefined"){ 
        //if second paramter is defined, randomly enable an alt style sheet (includes non)
        var randomnumber=Math.floor(Math.random()*altsheets.length);
        altsheets[randomnumber].disabled=false;
    }
    return (typeof randomize!="undefined" && altsheets[randomnumber]!="")? altsheets[randomnumber].getAttribute("title") : "";//if in "random" mode, return "title" of randomly enabled alt stylesheet
}

function setStylesheet3(title, randomize){ //Main stylesheet switcher function. Second parameter if defined causes a random alternate stylesheet (including none) to be enabled
    var i, cacheobj, altsheets=[""];
    for(i=0; (cacheobj=document.getElementsByTagName("link")[i]); i++) {
        //if this is an alternate stylesheet with title
        if(cacheobj.getAttribute("rel").toLowerCase()=="external stylesheet" && cacheobj.getAttribute("title")) { 
            cacheobj.disabled = true;
            altsheets.push(cacheobj); //store reference to alt stylesheets inside array
            //enable alternate stylesheet with title that matches parameter
            if(cacheobj.getAttribute("title") == title) 
                cacheobj.disabled = false; //enable chosen style sheet
        }
    }
    if (typeof randomize!="undefined"){ 
        //if second paramter is defined, randomly enable an alt style sheet (includes non)
        var randomnumber=Math.floor(Math.random()*altsheets.length);
        altsheets[randomnumber].disabled=false;
    }
    return (typeof randomize!="undefined" && altsheets[randomnumber]!="")? altsheets[randomnumber].getAttribute("title") : "";//if in "random" mode, return "title" of randomly enabled alt stylesheet
}

//Interface function to switch style sheets plus save "title" attr of selected stylesheet to cookie
function chooseStyle(styletitle, days){ 
    if (document.getElementById){
        setStylesheet(styletitle)
        setCookie("mysheet", styletitle, days)
    }
}
function chooseStyle2(styletitle, days){ 
    if (document.getElementById){
        setStylesheet2(styletitle)
        setCookie("mysheet2", styletitle, days)
    }
}
function chooseStyle3(styletitle, days){ 
    if (document.getElementById){
        setStylesheet3(styletitle)
        setCookie("mysheet3", styletitle, days)
    }
}

if (manual_or_random=="manual"){ //IF MANUAL MODE
    var selectedtitle=getCookie("mysheet");
    var selectedtitle2=getCookie("mysheet2");
    var selectedtitle3=getCookie("mysheet3");
    if (document.getElementById && selectedtitle!=null) //load user chosen style sheet from cookie if there is one stored
        setStylesheet(selectedtitle);
    if (document.getElementById && selectedtitle2!=null) //load user chosen style sheet from cookie if there is one stored
        setStylesheet2(selectedtitle2);
    if (document.getElementById && selectedtitle3!=null) //load user chosen style sheet from cookie if there is one stored
        setStylesheet3(selectedtitle3);
}
else if (manual_or_random=="random"){ //IF AUTO RANDOM MODE
    if (randomsetting=="eachtime")
        setStylesheet("", "random");
    else if (randomsetting=="sessiononly"){ //if "sessiononly" setting
        if (getCookie("mysheet_s")==null) //if "mysheet_s" session cookie is empty
            //activate random alt stylesheet while remembering its "title" value
            document.cookie="mysheet_s="+setStylesheet("", "random")+"; path=/";
        else
            setStylesheet(getCookie("mysheet_s")) //just activate random alt stylesheet stored in cookie
    }
    else if (randomsetting.search(/^[1-9]+ days/i)!=-1){ //if "x days" setting
        //if "mysheet_r" cookie is empty or admin has changed number of days to persist in "x days" variable
        if (getCookie("mysheet_r")==null || parseInt(getCookie("mysheet_r_days"))!=parseInt(randomsetting)){ 
            //activate random alt stylesheet while remembering its "title" value
            setCookie("mysheet_r", setStylesheet("", "random"), parseInt(randomsetting));
            //Also remember the number of days to persist per the "x days" variable
            setCookie("mysheet_r_days", randomsetting, parseInt(randomsetting));
        }
        else
            //just activate random alt stylesheet stored in cookie
            setStylesheet(getCookie("mysheet_r"));
    } 
}