_storage = {

    model : [ ],
    
    onExit : function() { var _ = this;

    },

    onLoaded: function () { var _ = this;

    	 layout.attach('#storageFront');
         layout.attach('#storage_set');
         layout.attach('#storage_getAll');
         layout.attach('#storage_batch');
         layout.attach('#storage_getKey');
         layout.attach('#storage_del');

         _storage.model = 
         {
            set : { key : undefined , data : ''},
            batch : [ ],
            getKey : { key : undefined , data : ''},
            del : { key : undefined},
         }

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
    GetKey_Ctrl : function($scope)
    {
        _storage.getAll();
        $scope.getKey = _storage.model.getKey;
    },

    _GetKey_Ctrl : function()
    {
        e = document.getElementById('storage_getKey__FACE');
        
        scope = angular.element(e).scope();
        
        scope.$apply(function() 
        {  
           scope.getKey = _storage.model.getKey;
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
    Del_Ctrl : function($scope)
    {
        $scope.del = _storage.model.del;
    },

    _Del_Ctrl : function()
    {
        e = document.getElementById('storage_del__FACE');
        
        scope = angular.element(e).scope();
        
        scope.$apply(function() 
        {  
           scope.del = _storage.model.del;
        }); 
        
    },

    set : function()
    {
         _model.set("testStorage",
            _storage.model.set,
            function()
             {  
                alert('Save Successful');
                _storage.model.set = { key : undefined, data : '' };
                _storage._Set_Ctrl();
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
                _storage._Batch_Ctrl();
              });
    },
    nuke : function()
    {
        _model.nuke("testStorage", function() {  
            alert("Delete Successful");
        });
    },
    getKey : function()
    {
        _model.getKey("testStorage", _storage.model.getKey.key,  function(record) {  

            _storage.model.getKey.data = record;
            if(record == null )
            {
                alert("Key does not exist");
            }
            _storage._GetKey_Ctrl();
        });
    },
    del : function()
    {
        _model.del("testStorage", _storage.model.del.key + "", function() {  
            alert("Entry deleted");
            _storage.model.del.key = undefined;
            _storage._Del_Ctrl();
        });
    }

};;;