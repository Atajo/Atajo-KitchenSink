_socialSharing = {

    model : [ ],
    
    onExit : function() { var _ = this;

    },

    onLoaded: function () { var _ = this;


    	 layout.attach('#socialSharingFront');

    },

    onMessage : function() {


    },

    Ctrl : function($scope)
    {


    },

    _Ctrl : function()
  	{
	    e = document.getElementById('socialSharingFront__FACE');
	    
	    scope = angular.element(e).scope();
	    
	    scope.$apply(function() 
	    {  

	    }); 
    },

};;;