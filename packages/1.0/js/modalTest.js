_modalTest = {

    model : [ ],
    
    onExit : function() { var _ = this;

    },

    onLoaded: function () { var _ = this;


    	 layout.attach('#modalTestFront');

 		 _modalTest.model = 
         {
         	type: 'warning',
         	title: 'REJECT APPROVAL',
         	message: 'Are you sure you want to reject the approval?',
         	showCancel: false
         }

		setTimeout(
			function() {
				_modalTest._Ctrl();  
			}
			, 1000);
    	
    },

    onMessage : function() {


    },

    Ctrl : function($scope)
    {

    	$scope.model = _modalTest.model;
    },

    _Ctrl : function()
  	{
	    e = document.getElementById('modalTestFront__FACE');
	    
	    scope = angular.element(e).scope();
	    
	    scope.$apply(function() 
	    {  
	        scope.model = _modalTest.model;
	    }); 
    },

  showModal : function() {

  	xml = "<b>"+ _modalTest.model.message +"</b>";  

   	_modal.show(
          _modalTest.model.type,
          _modalTest.model.title,
           xml,
           _modalTest.model.showCancel,
          function()
          {
             alert("OK TAPPED");
             _modal.hide();

          },
          function() {
             alert("CANCEL TAPPED");
             _modal.hide();

          }
      );

  	
   },

};;;