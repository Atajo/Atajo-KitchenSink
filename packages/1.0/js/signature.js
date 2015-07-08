_signature = {

    model : [ ],
    SIGNATURE : [ ],
    
    onExit : function() { var _ = this;

    },

    onLoaded: function () { var _ = this;


       if(typeof SIGNATURE == 'undefined')
       {
           SIGNATURE = '';

       }

    	 layout.attach('#signatureFront');

		setTimeout(
			function() {
				_signature._Ctrl();  
			}
			, 1000);
    	
    },

    onMessage : function() {


    },

    Ctrl : function($scope)
    {
    	$scope.sig = _signature.SIGNATURE;
    },

    _Ctrl : function()
  	{
	    e = document.getElementById('signatureFront__FACE');
	    
	    scope = angular.element(e).scope();
	    
	    scope.$apply(function() 
	    {  
	       scope.sig = _signature.SIGNATURE;
	    }); 
    },

  removeSignature : function() {
  	_log.d("remove Sig");
  	_signature.SIGNATURE = '';
  	_signature._Ctrl();
  },

  captureSignature : function() {

    _modal.signature(function (signatureData) {
             //_modal.signature( function (signatureData) {
             _log.d("GOT SIGNATURE : " + signatureData);
             _signature.SIGNATURE = signatureData;
             _modal.hide();
             _signature._Ctrl();
         });


   },

};;;