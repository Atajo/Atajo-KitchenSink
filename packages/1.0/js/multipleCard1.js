_multipleCard1 = {

    model : [ ],
    card1 : {},
    onExit : function() { var _ = this;

    },

    onLoaded: function () { var _ = this;
        card1 = {
            data : '',
        }
        layout.attach('#multipleCard1Front');
    	
    },

    onMessage : function() {


    },

    Ctrl : function($scope)
    {
        $scope.card1 = _multipleCard1.card1;
    },
    sendMessage : function()
    {
        layout.sendMessage('multipleCard2',_multipleCard1.card1.data,false);
    }

};;;