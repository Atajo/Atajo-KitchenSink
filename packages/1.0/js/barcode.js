_barcode = {

    model : [ ],
    
    onExit : function() { var _ = this;

    },

    onLoaded: function () { var _ = this;


    	 layout.attach('#barcodeFront');

 		 _barcode.model = 
         {
            barcode : { },
         }

		setTimeout(
			function() {
				_barcode._Ctrl();  
			}
			, 1000);
    	
    },

    onMessage : function() {


    },

    Ctrl : function($scope)
    {

    	$scope.barcode = _barcode.model.barcode;
    },

    _Ctrl : function()
  	{
	    e = document.getElementById('barcodeFront__FACE');
	    
	    scope = angular.element(e).scope();
	    
	    scope.$apply(function() 
	    {  
	        scope.barcode = _barcode.model.barcode;
	    }); 
    },

  scanBarcode : function() {

  	_scanner.scan(function(barcode)
  		{
  			_;og.d("Scanner CallBack " + JSON.stringify(barcode));
  			_barcode.model.barcode = barcode
  			_barcode._Ctrl();
  		});
   },

};;;