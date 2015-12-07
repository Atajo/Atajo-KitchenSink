//var community = require('../adapters/community/adapter');
var _log = require('../provider/lib/log');


exports.req = function (obj, cb) {

	_log.d("LOGIN AUTH HANDLER CALLED: " + JSON.stringify(obj))

    var delay=5000; //1 seconds

    setTimeout(function(){
        //your code to be executed after 5 seconds
        obj.RESPONSE = true;


        //To demonstrate custom error message on GENERIC 1.7
        //obj.RESPONSE = false;
        //obj.MESSAGE = "COULD NOT LOGIN. PLEASE TRY AGAIN";


        cb(obj);
        return;
    }, delay);


/*
		community.loginToken(obj.credentials.username, obj.credentials.password, function(token, response) {

				if (token) {

						obj.RESPONSE = token;
						obj.ROLES    = response.details.roles;

						//cb(token, response.details);

				} else {

					obj.RESPONSE = false;
					obj.ROLES    = [];

					//  cb(token);

				}

				cb(obj);

		});
*/
}
