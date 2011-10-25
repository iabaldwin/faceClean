function init() {


    if (!chrome.cookies) {
        chrome.cookies = chrome.experimental.cookies;
    }


    chrome.cookies.getAll( { "url":"http://www.facebook.com" }, 
            function( cookies ){ 
            for ( var cookie_iterator=0; cookie_iterator < cookies.length; cookie_iterator++ ) {
            chrome.cookies.remove( { "url":"http"+(cookies[cookie_iterator].secure ? "s" : "" )+ "://"+cookies[cookie_iterator].domain+cookies[cookie_iterator].path, "name":cookies[cookie_iterator].name}, 
                function(details){ console.log( details.url ); } );
            }

            //if (cookies.length > 0)
            //{
            //var notification = webkitNotifications.createNotification(
                //'icon.png',  
                //'faceClean!',  // notification title
                //'Removed '+cookies.length+' Facebook related ' + ( cookies.length == 1 ? 'cookie' : 'cookies'  )
                //);

            //notification.show();
            //}
            
            }); 

          
            document.write( '<img src="icon.png" width="50"></img><p>Removed ' + cookies.length + ' cookies </p>' )
            
            });
}
