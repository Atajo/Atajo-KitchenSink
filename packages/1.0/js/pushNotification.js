_pushNotification = {

    model : [ ],
    
    onExit : function() { var _ = this;

    },

    onLoaded: function () { var _ = this;


    	 layout.attach('#pushNotificationFront');

    },

    onMessage : function() {


    },

    Ctrl : function($scope)
    {

    	// $scope.barcode = _barcode.model.barcode;
    },

    _Ctrl : function()
  	{
	    // e = document.getElementById('pushNotificationFront__FACE');
	    
	    // scope = angular.element(e).scope();
	    
	    // scope.$apply(function() 
	    // {  
	    //     scope.barcode = _barcode.model.barcode;
	    // }); 
    },

  	send : function()
  	{

  	}

};;;