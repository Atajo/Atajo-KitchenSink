_scrollTest = {

    model : [ ],
    scroller: '',
    onExit : function() { var _ = this;

    },

    onLoaded: function (view, card) { 
    	layout.attach('#scrollTestFront');
    	
    },

    onMessage : function() {


    },

    Ctrl : function($scope)
    {

    },

    CtrlPage: function($scope)
    {

    },
    CtrlSiS: function($scope)
    {

        setTimeout(
            function() {
                _.currScrolls[1].options.onBeforeScrollStart = function (e) {
                    e.stopPropagation();
                };

                _.currScrolls[2].options.onBeforeScrollStart = function (e) {
                    e.stopPropagation();
                };

                _.currScrolls[3].options.onBeforeScrollStart = function (e) {
                    e.stopPropagation();
                };
            }
            , 1000);
       

    },

    CtrlDiv: function($scope)
    {

    },

    CtrlSBS: function($scope)
    {
        
    },
    CtrlSB: function($scope)
    {
        
        setTimeout(
            function() {
                // _.currScrolls[0].options.scrollbars = true;
                _.currScrolls[0].options.vScrollbar = true;
                _.currScrolls[0].refresh();
            }
            , 1000);
    },

};;;