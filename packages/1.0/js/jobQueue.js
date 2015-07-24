_jobQueue = {

    model : [ ],
    custom : [ ],
    currJob : null ,
    currJobs : [],
    lastFace : 0,
    onExit : function() { var _ = this;

    },

    onLoaded: function () { var _ = this;



       _jobQueue.custom = {
        JobName : "name",
        JobDesc : "Desc",
        JobCode : 1,
        JobDup : false,
        JobClear : false,
        JobLockUI : false,
       }

      $.pubsub('subscribe', 'jobQueueUpdate', function(topic, data) {
           var jobID = data.jobId;
           var status = data.status;
          _log.d("data = " + JSON.stringify(data));
          for (var i in _jobQueue.currJobs)
          {
            var job = _jobQueue.currJobs[i];
            if(jobID == job.jobID)
            {

              _jobQueue.currJob = {status:status,jobName:job.jobName};
              if(_jobQueue.lastFace == 1)
              {
                _jobQueue._CtrlSing();
              }else if(_jobQueue.lastFace == 2)
              {
                _jobQueue._CtrlDup();
              }else if(_jobQueue.lastFace == 3)
              {
                _jobQueue._Custom_Ctrl();
              }

              
              break;
            }
          }

      });

     layout.attach('#jobQueueFront');
     layout.attach('#jobQueue_Sing');
     layout.attach('#jobQueue_Dup');
     layout.attach('#jobQueue_Custom');

		setTimeout(
			function() {
				_jobQueue._Ctrl();  
        _jobQueue._Custom_Ctrl();
        _jobQueue._CtrlDup();
			}
			, 1000);
    	
    },

    onMessage : function() {


    },

    sendUnknownJob : function(name,description,allowDuplicate,clearOnDone,lockUI,cb)
    {

      if(typeof name == 'undefined') {  name = "JOB NAME " + code; }
      if(typeof description == 'undefined') {  description = "JOB DESC "; }
      if(typeof allowDuplicate == 'undefined') {  allowDuplicate = false; }
      if(typeof clearOnDone == 'undefined') {  clearOnDone = false; }
      if(typeof lockUI == 'undefined') {  lockUI = false; }
      if(typeof cb == 'undefined') {  cb = false; }

      try
      {
        jobData = { action:'unknownHandler'};

        JOB = {
          jobName: name,
          jobDesc: description,
          data: jobData,
          allowDuplicate: allowDuplicate,
          clearOnDone: clearOnDone,
          lockUI: lockUI,
          callback: cb,
        };
      
        _log.d("JOB = " + JSON.stringify(JOB));
        jobid = jobQueue.add(JOB);
        _jobQueue.currJobs.push({jobID:jobid,jobName: name});

      }catch(err)
      {

          alert(err);

      }

    },

    sendJob : function(code,name,description,allowDuplicate,clearOnDone,lockUI,cb)
    {

      if(typeof code == 'undefined') {  code = 0; }
      if(typeof name == 'undefined') {  name = "JOB NAME " + code; }
      if(typeof description == 'undefined') {  description = "JOB DESC "; }
      if(typeof allowDuplicate == 'undefined') {  allowDuplicate = false; }
      if(typeof clearOnDone == 'undefined') {  clearOnDone = false; }
      if(typeof lockUI == 'undefined') {  lockUI = false; }
      if(typeof cb == 'undefined') {  cb = false; }
      

      try
      {

        response = { code : code , req : "req", res : "res", msg : "msg"  };

        jobData = { action:'jobQueue', data: response};

      JOB = {
        jobName: name,
        jobDesc: description,
        data: jobData,
        allowDuplicate: allowDuplicate,
        clearOnDone: clearOnDone,
        lockUI: lockUI,
        callback: cb,
      };
      
      _log.d("JOB = " + JSON.stringify(JOB));
      jobid = jobQueue.add(JOB);
      _jobQueue.currJobs.push({jobID:jobid,jobName: name});

        

      }catch(err)
      {

          alert(err);

      }

    },

    Ctrl : function($scope)
    {
      $scope.data = _jobQueue.model;
      $scope.currJob = _jobQueue.currJob;
      _jobQueue.lastFace = 0;
    },

    _Ctrl : function()
    {
      e = document.getElementById('jobQueueFront__FACE');
      
      scope = angular.element(e).scope();
      
      scope.$apply(function() 
      {  
         scope.data = _jobQueue.model;
         scope.currJob = _jobQueue.currJob;
      }); 
    },
    _CtrlDup : function()
    {
      e = document.getElementById('jobQueue_Dup__FACE');
      
      scope = angular.element(e).scope();
      
      scope.$apply(function() 
      {  
         scope.currJob = _jobQueue.currJob;
      }); 
    },
    CtrlDup : function($scope)
    {
      $scope.currJob = _jobQueue.currJob;
      _jobQueue.lastFace = 2;
    },
    _CtrlSing : function()
    {
      e = document.getElementById('jobQueue_Sing__FACE');
      
      scope = angular.element(e).scope();
      
      scope.$apply(function() 
      {  
         scope.currJob = _jobQueue.currJob;
      }); 
    },
    CtrlSing : function($scope)
    {
      $scope.currJob = _jobQueue.currJob;
      _jobQueue.lastFace = 1;
    },
    Custom_Ctrl : function($scope)
    {

      $scope.custom = _jobQueue.custom;
      $scope.currJob = _jobQueue.currJob;
      _jobQueue.lastFace = 3;
    },

    _Custom_Ctrl : function()
    {

      e = document.getElementById('jobQueue_Custom__FACE');
      
      scope = angular.element(e).scope();
      
      scope.$apply(function() 
      {  
        scope.custom = _jobQueue.custom;
        scope.currJob = _jobQueue.currJob;

      }); 



    },

    addCustomJob : function()
    {

      _log.d("addCustomJob " + JSON.stringify(_jobQueue.custom ));
      _jobQueue.sendJob(_jobQueue.custom.JobCode,
        _jobQueue.custom.JobName,
        _jobQueue.custom.JobDesc + " " + _jobQueue.custom.JobCode,
        _jobQueue.custom.JobDup,
        _jobQueue.custom.JobClear,
        _jobQueue.custom.JobLockUI,
        false);
    }

};;;