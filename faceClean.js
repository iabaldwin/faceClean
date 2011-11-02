function init() {

    if (!chrome.cookies) {
        chrome.cookies = chrome.experimental.cookies;
    }

    // Check
    //check() && setInterval( "check()", 5000 );     setInterval does not seem to be persistent?
    
};


function clean( tab ) {

    chrome.cookies.getAll( { "url":"http://www.facebook.com" }, 
            function( cookies ){ 
                
                if ( cookies.length> 0 ){
                    chrome.browserAction.setBadgeBackgroundColor( { 'color':[0,0,255,255]})
                }
                
                chrome.browserAction.setBadgeText( { 'text': cookies.length.toString() } );
    
                for ( var cookie_iterator=0; cookie_iterator < cookies.length; cookie_iterator++ ) {
                    chrome.cookies.remove( { "url":"http"+(cookies[cookie_iterator].secure ? "s" : "" )+ "://"+cookies[cookie_iterator].domain+cookies[cookie_iterator].path, "name":cookies[cookie_iterator].name} );
                }
    
                setTimeout( function(){ 
                //chrome.browserAction.setBadgeText( { 'text':String(0)  } );
                chrome.browserAction.setBadgeText( { 'text':''  } );
                chrome.browserAction.setBadgeBackgroundColor( { 'color':[0,0,0,255]})
                }
                ,1000 );

    }); 
};

function check( tab ){ 

    chrome.cookies.getAll( { "url":"http://www.facebook.com" }, 
            function( cookies ){ 

                if ( cookies.length> 0 ){
                    chrome.browserAction.setBadgeBackgroundColor( { 'color':[255,0,0,255]})
                    chrome.browserAction.setBadgeText( { 'text': cookies.length.toString() } );
                }

    });

    return true;
};


