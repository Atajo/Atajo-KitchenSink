_deviceInfo = {

    onExit : function() { var _ = this;

    },

    onLoaded: function () { var _ = this;

            layout.attach('#deviceInfoFront');
    },

    onMessage : function() {


    },

    Ctrl : function($scope)
    {
    	$scope.device = device;
        $scope.device.coreHash = window.localStorage.getItem('LAST_CORE_HASH');
        $scope.device.baseHash = window.localStorage.getItem('LAST_BASE_HASH');
        $scope.device.appVersion = _bootConfig.APPVERSION;
        $scope.device.appRelease = _bootConfig.RELEASE;
    },

};;;