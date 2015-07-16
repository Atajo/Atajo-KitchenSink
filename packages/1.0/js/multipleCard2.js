_multipleCard2 = {

    model : [ ],
    card1 : { },
    onExit : function() { var _ = this;

    },

    onLoaded: function () { var _ = this;
        card1 = {
            data : ''
        }
    	layout.attach('#multipleCard2Front');
    },

    onMessage : function(data) {

        _multipleCard2.card1.data = data;
        _multipleCard2._Ctrl();

    },

    Ctrl : function($scope)
    {
        $scope.card1 = _multipleCard2.card1;
    },
    _Ctrl : function($scope)
    {
        e = document.getElementById('multipleCard2Front__FACE');
        
        scope = angular.element(e).scope();
        
        scope.$apply(function() 
        {  
            scope.card1 = _multipleCard2.card1;
        }); 
    },

};;;