_apiReq = {

	model : [ ],

	onExit : function() { var _ = this;

	},

	onLoaded: function () { var _ = this;


		layout.attach('#apiReqFront');

		_apiReq.model = 
		{
			apiReq : undefined,
			apiSend : "{some:'data', is:'more',equal:'than',other:'data'}",
		}

		setTimeout(
			function() {
				_apiReq._Ctrl();  
			}
			, 1000);

	},

	onMessage : function() {


	},

	Ctrl : function($scope)
	{
		$scope.data = _apiReq.model
	},

	_Ctrl : function()
	{
		e = document.getElementById('apiReqFront__FACE');

		scope = angular.element(e).scope();

		scope.$apply(function() 
		{  
			scope.data = _apiReq.model;
		}); 
	},

	sendApiReq : function() {

		api.get("apiReqHandler",
		{
			data: _apiReq.model.apiSend
		},
		function(response)
		{

			if(!response)
			{
//request returned nothing
				alert("Nothing Returned from API Request");
			}
			else
			{
				_apiReq.model.apiReq = response;
				_apiReq.model.apiSend = '';
				_apiReq._Ctrl();
			}
		});
	}

};;;