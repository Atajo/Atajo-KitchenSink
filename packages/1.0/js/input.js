_input = {

    model : [ ],
    
    onExit : function() { var _ = this;

    },

    onLoaded: function () { var _ = this;

    	 layout.attach('#inputFront');
         layout.attach('#input_common');
         layout.attach('#input_other');

         _storage.model = 
         {
            common : {},
            other : {},
         }

    },

    onMessage : function() {


    },

    Ctrl : function($scope)
    {
        $scope.model = _storage.model;
    },

    _Ctrl : function()
    {
        e = document.getElementById('inputFront__FACE');
        
        scope = angular.element(e).scope();
        
        scope.$apply(function() 
        {  
           scope.model = _storage.model;
        }); 
    },
    Common_Ctrl : function($scope)
    {
        $scope.common = _storage.model.common;
    },

    _Common_Ctrl : function()
    {
        e = document.getElementById('input_common__FACE');
        
        scope = angular.element(e).scope();
        
        scope.$apply(function() 
        {  
           scope.common = _storage.model.common;
        }); 
    },
    Other_Ctrl : function($scope)
    {
        $scope.other = _storage.model.other;
    },

    _Other_Ctrl : function()
    {
        e = document.getElementById('input_other__FACE');
        
        scope = angular.element(e).scope();
        
        scope.$apply(function() 
        {  
           scope.other = _storage.model.other;
        }); 
    },
    

};;;