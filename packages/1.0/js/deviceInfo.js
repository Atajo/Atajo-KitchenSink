_deviceInfo = {

    states : {},

    onExit : function() { var _ = this;

    },

    onLoaded: function () { var _ = this;

            layout.attach('#deviceInfoFront');
    },

    onMessage : function() {


    },

    Ctrl : function($scope)
    {
        _deviceInfo.states[Connection.UNKNOWN]  = 'Unknown connection';
        _deviceInfo.states[Connection.ETHERNET] = 'Ethernet connection';
        _deviceInfo.states[Connection.WIFI]     = 'WiFi connection';
        _deviceInfo.states[Connection.CELL_2G]  = 'Cell 2G connection';
        _deviceInfo.states[Connection.CELL_3G]  = 'Cell 3G connection';
        _deviceInfo.states[Connection.CELL_4G]  = 'Cell 4G connection';
        _deviceInfo.states[Connection.CELL]     = 'Cell generic connection';
        _deviceInfo.states[Connection.NONE]     = 'No network connection';

    	$scope.device = device;
        $scope.device.coreHash = window.localStorage.getItem('LAST_CORE_HASH');
        $scope.device.baseHash = window.localStorage.getItem('LAST_BASE_HASH');
        $scope.device.appVersion = _bootConfig.APPVERSION;
        $scope.device.appRelease = _bootConfig.RELEASE;
        $scope.networkState = _deviceInfo.states[navigator.connection.type];
    },

};;;