_testList = {

    model : [ ],
    
    onExit : function() { var _ = this;

    },

    onLoaded: function () { var _ = this;


    	 _model.getAll('example', function(model) {
    	 	_testList.model = model;
    	 });

    	 //layout.attach('#testListFront');

		setTimeout(
			function() {
				_testList._Ctrl();
			}
			, 1000);
    	
    },

    onMessage : function() {


    },

    Ctrl : function($scope)
    {
    	$scope.data = _testList.model;
        $scope.testVar = "Test item on list";
    },

    _Ctrl : function()
  	{
	    e = document.getElementById('testListFront__FACE');

	    scope = angular.element(e).scope();

	    scope.$apply(function()
	    {
	       scope.data = _testList.model;
	    });
  }



};;;