_jobQueue = {

    model : [ ],
    
    onExit : function() { var _ = this;

    },

    onLoaded: function () { var _ = this;

    	 layout.attach('#jobQueueFront');

		setTimeout(
			function() {
				_jobQueue._Ctrl();  
			}
			, 1000);
    	
    },

    onMessage : function() {


    },

    sendUnknownJob : function(bool)
    {
        if(typeof bool == 'undefined') {  bool = 0; }

        jobName = "Unknown Handler";
        
        jobDesc = "Handler does not exist";
        
        jobData = { action:'unknownHandler'};

        if(bool == 0)
        {

          jobQueue.addJob(jobName, jobDesc, jobData);

        }else if(bool == 1)
        {

          jobQueue.addJob(jobName, jobDesc, jobData, false, false);

        }else if(bool == 2)
        {

          jobQueue.addJob(jobName, jobDesc, jobData, false, true);

        }else if(bool == 3)
        {

          jobQueue.addJob(jobName, jobDesc, jobData, true, false);

        }else if(bool == 4)
        {

          jobQueue.addJob(jobName, jobDesc, jobData, true, true);

        }

    },

    sendJob : function(code,bool,name,description)
    {

      if(typeof bool == 'undefined') {  bool = 0; }

      if(typeof name == 'undefined') {  name = "JOB NAME " + code; }

      if(typeof description == 'undefined') {  description = "JOB DESC " + bool; }

      try
      {

        response = { code : code , req : "req", res : "res", msg : "msg"  };

        jobName = name;
        
        jobDesc = description;
        
        jobData = { action:'jobQueue', data: response};
        
        alert(bool);

        if(bool == 0)
        {

          jobQueue.addJob(jobName, jobDesc, jobData);

        }else if(bool == 1)
        {

          jobQueue.addJob(jobName, jobDesc, jobData, false, false);

        }else if(bool == 2)
        {

          jobQueue.addJob(jobName, jobDesc, jobData, false, true);

        }else if(bool == 3)
        {

          jobQueue.addJob(jobName, jobDesc, jobData, true, false);

        }else if(bool == 4)
        {

          jobQueue.addJob(jobName, jobDesc, jobData, true, true);

        }

      }catch(err)
      {

          alert(err);

      }

    },

    Ctrl : function($scope)
    {
    	$scope.data = _jobQueue.model;
    },

    _Ctrl : function()
  	{
	    e = document.getElementById('jobQueueFront__FACE');
	    
	    scope = angular.element(e).scope();
	    
	    scope.$apply(function() 
	    {  
	       scope.data = _jobQueue.model;
	    }); 
  },

};;;