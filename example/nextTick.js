/**
 * Created by lenovo on 2017/6/21.
 */

var evn = new (require('events').EventEmitter);
evn.on('ok', function() {
    console.log('on');
})
setImmediate(function() {
    console.log(111);
});
setTimeout(function() {
    console.log(3333);
}, 0)

process.nextTick(function() {
    console.log(22222);
});

console.log(000);
evn.emit('ok');
