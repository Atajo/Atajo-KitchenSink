_pinLock = {

    model : [ ],
    
    onExit : function() { var _ = this;

    },

    onLoaded: function () { var _ = this;


    	 layout.attach('#pinLockFront');
    	
    },

    onMessage : function() {


    },

    Ctrl : function($scope)
    {

    	// $scope.barcode = _barcode.model.barcode;
    },

    _Ctrl : function()
  	{
	    e = document.getElementById('pinLock__FACE');
	    
	    scope = angular.element(e).scope();
	    
	    scope.$apply(function() 
	    {  
	        // scope.barcode = _barcode.model.barcode;
	    }); 
    },
    showPinScreen : function()
    {
    	try
    	{
            _pin.shouldLoadDefaultView = false;
    		_pin.captureCurrPin();
    	}catch(err)
    	{
    		alert(err);
    	}
    }

};;;