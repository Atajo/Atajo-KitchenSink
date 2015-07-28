_socialSharing = {

    model : [ ],
    sendMsg : {},
    onExit : function() { var _ = this;

    },

    onLoaded: function () { var _ = this;


    	layout.attach('#socialSharingFront');

        _socialSharing.sendMsg = {
            title : "",
            message : ""
        };

        _socialSharing._Ctrl();  

    },

    onMessage : function() {


    },

    Ctrl : function($scope)
    {
        $scope.sendMsg = _socialSharing.sendMsg;
    },

    _Ctrl : function()
  	{
	    e = document.getElementById('socialSharingFront__FACE');
	    
	    scope = angular.element(e).scope();
	    
	    scope.$apply(function() 
	    {  
            scope.sendMsg = _socialSharing.sendMsg;
	    }); 
    },
    share : function() {

        window.plugins.socialsharing.share(_socialSharing.sendMsg.message, _socialSharing.sendMsg.title);

    },

};;;