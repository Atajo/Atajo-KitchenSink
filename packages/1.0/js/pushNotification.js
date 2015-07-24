_pushNotification = {

    model : [ ],
    sendMsg : {},
    connected : false ,
    onExit : function() { var _ = this;

    },

    onLoaded: function () { var _ = this;


    	 layout.attach('#pushNotificationFront');
       layout.attach('#pushRecv');
       layout.attach('#pushSend');

    _pushNotification.connected = (client.connected && client.connectionState == 2);

    _pushNotification.sendMsg = {
        message : "",
        data : ""
    };


        $.pubsub('subscribe', 'connectionState', function(topic, data) 
        {
                state = data.connected;

                _log.d("LINE ITEMS CONNECTION UPDATE TO STATE : "+state);

                if(state === 0 || state === 1) // TODO --> change for  Yellow tick
                 {
                    _pushNotification.connected = false;
                 }
                else
                 {

                    _pushNotification.connected = true;
                 }
                 _pushNotification._CtrlSend();  
         });


    },

    onMessage : function() {


    },

    Ctrl : function($scope)
    {
      
    	// $scope.barcode = _barcode.model.barcode;
    },

    _Ctrl : function()
  	{
	    // e = document.getElementById('pushNotificationFront__FACE');
	    
	    // scope = angular.element(e).scope();
	    
	    // scope.$apply(function() 
	    // {  
	    //     scope.barcode = _barcode.model.barcode;
	    // }); 
    },
    CtrlRecv : function($scope)
    {
        _model.getAll('pushNotifications', function(messages) {

                  _log.d("GOT "+JSON.stringify(messages));

                  _pushNotification.model = messages;

                  _pushNotification._CtrlRecv();
          });

        $scope.messages = _pushNotification.model;
        // alert($scope.messages.length);
    },
    _CtrlRecv : function()
    {
        e = document.getElementById('pushRecv__FACE');
        
        scope = angular.element(e).scope();
        
        scope.$apply(function() 
        {  
            scope.messages = _pushNotification.model;
            // alert($scope.messages.length);
        });  
    },
    CtrlSend : function($scope)
    {
        $scope.sendMsg = _pushNotification.sendMsg;
        $scope.connected = _pushNotification.connected;
    },
    _CtrlSend : function()
    {
        e = document.getElementById('pushSend__FACE');
        
        scope = angular.element(e).scope();
        
        scope.$apply(function() 
        {  
            scope.sendMsg = _pushNotification.sendMsg;
            scope.connected = _pushNotification.connected;
        });  
    },
    refresh : function()
    {
        _model.getAll('pushNotifications', function(messages) {

                _log.d("GOT "+JSON.stringify(messages));
                _pushNotification.model = messages;
                _pushNotification._CtrlRecv();

        });
    },
    delete : function(elm)
    {
            key = $(elm).closest('li').attr('key');

            _model.del('pushNotifications', key, function() {

                for(var i in _pushNotification.model)
                 {
                     if(_pushNotification.model[i].key == key)
                     {
                         _pushNotification.model.splice(i,1);
                         break;
                     }
                 }
                 _pushNotification._CtrlRecv();

            })
    },
  	send : function()
  	{
        if(typeof _login.credentials.username == 'undefined')
        {
            _modal.show('warning',
                'Please Log In',
                '<center>Need a User to send the Push Notification to.</center>',
                false,
                function()
                 {
                      _modal.hide();
                 }
                );

        }else
        {
            api.get("pushHandler",
            {
              data: _pushNotification.sendMsg.data,
              message : _pushNotification.sendMsg.message,
              user: _login.credentials.username
            },
            function(response)
            {

              if(!response)
              {
                alert("Nothing Returned from API Request");
              }
              else
              {
                  
              }
            });
        }
    }

};;