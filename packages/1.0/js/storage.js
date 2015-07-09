_storage = {

    model : [ ],
    
    onExit : function() { var _ = this;

    },

    onLoaded: function () { var _ = this;

    	 layout.attach('#storageFront');
         layout.attach('#storage_set');
         layout.attach('#storage_getAll');
         layout.attach('#storage_batch');

         set = 
         {
            key : undefined,
            data : ''
         };

         _storage.model = 
         {
            set : set,
            batch : [ ],
         }


		setTimeout(
			function() {
				_storage._Ctrl();  
                _storage._Set_Ctrl();
                _storage._GetAll_Ctrl();
			}
			, 1000);
    	
    },

    onMessage : function() {


    },

    Ctrl : function($scope)
    {
        $scope.model = _storage.model;
    },

    _Ctrl : function()
    {
        e = document.getElementById('storageFront__FACE');
        
        scope = angular.element(e).scope();
        
        scope.$apply(function() 
        {  
           scope.model = _storage.model;
        }); 
    },
    Set_Ctrl : function($scope)
    {
        $scope.set = _storage.model.set;
    },

    _Set_Ctrl : function()
    {
        e = document.getElementById('storage_set__FACE');
        
        scope = angular.element(e).scope();
        
        scope.$apply(function() 
        {  
           scope.set = _storage.model.set;
        }); 
    },
    GetAll_Ctrl : function($scope)
    {
        _storage.getAll();
        $scope.getAll = _storage.model.getAll;
    },

    _GetAll_Ctrl : function()
    {
        e = document.getElementById('storage_getAll__FACE');
        
        scope = angular.element(e).scope();
        
        scope.$apply(function() 
        {  
           scope.getAll = _storage.model.getAll;
        }); 
    }, 
    Batch_Ctrl : function($scope)
    {
        $scope.batch = _storage.model.batch;
    },

    _Batch_Ctrl : function()
    {
        e = document.getElementById('storage_batch__FACE');
        
        scope = angular.element(e).scope();
        
        scope.$apply(function() 
        {  
           scope.batch = _storage.model.batch;
        }); 
    },

    set : function()
    {
        alert("set: " + JSON.stringify(_storage.model.set));
         _model.set("testStorage",
            _storage.model.set,
            function()
             {  
                alert('Save Successful');
                layout.sendMessage('storage');
                _storage.model.set = { key : undefined, data : '' };
                _storage._GetAll_Ctrl();
             }
           );
    },

    getAll : function()
    {
        _model.getAll("testStorage",  function(records) {  

            _storage.model.getAll = records;
            _storage._GetAll_Ctrl();

        });

    },
    addBatch : function()
    {
        _storage.model.batch.push({key : undefined,data : ''}); 
        _storage._Batch_Ctrl();
    },

    batch : function()
    {
        _model.batch("testStorage",
             _storage.model.batch,
           function() { 
                alert("Save Successful");
                _storage.model.batch = [];
                layout.sendMessage('storage');
                _storage._Batch_Ctrl();
              });
    }

};;;