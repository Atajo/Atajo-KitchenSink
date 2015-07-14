_angular = {

    model : [ ],

    onExit : function() { var _ = this;

    },

    onLoaded: function () { var _ = this;

    	 layout.attach('#angularFront');
    },

    onMessage : function() {


    },

    Ctrl : function($scope)
    {

    },

    repeatCtrl : function($scope)
    {
      $scope.names = ['Jani','Hege','Kai']; 
    },

    boolCtrl : function($scope)
    {
      $scope.bool = false; 
    },

    clickCtrl : function($scope)
    {
      $scope.num = 0; 
    },
    filterCtrl : function($scope)
    {
      $scope.filterData = ''; 
    },

};;;