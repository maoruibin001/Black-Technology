/**
 * Created by lenovo on 2017/6/13.
 */

var memwatch = require('memwatch');

memwatch.on('leak', function(info) {
    console.log(info);
    console.log(222222);
});

/**
 * 高效填充字符函数（填充次数为2的n次方中的n次）
 * @param  {string}  str    待填充的字符串
 * @param  {number}  len    填充后的长度
 * @param  {any}     ch     填充物，可以单个字符，也可以多个字符。
 * @param  {any}     direct 填充位置（r: 右填充，其他：左填充）
 */
function pad(str, len, ch, direct) {
    var left = '', //超出的填充字符
        pad = '', // 完整填充字符
        ch = ch + ''; //填充物

    //完整填充字符
    len = len - str.length;

    // 1、填充长度必须大于0，否则返回原字符串，例如（pad('aa', 0, 'tabca')）
    if (!(len >= 0)) return str;

    if (ch.length > 0 && len % ch.length !== 0) {
        console.log(222)
        //2、不能正好完整填充，则会有超出的填充字符，例如（pad('aa', 7, 'tabc')）
        left = ch.slice(0, len % ch.length);
    }

    // 3、获取实际填充长度，如果超过一个字符，填充次数会相应除去,例如（pad('aa', 7, 't')和2）
    len = Math.floor(len / (ch.length));

    while(true) {
        // 4、长度如果为偶数，则直接对折加如果不是，最后长度为0也会进入该函数，例如（pad('aa', 10, 'taca')和2）
        if (len % 2) pad += ch;// if (len & 1) pad += ch;
        len >>= 1;// len = Math.floor(len / 2);
        if (len) ch += ch;
        else break;
    }
    // 5、默认为左填充，如果想右填充则direct传'r'，例如（pad('aa', 7, 't','r')和2）
    return (direct === 'r' ? str + pad + left : left + pad + str);
}

module.exports = pad;