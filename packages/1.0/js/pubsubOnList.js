_pubsubOnList = {

    model : [ ],
    custom : [ ],
    currJob : null ,
    currJobs : [],
    lastFace : 0,
    info : [],
    status:"NONE",
    
    onExit : function() { var _ = this;

    },

    onLoaded: function () { var _ = this;

        _pubsubOnList.info = [
            {id: 1,user:"User 1",detail:"Detail 1",status:"NONE"},
            {id: 2,user:"User 2",detail:"Detail 2",status:"NONE"},
            {id: 3,user:"User 3",detail:"Detail 3",status:"NONE"}
        ];


        _pubsubOnList.custom = {
            JobName : "name",
            JobDesc : "Desc",
            JobCode : 1,
            JobDup : false,
            JobClear : false,
            JobLockUI : false
        }

        layout.attach('#pubsubOnListFront');

        $.pubsub('subscribe', 'jobQueueUpdate', function(topic, data) {

            var jobID = data.jobId;
            var status = data.status;
            _log.d("data = " + JSON.stringify(data));
            _pubsubOnList.model = data;
            for (var i in _pubsubOnList.currJobs)
            {
                var job = _pubsubOnList.currJobs[i];
                if(jobID == job.jobID)
                {

                    _pubsubOnList.currJob = {status:status,jobName:job.jobName};

                    layout.attach('#pubsubOnListFront');
                }
            }

        });


    	
    },

    onMessage : function() {


    },

    pubCtrl : function($scope) {
        $scope.info = _pubsubOnList.info;

        $scope.data = _pubsubOnList.model;
        $scope.currJob = _pubsubOnList.currJob;

        if ($scope.index != null) {
            $scope.info[$scope.index].status = $scope.currJob.status;
        }


        $scope.sendJob = function (code,name,description,allowDuplicate,clearOnDone,item,index,lockUI,cb) {

            if(typeof code == 'undefined') {  code = 0; }
            if(typeof name == 'undefined') {  name = "JOB NAME " + code; }
            if(typeof description == 'undefined') {  description = "JOB DESC "; }
            if(typeof allowDuplicate == 'undefined') {  allowDuplicate = false; }
            if(typeof clearOnDone == 'undefined') {  clearOnDone = false; }
            if(typeof lockUI == 'undefined') {  lockUI = false; }
            if(typeof cb == 'undefined') {  cb = false; }

            $scope.index = index;

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
                    callback: cb
                };

                _log.d("JOB = " + JSON.stringify(JOB));
                jobid = jobQueue.add(JOB);
                _pubsubOnList.currJobs.push({jobID:jobid,jobName: name,jobData:item});
                layout.attach('#pubsubOnListFront');

            }catch(err)
            {

                alert(err);

            }

        }

    }



};;;