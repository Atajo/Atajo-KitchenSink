_flip = {

    model : [ ],
    
    onExit : function() { var _ = this;

    },

    onLoaded: function () { var _ = this;


    	layout.attach('#flipFront');
    	layout.attach('#flipBack');

    	_flip.model =
    	{
    	 	dir : "rl",
    	}

    	setTimeout(
			function() {
				_flip._Ctrl();  
			}
			, 1000);
    	
    },

    onMessage : function() {


    },

    Ctrl : function($scope)
    {
    	 $scope.data = _flip.model;
    },

    _Ctrl : function()
  	{
	    e = document.getElementById('flipFront__FACE');
	    
	    scope = angular.element(e).scope();
	    
	    scope.$apply(function() 
	    {  
	        scope.data = _flip.model;
	    }); 
    },
    setDir : function(dir)
    {
        // alert('setDir ' + dir);
		$('#flip').attr('flip',dir);
    	_flip.model.dir = dir;
    	_flip._Ctrl();
    }


};;;