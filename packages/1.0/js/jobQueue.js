_jobQueue = {

    model : [ ],
    custom : [ ],

    onExit : function() { var _ = this;

    },

    onLoaded: function () { var _ = this;

    	 layout.attach('#jobQueueFront');
       layout.attach('#jobQueue_Sing');
       layout.attach('#jobQueue_Dup');
       layout.attach('#jobQueue_Custom');

       _jobQueue.custom = {
        JobName : "name",
        JobDesc : "DEsc",
        JobCode : 1,
        JobDup : false,
        JobClear : false,
        JobLockUI : false,
       }

		setTimeout(
			function() {
				_jobQueue._Ctrl();  
        _jobQueue._Custom_Ctrl();
			}
			, 1000);
    	
    },

    onMessage : function() {


    },

    sendUnknownJob : function(name,description,allowDuplicate,clearOnDone,lockUI,cb)
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
        jobQueue.add(JOB);

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
      jobQueue.add(JOB);

        

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
    Custom_Ctrl : function($scope)
    {
      $scope.custom = _jobQueue.custom;

      // $('.make-switch-checklist').on('touchstart', function () {
      //     var me = $(this);
      //     if ($(me).prop('checked')) {
      //         $(me).prop('checked', false);
      //         _jobQueue.custom.JobClear = false;
      //     } else {
      //         _jobQueue.custom.JobClear = true;
      //          $(me).prop('checked', true);
      //     }
      //   });

    },

    _Custom_Ctrl : function()
    {

      e = document.getElementById('jobQueue_Custom__FACE');
      
      scope = angular.element(e).scope();
      
      scope.$apply(function() 
      {  
        scope.custom = _jobQueue.custom;

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