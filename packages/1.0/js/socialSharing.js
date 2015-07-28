_socialSharing = {

    model : [ ],
    sendMsg : {},
    smsMsg : {},
    emailMsg : {},
    onExit : function() { var _ = this;

    },

    onLoaded: function () { var _ = this;


    	layout.attach('#socialSharingFront');

        _socialSharing.sendMsg = {
            title : null,
            message : null,
            file : null,
            url : null
        };
        _socialSharing.smsMsg = {
            nr:null,
            message : null
        };
        _socialSharing.emailMsg = {
            message : null,
            subject : null,
            to : null,
            cc : null,
            bcc : null,
            file : null,
        };

        _socialSharing._Ctrl();  

    },

    onMessage : function() {


    },

    Ctrl : function($scope)
    {
        $scope.sendMsg = _socialSharing.sendMsg;
        $scope.smsMsg = _socialSharing.smsMsg;
        $scope.emailMsg = _socialSharing.emailMsg;
    },

    _Ctrl : function()
  	{
	    e = document.getElementById('socialSharingFront__FACE');
	    
	    scope = angular.element(e).scope();
	    
	    scope.$apply(function() 
	    {  
            scope.sendMsg = _socialSharing.sendMsg;
            scope.smsMsg = _socialSharing.smsMsg;
            scope.emailMsg = _socialSharing.emailMsg;
	    }); 
    },
    share : function(platform) {

        if(typeof platform == 'undefined')
        {
            SocialSharing.prototype.share(_socialSharing.sendMsg.message,_socialSharing.sendMsg.title,_socialSharing.sendMsg.file ,_socialSharing.sendMsg.url);
        }else if(platform == 'twitter')
        {
            SocialSharing.prototype.shareViaTwitter(
                _socialSharing.sendMsg.title + " - " + _socialSharing.sendMsg.message,
                _socialSharing.sendMsg.file ,
                _socialSharing.sendMsg.url,
                function(msg)
                {
                    //if it could share via twitter
                },function(msg)
                {
                    alert("Could not share via Twitter");
                });
        }else if(platform == 'facebook')
        {
            SocialSharing.prototype.shareViaFacebook(
                _socialSharing.sendMsg.title + " - " + _socialSharing.sendMsg.message,
                _socialSharing.sendMsg.file ,
                _socialSharing.sendMsg.url,
                function(msg)
                {
                    //if it could share via facebook
                },function(msg)
                {
                    alert("Could not share via Facebook");
                });
        }else if(platform == 'whatsapp')
        {
            SocialSharing.prototype.shareViaWhatsApp(_socialSharing.sendMsg.title + " - " + _socialSharing.sendMsg.message,
                _socialSharing.sendMsg.file ,
                _socialSharing.sendMsg.url,
                function(msg)
                {
                    //if it could share via facebook
                },function(msg)
                {
                    alert("Could not share via Whatsapp");
                });
        }else if(platform == 'sms')
        {
            alert(JSON.stringify(_socialSharing.smsMsg));
            SocialSharing.prototype.shareViaSMS(_socialSharing.smsMsg.message,
            _socialSharing.smsMsg.nr,
            function(msg)
            {
                //if it could share via sms
            },function(msg)
            {
                alert("Could not share via SMS " + JSON.stringify(msg));
            });

        }else if(platform == 'email')
        {
            SocialSharing.prototype.shareViaEmail(_socialSharing.emailMsg.message,
             _socialSharing.emailMsg.subject ,
             _socialSharing.emailMsg.to,
             _socialSharing.emailMsg.cc,
             _socialSharing.emailMsg.bcc, 
             _socialSharing.emailMsg.file,
             function(msg)
             {
                 //if it could share via sms
             },function(msg)
             {
                 alert("Could not share via Email");
             });
        }
        
    }

};;;