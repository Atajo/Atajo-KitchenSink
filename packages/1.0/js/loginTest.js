_loginTest = {

    model : [ ],
    
    onExit : function() { var _ = this;

    },

    onLoaded: function () { var _ = this;


    	 layout.attach('#loginTestFront');
         layout.attach('#loginMulti');
    	
    },

    onMessage : function() {


    },

    Ctrl : function($scope)
    {
    	$scope.multi = {
	    		credentials : _login_multi.credentials,
	    	}
    	$scope.username = _login.credentials.username;
    },

    _Ctrl : function()
  	{
	    e = document.getElementById('loginMulti__FACE');
	    
	    scope = angular.element(e).scope();
	    
	    scope.$apply(function() 
	    {  
	    	scope.multi = {
	    		credentials : _login_multi.credentials,
	    	}
	        scope.username = _login.credentials.username;
	    }); 
    },
    showLoginScreen : function()
    {
    	layout.show('login');
    },
	showMultiLoginScreen : function()
    {
    	layout.show('login_multi');
    }
    ,
    logout : function()
    {
        //Not the correct way to logout. Should use app.logout();
        atajo.model.del('users', app.credentials.key, function() {
            _login_multi.credentials = false ;
            _loginTest._Ctrl();
        });
        
    },
    logoutAll : function()
    {
        atajo.model.nuke('users',function() {
            _login_multi.credentials = false ;
            _loginTest._Ctrl();
        });
        
    },
    swapUser : function()
    {
        app.switchUser();
    }

};;;