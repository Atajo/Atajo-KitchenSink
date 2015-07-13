
var _log = require('../provider/lib/log');


exports.req = function(obj, cb) {


   _log.d("registerPush " + JSON.stringify(obj));
   _log.d("registerPush " + JSON.stringify(obj));
   _log.d("registerPush " + JSON.stringify(obj));
   _log.d("registerPush " + JSON.stringify(obj));
   _log.d("registerPush " + JSON.stringify(obj));
   _log.d("registerPush " + JSON.stringify(obj));
   _log.d("registerPush " + JSON.stringify(obj));
   _log.d("registerPush " + JSON.stringify(obj));
   _log.d("registerPush " + JSON.stringify(obj));
   
   obj.RESPONSE = obj.data;
   cb(obj);

}
