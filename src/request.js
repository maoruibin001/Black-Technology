/**
 * Created by lenovo on 2017/6/22.
 */
function requestSync(http, options) {
//	    在此处可以进行各种请求的预处理
    return http(options).then(function(res) {
        var myRes = {
//                在此处可以进行各种自定义正确封装
            model: res,
            responseCode: '000000'
        }
        return myRes;
    }, function(error) {
        var myErr = {
//                在此处可以进行各种自定义错误封装
            error: error,
            responseCode: '999999'
        }
        return myErr;
    });
}
function request(http, options, cb) {
    http(options).then(function(res){
        var myRes = {
//                在此处可以进行各种自定义正确封装
            model: res,
            responseCode: '000000'
        }
        return cb.call(this, null, myRes);
    }, function(error) {
        var myErr = {
//                在此处可以进行各种自定义错误封装
            error: error,
            responseCode: '999999'
        }
        return cb.call(this, myErr);
    });
}