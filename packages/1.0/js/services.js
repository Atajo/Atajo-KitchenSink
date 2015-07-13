_services = {

    model : [ ],
    
    onExit : function() { var _ = this;

    },

    onLoaded: function () { var _ = this;


		_model.getAll('date', function(model) {
			if(model.length > 0)
			{
    	 		_services.model.date = model[0].date;
    	 	}
    	 });

    	 layout.attach('#servicesFront');

		setTimeout(
			function() {
				_services._Ctrl();  
			}
			, 1000);
    	
    },

    onMessage : function() {


    },

    Ctrl : function($scope)
    {

    	$scope.data = _services.model;
    },

    _Ctrl : function()
  	{
	    e = document.getElementById('servicesFront__FACE');
	    
	    scope = angular.element(e).scope();
	    
	    scope.$apply(function() 
	    {  
	        scope.data = _services.model;
	    }); 
    },

};;;