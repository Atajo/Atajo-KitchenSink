_pubsub = {

    model : [ ],
    jobQueue : {},
    connState : {},
    syncState : {},
    onExit : function() { var _ = this;

    },

    onLoaded: function () { var _ = this;


    	 layout.attach('#pubsubFront');

		 $.pubsub('subscribe', 'jobQueueUpdate', function(topic, data){
		       _pubsub.jobQueue = data;
		       _pubsub._Ctrl();
	   	  });

		 $.pubsub('subscribe', 'connectionState', function(topic, data){
                _pubsub.connState = data;
	       		_pubsub._Ctrl();
        	});

		 $.pubsub('subscribe', 'syncState', function(topic, data){
                _pubsub.syncState = data;
	       		_pubsub._Ctrl();
        	});

    },

    onMessage : function() {


    },

    Ctrl : function($scope)
    {

    	$scope.jobQueue = _pubsub.jobQueue;
    	$scope.connState = _pubsub.connState;
    	$scope.syncState = _pubsub.syncState;
    },

    _Ctrl : function()
  	{
	    e = document.getElementById('pubsubFront__FACE');
	    
	    scope = angular.element(e).scope();
	    
	    scope.$apply(function() 
	    {  
	        scope.jobQueue = _pubsub.jobQueue;
    		scope.connState = _pubsub.connState;
    		scope.syncState = _pubsub.syncState;
	    }); 
    },

};;;