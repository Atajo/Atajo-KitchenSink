_flashlight = {

    
    onExit : function() { var _ = this;

    },

    onLoaded: function () { var _ = this;

    	 layout.attach('#flashlightFront');
    	
    },

    onMessage : function() {


    },

    Ctrl : function($scope)
    {
    	$scope._isSwitchedOn = window.plugins.flashlight._isSwitchedOn;
    },

    _Ctrl : function()
  	{
	    e = document.getElementById('flashlightFront__FACE');
	    
	    scope = angular.element(e).scope();
	    
	    scope.$apply(function() 
	    {  
	        scope._isSwitchedOn = window.plugins.flashlight._isSwitchedOn;
	    }); 
    },

  switch : function(value) {

  	if(value == 0)
  	{
		window.plugins.flashlight.switchOff()
  	}else if(value == 1)
  	{
  		window.plugins.flashlight.switchOn()
   }else
   {
   		window.plugins.flashlight.toggle()
   }
   _flashlight._Ctrl();
}
,

};;;