_gps = {

    model : [ ],
    GPS : [ ],
    width : 300,
    onExit : function() { var _ = this;

    },

    onLoaded: function () { var _ = this;

           _gps.GPS.lat = '';
           _gps.GPS.lon = '';

    	 layout.attach('#gpsFront');

		setTimeout(
			function() {
				_gps._Ctrl();  
			}
			, 1000);
    	
    },

    onMessage : function() {


    },

    Ctrl : function($scope)
    {
    	$scope.gps = _gps.GPS;
    	
    	e = document.getElementById('gpsFront__FACE');
    	$scope.mapWidth = e.offsetWidth; 
      _gps.width = e.offsetWidth; 
    },

    _Ctrl : function()
  	{
	    e = document.getElementById('gpsFront__FACE');
	    
	    scope = angular.element(e).scope();
	    
	    scope.$apply(function() 
	    {  
	       scope.gps = _gps.GPS;
	       scope.mapWidth = e.offsetWidth; 
         _gps.width = e.offsetWidth; 
	    }); 
    },

  updateLocation : function() {

	if(_location.currLat == 0 && _location.currLon == 0 && _location.currAcc == 0)
    {

           _modal.show('warning',
                'GPS NOT AVAILABLE',
                '<center>Please enable your GPS and make sure you are in an open area with a clear view of the sky.</center>',
                false,
                function()
                 {
                      _modal.hide();
                 }
                );

            return;
    }

    _gps.GPS.lat = _location.currLat ;
    _gps.GPS.lon = _location.currLon ;

    $('#mapImg').attr("src","http://maps.googleapis.com/maps/api/staticmap?center="+_gps.GPS.lat+","+_gps.GPS.lon+"&zoom=14&size="+_gps.width+"x"+_gps.width+"&maptype=roadmap&markers=color:blue%7C"+_gps.GPS.lat+","+_gps.GPS.lon+"&sensor=false");

    _gps._Ctrl();  

   },

};;;