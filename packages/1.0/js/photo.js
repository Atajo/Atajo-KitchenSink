_photo = {

    model : [ ],
    PHOTOS : [ ],
    
    onExit : function() { var _ = this;

    },

    onLoaded: function () { var _ = this;


       if(typeof PHOTOS == 'undefined')
       {
           PHOTOS = [];

       }

    	 layout.attach('#photoFront');

		setTimeout(
			function() {
				_photo._Ctrl();  
			}
			, 1000);
    	
    },

    onMessage : function() {


    },

    Ctrl : function($scope)
    {
    	$scope.photos = _photo.PHOTOS;
    },

    _Ctrl : function()
  	{
	    e = document.getElementById('photoFront__FACE');
	    
	    scope = angular.element(e).scope();
	    
	    scope.$apply(function() 
	    {  
	       scope.photos = _photo.PHOTOS;
	    }); 
    },


  camBusy : false,
  capturePhoto : function() {

    try {

        if(_photo.camBusy) { return; }

               _photo.camBusy = true;


          navigator.camera.getPicture(function(imageData) {


          _log.d('GETPICTURE --> '+imageData.substring(0,100));

                imageData = 'data:image/jpeg;base64,'+imageData;


                      _photo.PHOTOS.push( { at: moment().format('LLL'), img: imageData });
                      _photo._Ctrl();

                 _photo.camBusy = false;

       },
       function(fail) {

              _photo.camBusy = false;

              _log.d('GETPICTURE --> Failed because:');


       },
       {
         quality : 75,
         destinationType : 0,
         saveToPhotoAlbum : false,
         targetWidth: 640,
         targetHeight: 640 }
       );


      } catch (e) {

      _photo.camBusy = false;

      _error.add("capturePhoto", e);

      }



   },

   
  isPhotoRemoving : false,
  removePhoto : function(idx) {

      if(_photo.isPhotoRemoving) { return; }

      _photo.isPhotoRemoving = true;


      _photo.PHOTOS.splice(idx,1);


      _photo._Ctrl();

       setTimeout(function(){        _photo.isPhotoRemoving = false;  }, 500);

      _.currScrolls[0].refresh();
  },

};;;