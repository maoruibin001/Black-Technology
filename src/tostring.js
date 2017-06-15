/**
 * Created by lenovo on 2017/6/7.
 */
/**
 * 数组排序
 * @param  {Array}   arr    待排序数组
 * @param  {string}  key    排序使用的key值，默认为'value';
 * @param  {any}  direct 排序的方向，默认从小到大（可传入任意类型数值，或不传）;
 */
function sort(arr, key, direct) {
    if (!(arr instanceof Array)) return undefined;

    if (arr.length === 0) return arr;
    var tostring = Object.prototype.toString,
        _key = key || 'value';
    if (typeof arr[0] === 'object') {
        //修改Object.prototype.toString返回排序的元素的key值。
        Object.prototype.toString = function() {
            return Number(this[_key]);
        }
    } else {
        direct = key;
    }

    var direct = Number(direct) <= 0 ? -1 : 1;
    arr.sort(function(v1, v2) {
        return direct * (v1 - v2);
    });
    //重置Object.prototype.toString为初始值（必须）。
    Object.prototype.toString = tostring;
    return arr;
}

/**
 * 获取数组最值
 * @param  {Array}   arr    待获取最值数组
 * @param  {string}  key    待获取最值数组key值，默认为'value';
 * @param  {any}  flag      获取最大值还是最小值，默认获取最大值（可传入任意类型数值，或不传）;
 */

function getMaxOrMin(arr, key, flag) {
    if (!arr) return undefined;
    if (!(arr instanceof Array)) return undefined;
    if (arr.length === 0) return arr;
    var tostring = Object.prototype.toString,
        _key = key || 'value',
        ret = undefined;
    if (typeof arr[0] === 'object') {
        Object.prototype.toString = function() {
            return this[_key];
        }
    } else {
        flag = key;
    }
    if (flag === 'min') {
        flag = 0;
    }
    if (Number(flag) <= 0) {
        ret = Math.min.apply(null, arr);
    } else {
        ret = Math.max.apply(null, arr);
    }

    Object.prototype.toString = tostring;
    return ret;
}


module.exports = {
    sort: sort,
    getMaxOrMin: getMaxOrMin
}
