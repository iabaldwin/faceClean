function init( tab ) {

    if (!chrome.cookies) {
        chrome.cookies = chrome.experimental.cookies;
    }


    chrome.cookies.getAll( { "url":"http://www.facebook.com" }, 
            function( cookies ){ 
                for ( var cookie_iterator=0; cookie_iterator < cookies.length; cookie_iterator++ ) {
                chrome.cookies.remove( { "url":"http"+(cookies[cookie_iterator].secure ? "s" : "" )+ "://"+cookies[cookie_iterator].domain+cookies[cookie_iterator].path, "name":cookies[cookie_iterator].name}, 
                    function(details){ console.log( details.url ); } );
                }
    
    if ( cookies.length> 0 ){
        chrome.browserAction.setBadgeBackgroundColor( { 'color':[255,0,0,255]})
    }
    else
    {
        chrome.browserAction.setBadgeBackgroundColor( { 'color':[0,255,0,255]})
    }
    
    chrome.browserAction.setBadgeText( { 'text': cookies.length.toString() } );
    
    }); 
};
